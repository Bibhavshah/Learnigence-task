import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Nav from './components/Nav';
import VideoPlayer from './components/Body/VideoPlayer';
import BodyOptions from './components/Body/BodyOptions';

function App() {
  return (
    <>
      <div className="flex flex-row w-screen h-screen">
        <Sidebar />
        <div className="w-11/12">
          <Header />
          <Nav />
          <div className="flex justify-between px-10 py-5">
            <BodyOptions />
            <VideoPlayer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
