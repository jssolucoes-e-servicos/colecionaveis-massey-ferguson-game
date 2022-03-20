import authContext from "@/contexts/authContext";
import React, { useContext, useEffect } from "react";

export default function EffectClickAudio() {
  const { click, setClick } = useContext(authContext);

  useEffect(() => {
    function load() {
      handleAudioEffectClick();
    }
    load();
  }, [click]);

  function handleAudioEffectClick() {
    const effectClick = document.querySelector("#effectClick");
    if (click === true) {
      effectClick.play();
      effectClick.volume = 0.04;
      setClick(false);
    } else {
      effectClick.pause();
      effectClick.volume = 0.01;
    }
  }

  return (
    <React.Fragment>
      <audio
        id="effectClick"
        autoPlay
        loop
        src="https://3sdigital.com.br/videovaltra/audiogame/entrarlogin.mp3"
      />
    </React.Fragment>
  );
}
