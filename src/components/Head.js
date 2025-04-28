import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
const handleClick = () =>{
dispatch(toggleMenu());
}

  return (
    <div className='grid grid-flow-col shadow-lg p-4 m-2'>
      <div className='flex col-span-1 '>
        <img  onClick={handleClick} className='h-8 cursor-pointer' alt="" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png"/>
        <img className='h-8 mx-2' alt="" src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg"/>
      </div>
      <div className='col-span-10 px-10'>
<input className='w-1/2 border border-gray-400  rounded-l-full p-2' type='text'/>
<button className=' border border-gray-400 rounded-r-full p-2'>Search</button>
      </div>
      <div className='col-span-1 w-8 h-8'>
<img alt="" src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"/>
      </div>
    </div>
  )
}

export default Head