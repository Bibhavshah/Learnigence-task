import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <iframe
        width="1000" // Set your desired width
        height="500" // Set your desired height
        src={`https://www.youtube.com/embed/wN6OFpy93TE`}
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
