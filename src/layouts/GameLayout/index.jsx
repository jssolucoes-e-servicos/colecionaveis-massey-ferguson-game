import AlbumM from "@/assets/images/icons/album.png";
import BancaM from "@/assets/images/icons/banca.png";
import HankM from "@/assets/images/icons/grafic.png";
import HistoryM from "@/assets/images/icons/historico.png";
import PerfilM from "@/assets/images/icons/user.png";
import Logoempresa from "@/assets/images/MF_LogoWhite.png";
import videos from "@/assets/images/perfil3.png";
import AppLoading from "@/components/AppLoading";
import I18n from "@/components/I18n/I18n";
import Translator from "@/components/I18n/Translator";
import MenuMobile from "@/components/MenuMobile";
import Loading from "@/components/pageLoading";
import RulesView from "@/components/RulesView";
import AuthContext from "@/contexts/authContext";
import API from '@/services/api';
import Router from "next/router";
import { destroyCookie } from 'nookies';
import React, { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
const imagePlay = "https://3sdigital.com.br/videovaltra/imagens/mute1.png";
const imagePause = "https://3sdigital.com.br/videovaltra/imagens/btnplay.png";

export default function Template({ children, userData }) {
  const {
    PlayAudio,
    AcceptRule,
    load,
    setLoad,
    setIsMobile,
  } = useContext(AuthContext);

  const [isLoadingApp, setIsLoadingApp] = useState(false);

  useEffect(() => {
    async function setConfigs() {
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
      StartingAppLoad();
    }
    setConfigs();
  }, []);

  function StartingAppLoad() {
    if (localStorage.getItem("init") === "true") {
      setIsLoadingApp(true);
      setTimeout(() => {
        localStorage.setItem("init", "false");
        setIsLoadingApp(false);
      }, 10000);
    }
  }

  function overrideLoadApp() {
    setIsLoadingApp(true);
    setTimeout(async () => {
      setIsLoadingApp(false);
    }, 10000);
  }

  async function sizeOfThings() {
    var windowWidth = window.innerWidth;
    if (windowWidth <= 1200) {
      await sessionStorage.setItem("isMobile", "true");
    } else {
      await sessionStorage.setItem("isMobile", "false");
    }
  //  await localStorage.setItem("reload", "true");
    // await localStorage.setItem("init", "true");
    // history.go(0);
  }

  async function clickPause() {
    await API.get(`players/audio/${!PlayAudio}`);
    
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
  return (
    <React.Fragment>
      {isLoadingApp === true ? <AppLoading /> : <React.Fragment />}
      {load === true && isLoadingApp !== true ? (
        <Loading />
      ) : (
        <React.Fragment />
      )}
      <section className="containerlauncher">
        <div className="Launchercontainer">
          <div className="MenuMobileA" onClick={Segmobile}>
            <button className="BtnMobileA">
              <FaBars />
            </button>
          </div>
          <div className="MenuAudioMobileA" onClick={clickPause}>
            {/* <button className="BtnMobileA">
              <FaBars />
            </button> */}
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
                src={PlayAudio === true ? imagePlay : imagePause}
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
              <img src={Logoempresa} alt="logo" />
            </div>
            <button
              className="btnMute"
              onClick={() => Router.push("/game/como-jogar")}
            >
              <div className="btnf">
                <div className="TxtLef">
                  <img
                    id="iconCar"
                    src={videos}
                    style={{ marginTop: 8, width: 25, height: 15 }}
                  />
                  <span id="spanT">Como Jogar</span>
                </div>
              </div>
            </button>

            <button
              className="btnMute"
              onClick={() => Router.push("/game/player")}
            >
              <div className="btnf">
                <div className="TxtLef">
                  <img id="iconCar" src={PerfilM} />
                  <span id="spanT">
                    <Translator path="menu.profile" />
                  </span>
                </div>
              </div>
            </button>
            <button className="btnMute" onClick={() => Router.push("/game")}>
              <div className="btnf">
                <div className="TxtLef">
                  <img id="iconCar" src={AlbumM} />
                  <span id="spanT">
                    <Translator path="menu.album" />
                  </span>
                </div>
              </div>
            </button>
            <button
              className="btnMute"
              onClick={() => Router.push("/game/banca")}
            >
              <div className="btnf">
                <div className="TxtLef">
                  <div className="TxtLef">
                    <img id="iconCar" src={BancaM} />
                    <span id="spanT">
                      <Translator path="menu.stands" />
                    </span>
                  </div>
                </div>
                {/* <span className="TxtLef">Banca</span> */}
              </div>
            </button>
            <button
              className="btnMute"
              onClick={() => Router.push("/game/ranking")}
            >
              <div className="btnf">
                <div className="TxtLef">
                  <img id="iconCar" src={HankM} />
                  <span id="spanT">
                    <Translator path="menu.ranking" />
                  </span>
                </div>
              </div>
            </button>
            <button
              className="btnMute"
              onClick={() => Router.push("/game/historico")}
            >
              <div className="btnf">
                <div className="TxtLef">
                  <img id="iconCar2" src={HistoryM} />
                  <span id="spanT">
                    <Translator path="menu.historic" />
                  </span>
                </div>
              </div>
            </button>

            {/* <button className="btnMute" onClick={clickPause}>
              <div className="btnf">
                <span className="TxtLef">
                  <img
                    id="MuteP"
                    className="MuteP"
                    src={UserData.audio_play === true ? imagePlay : imagePause}
                    alt="mute"
                  />
                </span>
              </div>
            </button> */}
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
          {userData.rules_accept === false ? (
            <RulesView>
              <button className="btnCLose" onClick={AcceptRule}>
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
