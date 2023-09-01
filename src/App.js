import './App.css';
import Home from '../src/Container/Home'
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import AuthState from './context/auth/AuthState';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormWhileGoogle from './Components/FormWhileGoogle';


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
              <Route path='/loginWG' element={<FormWhileGoogle />} />
            </Routes>
          </AuthState>
        </Router>
      </div>
    </>

  );
}

export default App;
