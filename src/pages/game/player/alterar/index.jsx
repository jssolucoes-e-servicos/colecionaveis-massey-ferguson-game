import LayoutCSS from "@/assets/css/login.module.css";
import GameContext from "@/contexts/gameContext";
import Template from "@/layouts/GameLayout";
import api from "@/services/api";
import { getAPIClient } from "@/services/axios";
import moment from "moment";
import Router from "next/router";
import { parseCookies } from "nookies";
import React, { useContext, useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
export default function PlayerEdit({ userData }) {

  const { setLoad } = useContext(GameContext);
  const [fields, setFields] = useState(userData);

  useEffect(() => {
    async function adjustData() {
      setFields({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        birth: userData.birth,
        country: userData.country,
        provincy: userData.provincy,
        city: userData.city,
        address: userData.address,
      });
      setLoad(false);
    }
    adjustData();
    console.log(fields);
  }, []);

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFields((values) => ({
      ...fields,
      [key]: value,
    }));
  }

  const handleSave = async () => {
    if (validate()) {
      try {
        setLoad(true);
        const { data } = await api.post("players/update", {
          name: fields?.name.length > 0 ? fields.name : "",
          phone: fields?.phone.length > 0 ? fields.phone : "",
          birth: moment(fields.birth).format("yyyy/MM/DD"),
          country: fields.country?.length > 0 ? fields.country : "",
          provincy: fields.provincy?.length > 0 ? fields.provincy : "",
          city: fields.city?.length > 0 ? fields.city : "",
          address: fields.address?.length > 0 ? fields.address : "",
          language: localStorage.getItem("i18nextLng"),
        });
        Router.push("/game/player");
        setLoad(false);
        toast.success(data.message);

      } catch (error) {
        console.log(error);
        toast.error("Falha ao cadastrar!");
      }
    } else {
      toast.error("Todos os campos são de preenchimento obrigatório!");
    }
  };

  const validate = () => {
    if (
      fields.name?.length > 0 &&
      fields.phone?.length > 0 &&
      fields.country?.length > 0 &&
      fields.provincy?.length > 0 &&
      fields.city?.length > 0 &&
      fields.address?.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Template userData={userData}>
      <div className="LauncHerCentral">
        <section className="Player-A">
          <div className="Player-B">
            <div className="Player-jog">
              <div className="Player-full">
                <div className="LogoPlayer">
                  <img className="Player-user" src={"/storage/images/brand/MF_LogoWhite.png"} alt="Users" />
                </div>
                <div className="formUser" id="formcadsUser">
                  <div
                    className="edit-User"
                    id="CadsEdit-User "
                    style={{ maxWidth: "600px" }}
                  >
                    <label className={LayoutCSS.login_label}>
                      <span
                        className={LayoutCSS.login_span}
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "end",
                          fontSize: 15,
                          fontWeight: "900",
                        }}
                      >
                        <a
                          href="/"
                          style={{
                            color: "#333",
                            textDecoration: "none",
                            listStyle: "none",
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "end",
                            fontSize: 15,
                            fontWeight: "900",
                          }}
                        >
                          X
                        </a>
                      </span>
                    </label>
                    <label className={LayoutCSS.login_label}>
                      <span
                        style={{
                          fontSize: "1.5em",
                          color: "#333",
                        }}
                      >
                        Editar Dados
                      </span>
                    </label>
                    <label className={LayoutCSS.login_label}>
                      <input
                        type="text"
                        name="name"
                        placeholder="nome completo"
                        className={LayoutCSS.login_input}
                        onChange={handleChange}
                        value={fields.name}
                      />
                    </label>
                    <label className={LayoutCSS.login_label}>
                      <InputMask
                        mask="(99)99999-9999"
                        placeholder="celular"
                        type="tel"
                        name="phone"
                        className={LayoutCSS.login_input}
                        onChange={handleChange}
                        value={fields.phone}
                      />
                    </label>

                    <label className={LayoutCSS.login_label}>
                      <input
                        placeholder="endereço"
                        type="text"
                        name="address"
                        className={LayoutCSS.login_input}
                        onChange={handleChange}
                        value={fields.address}
                      />
                    </label>

                    <div className={LayoutCSS.login_separation_cad}>
                      <div className="projects">
                        <label className={LayoutCSS.login_duple}>
                          <input
                            placeholder="cidade"
                            type="text"
                            name="city"
                            className={LayoutCSS.login_input}
                            onChange={handleChange}
                            value={fields.city}
                          />
                        </label>
                      </div>
                      <div className="projects">
                        <label className={LayoutCSS.login_duple}>
                          <input
                            placeholder="estado"
                            type="text"
                            name="provincy"
                            className={LayoutCSS.login_input}
                            onChange={handleChange}
                            value={fields.provincy}
                          />
                        </label>
                      </div>
                    </div>
                    <div className={LayoutCSS.login_separation_cad}>
                      <div className="projects">
                        <label className={LayoutCSS.login_duple}>
                          <input
                            placeholder="pais"
                            type="text"
                            name="country"
                            className={LayoutCSS.login_input}
                            onChange={handleChange}
                            value={fields.country}
                          />
                        </label>
                      </div>
                      <div className="projects">
                        <label className={LayoutCSS.login_duple}>
                          <InputMask
                            name="birth"
                            className={LayoutCSS.login_input}
                            type="date"
                            placeholder="data nascimento"
                            onChange={handleChange}
                            value={fields.birth}
                          />
                        </label>
                      </div>
                    </div>
                    <label className={LayoutCSS.login_label}>
                      <input
                        type="email"
                        name="email"
                        className={LayoutCSS.login_input}
                        readOnly="true"
                        value={fields.email}
                      />
                    </label>
                    <div
                      className={LayoutCSS.login_separation_cad}
                      style={{ marginBottom: "50px" }}
                    >
                      <button
                        style={{
                          width: "260px",
                          maxWidth: "260px",
                          marginBottom: 10,
                          color: "#fff",
                          marginTop: 20,
                          background: "#000",
                          borderStyle: "none",
                        }}
                        type="button"
                        onClick={handleSave}
                        className={"effectClick"}
                        id="btnsubcad"
                      >
                        Salvar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Template>
  );
}

export const getServerSideProps = async (ctx) => {
  const { "cmf-00": profile } = parseCookies(ctx);
  if (!profile) {
    return {
      redirect: {
        destination: "/login",
        permanet: false,
      },
    };
  } else {
    try {
      const apiClient = getAPIClient(ctx);
      const { data } = await apiClient.get('players/me');
      return {
        props: { userData: data },
      };
    } catch (error) {
      return {
        redirect: {
          destination: "/login",
          permanet: false,
        },
      }

    }
  }
};