
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Compose from './components/Compose';


function App() {
  return (
    <div className="App">
      <Router>
        <div className=''> 
          <Header />
          <Routes>
            <Route path='/compose' element={<Compose />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
