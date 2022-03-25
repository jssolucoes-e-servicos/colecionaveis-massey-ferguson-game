import AppLoading from "@/components/AppLoading";
import I18n from "@/components/I18n/I18n";
import Translator from "@/components/I18n/Translator";
import MenuMobile from "@/components/MenuMobile";
import Loading from "@/components/pageLoading";
import RulesView from "@/components/RulesView";
import GameContext from "@/contexts/gameContext";
import API from '@/services/api';
import Link from 'next/link';
import Router from "next/router";
import { destroyCookie } from 'nookies';
import React, { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const imagePlay = "https://3sdigital.com.br/videovaltra/imagens/mute1.png";
const imagePause = "https://3sdigital.com.br/videovaltra/imagens/btnplay.png";

export default function Template({ children, userData }) {
  const {
    load,
    setLoad,
    setIsMobile,
  } = useContext(GameContext);

  const [isLoadingApp, setIsLoadingApp] = useState(false);
  const [acceptedRule, setAcceptedRule] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);
  
  useEffect(() => {
    async function setConfigs() {
      //verifield is the Rules Play is accepted
      if (localStorage.getItem("init") === "true") {
        (userData.rules_accept === true) ? (setAcceptedRule("true")) : (setAcceptedRule("false"));
        (userData.rules_accept === true) ? localStorage.setItem("cmf-ar", "true") : localStorage.setItem("cmf-ar", "false");
      } else {
        const acepted = localStorage.getItem("cmf-ar");
        setAcceptedRule(acepted);
      }
      //Verify watch status of play audio
      (localStorage.getItem("cmf-ap") === "true") ? setPlayAudio(true) : setPlayAudio(false);
      //Verify and active in EventListnner a monitor of sizing window
      setLoad(false);
      var windowWidth = window.innerWidth;
      if (windowWidth <= 1200) {
        sessionStorage.setItem("isMobile", "true");
        setIsMobile(true);
      } else {
        sessionStorage.setItem("isMobile", "false");
        setIsMobile(false);
      }
       window.addEventListener("resize", function () {
        sizeOfThings();
       }); 
      //call this top function
      StartingAppLoad();
    }
    setConfigs();
  }, []);

  //OK
  function StartingAppLoad() {
    if (localStorage.getItem("init") === "true") {
      setIsLoadingApp(true);
      setTimeout(() => {
        localStorage.setItem("init", "false");
        setIsLoadingApp(false);
      }, 10000);
    }
  }

  //OK
  const handleAcceptRule = async () => {
    const accept = await API.get("players/rules");
    if (accept) {
      localStorage.setItem("cmf-ar", "true");
      setAcceptedRule("true");
    } else {
      localStorage.getItem("cmf-ar", "false");
      setAcceptedRule("false");
    }
  }

  async function sizeOfThings() {
    var windowWidth = window.innerWidth;
    if (windowWidth <= 1200) {
      await sessionStorage.setItem("isMobile", "true");
    } else {
      await sessionStorage.setItem("isMobile", "false");
    }
  }

  async function clickPause() {
    if (playAudio === true) {
      await API.get(`players/audio/false`);
      localStorage.setItem("cmf-ap", "false");
      setPlayAudio(false);
    } else {
      await API.get(`players/audio/true`);
      localStorage.setItem("cmf-ap", "true");
      setPlayAudio(true);
    }
     handleAudioBackground();
  }

  async function executeLogout() {
    setLoad(true);
    await API.post("logout");
    destroyCookie(null, 'cmf-00');
    destroyCookie(null, 'cmf-01');  
    Router.push("/login");
    setLoad(false);
  }

  const MobileA = () => {
    let btn = document.querySelector("#Mobos");
    btn.classList.add("active");
    btn.style.display = "flex";
  };

  function Segmobile() {
    let btn = document.querySelector("#Mobos");
    if (btn.classList.contains("active")) {
      btn.style.display = "none";
      btn.classList.remove("active");
    } else {
      btn.classList.add("active");
      btn.style.display = "flex";
    }
  }

function handleAudioBackground() {
    const audioBackground = document.querySelector("#audioBackground");
  if (playAudio === true) {
      audioBackground.volume = 0.04;
      audioBackground.play();
      
  } else {
      audioBackground.volume = 0.01;
      audioBackground.pause();
    }
  }


  return (
    <React.Fragment>
      {isLoadingApp === true ? <AppLoading /> : <React.Fragment />}
      {load === true && isLoadingApp !== true ? (
        <Loading />
      ) : (
        <React.Fragment />
      )}
       <audio
        id="audioBackground"
        loop
        autoPlay={true}
        src="https://3sdigital.com.br/videovaltra/audiogame/Kingdom-sticks.mp3"
      />
      <section className="containerlauncher">
        <div className="Launchercontainer">
          <div className="MenuMobileA" onClick={Segmobile}>
            <button className="BtnMobileA">
              <FaBars />
            </button>
          </div>
          <div className="MenuAudioMobileA" onClick={clickPause}>
            <span
              style={{
                width: "100%",
                height: "100%",
                margin: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                id="MuteP"
                className="MuteP"
                src={playAudio === true ? imagePlay : imagePause}
                alt="mute"
                style={{
                  width: "80%",
                  height: "80%",
                  background: "transparent",
                }}
              />
            </span>
          </div>
          <MenuMobile id="Mobos" />
          <div className="LauncherLeft">
            <div className="Imgempresa" style={{ marginBottom: 5 }}>
              <img src="/storage/images/brand/MF_LogoWhite.png" alt="logo" />
            </div>
            <Link href="/game/como-jogar" onClick={()=>{setLoad(true)}}>
              <button className="btnMute">
                <div className="btnf">
                  <div className="TxtLef">
                    <img
                      id="iconCar"
                      src="/storage/images/icons/videos.png"
                      style={{ marginTop: 8, width: 25, height: 15 }}
                    />
                    <span id="spanT">Como Jogar</span>
                  </div>
                </div>
              </button>
            </Link>

            <Link href="/game/player" onClick={()=>{setLoad(true)}}>  
              <button className="btnMute">
                <div className="btnf">
                  <div className="TxtLef">
                    <img id="iconCar" src="/storage/images/icons/user.png" />
                    <span id="spanT">
                      <Translator path="menu.profile" />
                    </span>
                  </div>
                </div>
              </button>
            </Link>
            <Link href="/game"  onClick={()=>{setLoad(true)}}>
              <button className="btnMute">
                <div className="btnf">
                  <div className="TxtLef">
                    <img id="iconCar" src="/storage/images/icons/album.png" />
                    <span id="spanT">
                      <Translator path="menu.album" />
                    </span>
                  </div>
                </div>
              </button>
            </Link>
            <Link href="/game/banca" onClick={()=>{setLoad(true)}}>
              <button
                className="btnMute">
                <div className="btnf">
                  <div className="TxtLef">
                    <div className="TxtLef">
                      <img id="iconCar" src="/storage/images/icons/banca.png" />
                      <span id="spanT">
                        <Translator path="menu.stands" />
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </Link>
            <Link href="/game/ranking" onClick={()=>{setLoad(true)}}>
              <button className="btnMute">
                <div className="btnf">
                  <div className="TxtLef">
                    <img id="iconCar" src="/storage/images/icons/grafic.png" />
                    <span id="spanT">
                      <Translator path="menu.ranking" />
                    </span>
                  </div>
                </div>
              </button>
            </Link>
            <Link href="/game/historico" onClick={()=>{setLoad(true)}}>  
              <button className="btnMute">
                <div className="btnf">
                  <div className="TxtLef">
                    <img id="iconCar2" src="/storage/images/icons/historico.png" />
                    <span id="spanT">
                      <Translator path="menu.historic" />
                    </span>
                  </div>
                </div>
              </button>
            </Link>
            <button className="btnPerfil" onClick={executeLogout}>
              <div className="Btnclose">
                <span className="NeionP"></span>
                <span className="NeionP"></span>
                <span className="NeionP"></span>
                <span className="NeionP"></span>
                sair
              </div>
            </button>
            <I18n />
          </div>
          {acceptedRule === "false" ? (
            <RulesView>
              <button className="btnCLose" onClick={handleAcceptRule}>
                Aceitar e Jogar
              </button>
            </RulesView>
          ) : (
            <React.Fragment> {children}</React.Fragment>
          )}
        </div>
      </section>
    </React.Fragment>
  );
}
