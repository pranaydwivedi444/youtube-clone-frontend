import React from 'react'
import VideoCard from './VideoCard';

function VideoGrid() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
    {new Array(10).fill(0).map((_,i)=>{
       return <VideoCard key={i}/>;
    })}  
    </div>
  )
}

export default VideoGrid;
