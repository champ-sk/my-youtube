import React from "react";

const VideoCard = ({ data }) => {
  //console.log(data);
  const { statistics, snippet } = data;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
       <img className="rounded" alt="" src={thumbnails.high.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul> 
    </div>
  );
};

export default VideoCard;
