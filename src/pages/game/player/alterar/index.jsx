import Logoempresa from "@/assets/images/MF_LogoWhite.png";
import AuthContext from "@/contexts/authContext";
import Template from "@/layouts/GameLayout";
import api from "@/services/api";
import moment from "moment";
import Router from "next/router";
import { parseCookies } from "nookies";
import React, { useContext, useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";

export default function PlayerEdit({userData}) {

  const { setLoad } = useContext(AuthContext);
  const [fields, setFields] = useState(userData);

  useEffect(() => {
    async function adjustData() {
      setFields((values) => ({
        ...fields,
        birth: moment(userData.birth).format("DD/MM/yyyy"),
      }));
    }
    adjustData();
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
          name: fields.name,
          phone: fields.phone,
          birth: moment(fields.birth).format("yyyy/MM/DD"),
          country: fields.country,
          provincy: fields.provincy,
          city: fields.city,
          address: fields.address,
          language: localStorage.getItem("i18nextLng"),
        });
        setLoad(false);
        toast.success(data.message);
        Router.push("/game/player");
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
      fields.name.length > 0 &&
      fields.phone.length > 0 &&
      fields.country.length > 0 &&
      fields.provincy.length > 0 &&
      fields.city.length > 0 &&
      fields.address.length > 0
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
                  <img className="Player-user" src={Logoempresa} alt="Users" />
                </div>
                <div className="formUser" id="formcadsUser">
                  <div
                    className="edit-User"
                    id="CadsEdit-User "
                    style={{ maxWidth: "600px" }}
                  >
                    <label className="login_label">
                      <span
                        className="login_span"
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
                    <label className="login_label">
                      <span
                        style={{
                          fontSize: "1.5em",
                          color: "#333",
                        }}
                      >
                        Editar Dados
                      </span>
                    </label>
                    <label className="login_label">
                      {/* <span className="login_span">Seu nome</span> */}
                      <input
                        type="text"
                        name="name"
                        placeholder="nome completo"
                        className="login_input"
                        onChange={handleChange}
                        value={fields.name}
                      />
                    </label>
                    <label className="login_label">
                      {/* <span className="login_span">Telefone</span> */}
                      <InputMask
                        mask="(99)99999-9999"
                        placeholder="celular"
                        type="tel"
                        name="phone"
                        className="login_input"
                        onChange={handleChange}
                        value={fields.phone}
                      />
                    </label>

                    <label className="login_label">
                      {/* <span className="login_span">Data de Nascimento</span> */}
                      <input
                        placeholder="endereço"
                        type="text"
                        name="address"
                        className="login_input"
                        onChange={handleChange}
                        value={fields.address}
                      />
                    </label>

                    <div className="login_separation_cad">
                      <div className="projects">
                        <label className="login_duple">
                          {/* <span className="login_span">Estado</span> */}
                          <input
                            placeholder="cidade"
                            type="text"
                            name="city"
                            className="login_input"
                            onChange={handleChange}
                            value={fields.city}
                          />
                        </label>
                      </div>
                      <div className="projects">
                        <label className="login_duple">
                          {/* <span className="login_span">Pais</span> */}
                          <input
                            placeholder="estado"
                            type="text"
                            name="provincy"
                            className="login_input"
                            onChange={handleChange}
                            value={fields.provincy}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="login_separation_cad">
                      <div className="projects">
                        <label className="login_duple">
                          {/* <span className="login_span">Pais</span> */}
                          <input
                            placeholder="pais"
                            type="text"
                            name="country"
                            className="login_input"
                            onChange={handleChange}
                            value={fields.country}
                          />
                        </label>
                      </div>
                      <div className="projects">
                        <label className="login_duple">
                          {/* <DatePicker
                            name="birth"
                            className="login_input"
                            selected={Date(
                              moment(UserData.birth).format("DD/MM/yyyy")
                            )}
                            onChange={handleChange}
                          /> */}
                          <InputMask
                            name="birth"
                            className="login_input"
                            type="date"
                            placeholder="data nascimento"
                            onChange={handleChange}
                            value={fields.birth}
                          />
                        </label>
                      </div>
                    </div>
                    <label className="login_label">
                      <input
                        type="email"
                        name="email"
                        className="login_input"
                        readOnly="true"
                        value={fields.email}
                      />
                    </label>
                    <div
                      className="login_separation_cad"
                      style={{ marginBottom: "50px" }}
                    >
                      <button
                        style={{ marginBottom: 10, marginTop: 20 }}
                        type="button"
                        onClick={handleSave}
                        className="submit effectClick login_button"
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
  }

  return {
    props: { userData: profile },
  };
};
