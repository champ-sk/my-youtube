import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const showMenu = useSelector((store)=>store.app.toggleMenu);
  if(!showMenu) return null;
  return (
    <div className='p-5 shadow-lg w-48'>
   
      <ul>
        <li ><Link to={"/"}>Home</Link>
          </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>        
      </ul>
      <h1 className='font-bold pt-2'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>        
      </ul>
      <h1 className='font-bold pt-2'>Watch Later</h1>
      <ul>
        <li>News</li>
        <li>Courses</li>
        <li>Poadcasts</li>
        <li>Trending</li>        
      </ul>
    </div>
  )
}

export default Sidebar