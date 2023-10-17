import {React, useState} from 'react';
import { Image, Row } from 'react-bootstrap';
import { BsMusicNoteBeamed } from 'react-icons/bs';
// import '../../pod/Pod.css';
import '.././media/Media.css';

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };
  const handleNext = useState();
  return (
    <Row className="mx-1 my-1 ">
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="audio-infos ">
        <div className="audio-image">
          {currentTrack.thumbnail ? (
            <Image
              src={currentTrack.thumbnail}
              className="pod_slide_image "
              alt="audio avatar"
            />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon pod_slide_image ">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div className="track_data">
          <p className="title">{currentTrack.title}</p>
          <p>{currentTrack.author}</p>
        </div>
      </div>
    </Row>
  );
};
export default DisplayTrack;
