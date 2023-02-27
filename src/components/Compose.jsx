import React, { useState } from 'react'
import { useStorage } from './firebase/useStorage';

const initialPostValue = {
  title: '',
  content: '',
  mediaUrls: []
}



const Compose = () => {
    const { imageUpload, loading, imageUrl,  } = useStorage();

  const [post, setPost] = useState(initialPostValue)

  const handleTitleAndContent = async (e) => {
    const { name, value } = e.target;
    if(name === 'title' || name === 'content') {
      setPost((prevVal) => ({ ...prevVal, [name]: value }));
      return
    } else {
      if (e.target.files[0].type === 'image/jpeg') {
        await imageUpload(e.target.files[0])
        console.log(imageUrl);
      } else {
        alert('Only Images are allowed here. Period.')
      }
    }
    
  };


  return (
    <div className="compose">
      <div>
        <h1 className="compose-header">Speak Out</h1>
        <div className="compose-content">
          <form>
            <label>
              Title:{" "}
              <input
                type="text"
                onChange={handleTitleAndContent}
                placeholder="Enter title here"
                name="title"
              />
            </label>
            <label>
              Description:{" "}
              <textarea
                onChange={handleTitleAndContent}
                placeholder="See something? say something"
                name="description"
              ></textarea>
            </label>

            <label>
              Media:
              <input
                onChange={(e) => handleTitleAndContent(e)}
                type="file"
                name="media"
              />
            </label>
            <label>
              <input type="button" value="Post" className="compose-submit" />
            </label>
            {loading && <h3>Uploading Image to server. Please wait a moment...</h3>}
            <div className="file-preview"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Compose