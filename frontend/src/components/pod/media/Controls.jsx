import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from 'react-bootstrap';
import '.././media/Media.css';
// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
  IoVolumeOffOutline,
  IoVolumeMediumOutline,
  IoVolumeHighOutline
} from 'react-icons/io5';

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  Tracks,
  TrackIndex,
  setTrackIndex,
  setCurrentTrack,
}) => {
  // eslint-disable-next-line
  const playAnimationRef = useRef();
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);
  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  const skipForward = () => {
    audioRef.current.currentTime += 10;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 10;
  };
  const handlePrevious = () => {
    if (TrackIndex === 0) {
      let lastTrackIndex = Tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(Tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(Tracks[TrackIndex - 1]);
    }
  };
  const handleNext = () => {
    if (TrackIndex >= Tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(Tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(Tracks[TrackIndex + 1]);
    }
  };
  // eslint-disable-next-line
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);
  // ...
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);
  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  return (
    <div className="controls-wrapper d-flex justify-content-center">
      <div className="controls">
        <Button
          className="control_btn"
          variant="transperent"
          onClick={handlePrevious}
        >
          <IoPlaySkipBackSharp />
        </Button>
        <Button
          className="control_btn"
          variant="transperent"
          onClick={skipBackward}
        >
          <IoPlayBackSharp />
        </Button>

        <Button
          className="control_btn"
          variant="transperent"
          onClick={togglePlayPause}
        >
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </Button>
        <Button
          className="control_btn"
          variant="transperent"
          onClick={skipForward}
        >
          <IoPlayForwardSharp />
        </Button>
        <Button
          className="control_btn"
          variant="transperent"
          onClick={handleNext}
        >
          <IoPlaySkipForwardSharp />
        </Button>
      </div>
      <div className="volume">
        <Button
          className="control_btn"
          variant="transperent"
          onClick={() => setMuteVolume((prev) => !prev)}
        >
          {muteVolume || volume < 5 ? (
            <IoVolumeOffOutline />
          ) : volume < 40 ? (
            <IoVolumeMediumOutline />
          ) : (
            <IoVolumeHighOutline />
          )}
        </Button>
        <input
          className="control"
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        
        />
      </div>
    </div>
  );
};

export default Controls;
