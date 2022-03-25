import loginCSS from "@/assets/css/login.module.css";
import IconicosImg from "@/assets/images/MF_Logo_Red_Grey.png";
import I18n from "@/components/I18n/I18n";
import Translator from "@/components/I18n/Translator";
import GameContext from "@/contexts/gameContext";
import API from "@/services/api";
import Image from "next/image";
import Router from "next/router";
import { setCookie } from "nookies";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
//
export default function LoginForm({ functions }) {
  const { register, handleSubmit } = useForm();
  const { setLoad } = useContext(GameContext);

  const handleLogin = async (data) => {
    if (data.email.length > 0 && data.password.length > 0) {
      setLoad(true);
      try {
        const { data: response } = await API.post("auth/player", {
          email: data.email,
          password: data.password,
        });
        localStorage.setItem("init", "true");
        API.defaults.headers["Authorization"] = `Bearer ${response.token}`;
        await functions.verifyPremier();
        setCookie(null, "cmf-00", JSON.stringify(response.player), {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        setCookie(null, "cmf-01", response.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        Router.replace("/game");
      } catch (error) {
        setLoad(false);
        functions.handleAudioEffectError();
        console.error(error);
        toast.error("Falha ao processar seu login!");
      }
    }
  };

  return (
    <div className={[loginCSS.form, loginCSS.sign_in]} id="Logomobo">
      <div className={loginCSS.sign_G}>
        <div className={loginCSS.login_h2}>
          <Image
            className={loginCSS.iconicos}
            src={IconicosImg}
            alt="logo"
            style={{ width: 50 }}
          />
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <label className={loginCSS.login_label}>
            <div className={loginCSS.login_separation}>
              <input
                type="email"
                defaultValue=""
                autoComplete="off"
                {...register("email", { required: true })}
                className={loginCSS.login_input}
                placeholder="E-mail"
              />
            </div>
          </label>
          <label className={loginCSS.login_label}>
            <div className={loginCSS.login_separation}>
              <input
                type="password"
                defaultValue=""
                placeholder="senha"
                className={loginCSS.login_input}
                {...register("password", { required: true })}
              />
            </div>
          </label>
          <button className={[loginCSS.login_button]} type="submit">
            <Translator path="login.button" />
          </button>
        </form>
        <div className={loginCSS.LoginButn}>
          <div className={loginCSS.Cadt2}>
            <button
              id="mobilecadastro"
              className={loginCSS.BtL}
              onClick={() => {
                functions.setIsRegister(true);
              }}
            >
              <Translator path="login.register" />
            </button>
          </div>
          <div className={loginCSS.Cadt2}>
            <I18n />
          </div>
          <div className={loginCSS.Cadt2}>
            <button
              className={loginCSS.BtL}
              onClick={() => {
                functions.setModalRecovery(true);
              }}
            >
              <Translator path="login.recovery" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
