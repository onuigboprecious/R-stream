// import React, { useState } from 'react';
// import Wavesurfer from 'wavesurfer';
// import ReactWavesurfer from 'react-wavesurfer';

// const Wavesurfer = () => {
//   const [playing, setPlaying] = useState(false);
//   const [seek, setSeek] = useState(0);

//   const waveform = new Wavesurfer({
//     container: '#waveform',
//     waveColor: 'red',
//     progressColor: 'green',
//   });

//   const handlePlay = () => {
//     if (!playing) {
//       waveform.play();
//       setPlaying(true);
//     }
//   };

//   const handlePause = () => {
//     if (playing) {
//       waveform.pause();
//       setPlaying(false);
//     }
//   };

//   const handleSeek = (value) => {
//     waveform.seekTo(value);
//     setSeek(value);
//   };

//   return (
//     <div>
//       <Wavesurfer
//         ref={waveform}
//         audioUrl={'https://www.example.com/audio.mp3'}
//       />
//       <button onClick={handlePlay}>Play</button>
//       <button onClick={handlePause}>Pause</button>
//       <input type="range" value={seek} onChange={handleSeek} />
//     </div>
//   );
// };

// export default Wavesufer;
