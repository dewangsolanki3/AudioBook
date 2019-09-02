import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Player.jsx';



const trackTitle = 'Great song by random artist';
const streamUrl = 'https://audiobookie.s3.ap-south-1.amazonaws.com/Rich+Dad+Poor+Dad+by+Robert+Kiyosaki++Full+Audiobook.mp3';

function App() {
  return (
    < >
    <div className="story1">
    <div className="box">
      <div className="sm-box">
    <Player
      trackTitle={trackTitle}
      src={streamUrl}
    />
    </div>
    </div>
    </div>

    </>
  );
}

export default App;
