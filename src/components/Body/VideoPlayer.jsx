import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <iframe
        width="1000" // Set your desired width
        height="500" // Set your desired height
        src={`https://www.youtube.com/embed/6a1fLEToyvU`}
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
