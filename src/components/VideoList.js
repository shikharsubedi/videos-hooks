import React from 'react'
import VideoItem from './VideoItem'

function VideoList ({ videos, onVideoSelect }) {
  const renderedList = videos.map(video => (<VideoItem video={video} key={video.id.videoId} onVideoSelect={onVideoSelect} />))
  return (
    <div className='ui relaxed divided list'>{renderedList}</div>
  )
}

export default VideoList