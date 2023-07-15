import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../features/userDataSlice';

const Home = () => {

  const data = useSelector((state) => state.app);
  console.log("data", data.users);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getUser())
  }

  return (
    <div>
      <h1>Hello na public</h1>
      <button className='bg-blue-500 rounded-md py-2 px-3 text-white m-4' onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default Home