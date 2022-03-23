import loginCSS from "@/assets/css/login.module.css";
import I18n from "@/components/I18n/I18n";
import Translator from "@/components/I18n/Translator";
import GameContext from "@/contexts/gameContext";
import API from "@/services/api";
import Image from "next/image";
import Router from "next/router";
import { setCookie } from 'nookies';
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";


export default function RegisterForm({ functions }) {
  const { register, handleSubmit } = useForm();
  const { setLoad } = useContext(GameContext);

const handleRegister = async (data) => {
  if (validate(data)) {
    if (data.password === data.verify) {
      setLoad(true);
      try {
        const { data: response } = await API.post("players/register", {
          name: data.name,
          email: data.email,
          phone: data.phone,
          birth: data.birth,
          country: data.country,
          province: data.province,
          city: data.city,
          password: data.password,
          language: data.language,
        });
        API.defaults.headers['Authorization'] = `Bearer ${response.token}`;
        await functions.verifyPremier();
        localStorage.setItem("init", "true");
        setCookie(null, 'cmf-00', JSON.stringify(response.player), {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
        setCookie(null, 'cmf-01', response.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
        Router.push("/game");
        setLoad(false);
      } catch (error) {
        console.error(error);
        
      }
    } else {
      functions.handleAudioEffectError();
      toast.error("A senha não confere com a verificação!");
    }
  } else {
    functions.handleAudioEffectError();
    toast.error("Todos os campos são de preenchimento obrigatório!");
  }
}

 function validate(data) {
    if (
      data.name.length > 0 &&
      data.email.length > 0 &&
      data.phone.length > 0 &&
      data.birth.length > 0 &&
      data.country.length > 0 &&
      data.provincy.length > 0 &&
      data.city.length > 0 &&
      data.password.length > 0 &&
      data.address.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }


  return (
    <React.Fragment>
      <div className={loginCSS.form_cadMobo}>
        <div className={loginCSS.sign_G}>
          <div className={loginCSS.login_h2}>
            <Image className={loginCSS.Logi_img_emnpresa} src="/storage/images/brands/MF_Logo_Red_Gray" alt="logo" />
          </div>
          <div className={loginCSS.login_h2}>
            <h2 className={loginCSS.login_txt}>
              <Translator path="register.title" />
            </h2>
          </div>
          <form onSubmit={handleSubmit(handleRegister)}>
            <label className={loginCSS.login_label}>
              <input
                type="text"
                name="name"
                placeholder="nome completo"
                className={loginCSS.login_input}
                {...register("name", { required: true })}
              />
            </label>
            <label className={loginCSS.login_label}>
              <InputMask
                mask="(99)99999-9999"
                placeholder="celular"
                type="tel"
                name="phone"
                className={loginCSS.login_input}
                {...register("phone", { required: true })}
              />
            </label>

            <label className={loginCSS.login_label}>
              <input
                placeholder="endereço"
                type="text"
                name="address"
                className={loginCSS.login_input}
                {...register("address", { required: true })}
              />
            </label>

            <div className={loginCSS.login_separation_cad}>
              <div className={loginCSS.projects}>
                <label className={loginCSS.login_duple}>
                  <input
                    placeholder="cidade"
                    type="text"
                    name="city"
                    className={loginCSS.login_input}
                    {...register("city", { required: true })}
                  />
                </label>
              </div>
              <div className={loginCSS.projects}>
                <label className={loginCSS.login_duple}>
                  <input
                    placeholder="uf"
                    type="text"
                    name="provincy"
                    className={loginCSS.login_input}
                    {...register("provincy", { required: true })}
                  />
                </label>
              </div>
            </div>
            <div className={loginCSS.login_separation_cad}>
              <div className={loginCSS.projects}>
                <label className={loginCSS.login_duple}>
                  <input
                    placeholder="pais"
                    type="text"
                    name="country"
                    className={loginCSS.login_input}
                    {...register("country", { required: true })}
                  />
                </label>
              </div>
              <div className={loginCSS.projects}>
                <label className={loginCSS.login_duple}>
                  <InputMask
                    mask="99/99/9999"
                    name="birth"
                    className={loginCSS.login_input}
                    type="text"
                    placeholder="data nascimento"
                    {...register("birth", { required: true })}
                  />
                </label>
              </div>
            </div>
            <label className={loginCSS.login_label}>
              <input
                placeholder="e-mail"
                type="email"
                name="email"
                className={loginCSS.login_input}
                {...register("email", { required: true })}
              />
            </label>

            <label className={loginCSS.login_label}>
              <input
                type="password"
                name="password"
                placeholder="senha"
                className={loginCSS.login_input}
                {...register("password", { required: true })}
              />
            </label>
            <label className={loginCSS.login_label}>
              <input
                type="password"
                name="verify"
                placeholder="confirmar senha"
                className={loginCSS.login_input}
                {...register("verify", { required: true })}
              />
            </label>
            <div className={loginCSS.login_separation_cad}>
              <button
                type="submit"
                onClick={functions.handleRegister}
                className={[loginCSS.submit, loginCSS.effectClick, loginCSS.login_button]}
              >
                <Translator path="register.button" />
              </button>
            </div>
            <div
              className={loginCSS.Result_C}
              style={{
                width: "100%",
                maxWidth: "100%",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <input
                style={{ marginLeft: 25 }}
                type="radio"
                className={loginCSS.RadioR}
                name="type"
                value="3"
              
              />
              <label className={loginCSS.LBr} htmlFor="html">
                Declaração de Consentimento
              </label>
            </div>
          </form>      
          <div className={loginCSS.login_separation_cad}>
            <span className={loginCSS.SpanTerms}>
              Declaração de Consentimento A declaração de consentimento a seguir
              é voluntária e pode ser revogada a qualquer momento. Autorizo que
              os meus dados sejam transferidos para a AGCO do Brasil Soluções
              Agrícolas Ltda., sua controladora e suas subsidiárias
              (conjuntamente, &quot;AGCO&ldquo;) para efeitos de marketing, estudo de
              mercado e publicidade e que sejam recolhidos, processados e
              utilizados para esses efeitos.
              <a
                href="https://www.agcocorp.com/Privacy-What-PT-BR.html"
                rel="noopener"
              >
                O que isso significa?
              </a>
            </span>
          </div>

          <div className={loginCSS.LoginButn}>
            <div className={loginCSS.Cadt2}>
              <I18n />
            </div>
            <div className={loginCSS.Cadt2}>
              <button
                id="mobilecadastro"
                className={loginCSS.BtL}
                onClick={() => {
                  functions.setIsRegister(false);
                }}
              >
                <Translator path="register.login" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
