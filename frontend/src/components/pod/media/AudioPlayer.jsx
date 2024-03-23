import { useState, useRef } from 'react';
import { Tracks } from '../media/Track.js';
import DisplayTrack  from '../media/DisplayTrack.jsx';
import Controls from '../media/Controls.jsx';
import ProgressBar from '../media/ProgressBar.jsx';
import React from 'react';
import '.././media/Media.css';

function AudioPlayer() {
  // eslint-disable-next-line
  const [TrackIndex, setTrackIndex] = useState(0);
  // eslint-disable-next-line
  const [currentTrack, setCurrentTrack] = useState(Tracks[TrackIndex]);
  const progressBarRef = useRef();
  const audioRef = useRef();
  const handleNext =useState();
  // eslint-disable-next-line
  const [timeProgress, setTimeProgress] = useState(0);
  // eslint-disable-next-line
  const [duration, setDuration] = useState(0);
  return (
    <div>
      <div className="audio-player">
        <div className="inner">
          <DisplayTrack
            {...{
              currentTrack,
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
            }}
          />
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              handleNext,
            }}
          />
          <ProgressBar
            {...{ progressBarRef, audioRef, timeProgress, duration }}
          />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
