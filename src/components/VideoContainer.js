import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import YOUTUBE_API_KEY from "../utils/constant";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideo] = useState([]);
  const videoItem = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    //console.log(json.items);
    setVideo(json.items);
  };

  useEffect(() => {
    videoItem();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} data={video} />
        </Link>
      ))}

      <div></div>
    </div>
  );
};

export default VideoContainer;
