import { storage } from "../../firebase.config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";




export const useStorage = (collectionName, _query, _sort) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [progress, setProgress] = useState(0);

  //if we do not use a useRef hook, there will be infinite loop in useEffect hook and we do not want that
  //_query is an array and is different on every funtion call

  const imageUpload = async (file) => {


    setLoading(true);
    const storageRef = ref(storage, `/entry_images/${Date.now()}${file.name}`);
    const uploadImage = uploadBytesResumable(storageRef, file);
    uploadImage.on(
      'state_changed',
      (snapshot) => {
        setProgress(
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        );
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref)
          .then((url) => {
            setImageUrl(url);
            setError(null);
            setLoading(false);
            console.log(imageUrl);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      }
    );
  };

  return { error, loading, imageUpload, progress, imageUrl };
}