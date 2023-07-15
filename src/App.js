import './App.css';
import Home from '../src/Container/Home'
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import AuthState from './context/AuthState';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <div className={`bg-gray-200 transition ease-in-out duration-500 min-h-screen`}>
        <Router>
          <AuthState>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </AuthState>
        </Router>
      </div>
    </>

  );
}

export default App;
