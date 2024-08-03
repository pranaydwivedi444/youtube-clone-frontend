import React from "react";
// import "../../public/youtube_thumbnail_video_card.jpg";


function VideoCard() {
  return (
    <div className="w-full flex flex-col text-wrap p-2">
      <div className="video-thumbnail rounded-xl ">
        <img src="/youtube_thumbnail_video_card.jpg" alt="Video Thumbnail"  className="max-w-full" />
      </div>
      <div className="video-descrption flex ">
        <div className="video-author-profile p-2 ">
          <img src="channel_youtube.jpg" alt="youtube channel"  className=" rounded-full  object-cover max-w-full" />
        </div>
        <div>
            <div className="video-main-title font-bold text-lg">
                1st ODI | English Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Tempore necessitatibus omnis cupiditate.{" "}
            </div>
            <div className="video-author-name">

            </div>
            <div className="vide0-views-time-ago">
            <span className=" text-gray-600 text-base">722K Views</span> . <span className="text-base text-gray-600"> 3 Days Ago</span>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default VideoCard;
