import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
   const [showSearch, setShowSearch] = useState([]);
   const [hideSearch, setHideSearch ] = useState(false) ;


  const fetchQuery = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setShowSearch(json[1]);
   // console.log(json[1]);
  };
  useEffect(() => {
    const timer = setTimeout(() => fetchQuery(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-4 m-2">
      <div className="flex col-span-1 ">
        <img
          onClick={handleClick}
          className="h-8 cursor-pointer"
          alt=""
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png"
        />
        <img
          className="h-8 mx-2"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 px-5 rounded-l-full p-2"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=>setHideSearch(true)}
          onBlur={()=>setHideSearch(false)}
        />
        <button className=" border border-gray-400 rounded-r-full p-2">
          Search
        </button>
        {
        hideSearch &&  <div className="fixed py-2 px-2 bg-white w-[31rem] rounded-lg shadow-lg">
          <ul>
            {showSearch.map((s)=><li key={s} className="py-2 px-2 shadow-sm hover:bg-gray-200">{s}</li>)}
            
          </ul>
        </div> 
        }
       
      </div>
      <div className="col-span-1 w-8 h-8">
        <img
          alt=""
          src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
        />
      </div>
    </div>
  );
};

export default Head;
