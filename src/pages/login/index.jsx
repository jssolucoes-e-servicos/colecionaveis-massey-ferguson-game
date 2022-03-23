import loginCSS from "@/assets/css/login.module.css";
import LoginForm from "@/components/LoginForm";
import Loading from "@/components/pageLoading";
import Recovery from "@/components/Recovery";
import RegisterForm from "@/components/RegisterForm";
import GameContext from "@/contexts/gameContext";
import API from '@/services/api';
import { parseCookies } from "nookies";
import React, { useContext, useState } from "react";

export default function Login({userData}) {
  const [modalRecovery, setModalRecovery] = useState(false); //modal recovery
  const [isRegister, setIsRegister] = useState(false);
  const { load } = useContext(GameContext);

  function handleAudioEffectError() {
    let effectError = document.querySelector("#effectError");
    effectError.volume = 0.1;
    effectError.play();
  }

  async function verifyPremier() {
    try {
      const premier = await API.get("figures/premier/verify");
      if (premier.data.premier === "opened") {
        localStorage.setItem("mdlPmr", null);
      } else {
        localStorage.setItem("mdlPmr", premier.data.values);
      }
    } catch (error) {
      console.error(error);
      localStorage.setItem("mdlPmr", null);
    }
  }

  const functions = {
    handleAudioEffectError: handleAudioEffectError,
    verifyPremier: verifyPremier,
    setIsRegister: setIsRegister,
    setModalRecovery: setModalRecovery,
  };

  return (
    <React.Fragment>
      <audio
        id="effectError"
        src="https://3sdigital.com.br/videovaltra/audiogame/effectError.mp3"
      />
      {load === true ? <Loading /> : <React.Fragment />}
      {modalRecovery === true ? (
        <Recovery
          onClose={() => {
            setModalRecovery(false);
            setModalRecovery(null);
          }}
        ></Recovery>
      ) : (
        <React.Fragment />
      )}
      <div className={loginCSS.login_wrap}>
        <div className={loginCSS.cont}>
          {isRegister === true ? (
            <RegisterForm functions={functions} />
          ) : (
            <LoginForm functions={functions} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export const getServerSideProps = async (ctx) => {
  const { "cmf-00": profile } = parseCookies(ctx);
  if (profile) {
    return {
      redirect: {
        destination: "/game",
        permanet: false,
      },
    };
  }

  return {
    props: { userData : null },
  };
};
