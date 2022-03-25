import React, { useEffect } from "react";

export default function BackgroundAudio({audio_play}) {
   useEffect(() => {
     handleAudioBackground();
  }, [audio_play]);

  function handleAudioBackground() {
    const audioBackground = document.querySelector("#audioBackground");
    if (audio_play === true) {
      audioBackground.play();
      audioBackground.volume = 0.04;
    } else {
      audioBackground.pause();
      audioBackground.volume = 0.01;
    }
  }

  return (
    <React.Fragment>
      <audio
        id="audioBackground"
        /* autoPlay */
        loop
        src="https://3sdigital.com.br/videovaltra/audiogame/Kingdom-sticks.mp3"
      />
    </React.Fragment>
  );
}
