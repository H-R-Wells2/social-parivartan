import './App.css';
import Home from './Container/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <div className={`bg-gray-200 transition ease-in-out duration-500 min-h-screen`}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>

  );
}

export default App;
