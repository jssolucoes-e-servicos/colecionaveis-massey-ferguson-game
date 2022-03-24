import Mcons from "@/assets/images/icons/mcons.png";
import Logoempresa from "@/assets/images/MF_LogoWhite.png";
import perfil1 from "@/assets/images/perfil1.png";
import perfil2 from "@/assets/images/perfil2.png";
import ModelBanks from "@/components/Influence";
import GameContext from "@/contexts/gameContext";
import Template from "@/layouts/GameLayout";
import api from "@/services/api";
import { getAPIClient } from "@/services/axios";
import Image from "next/image";
import Router from "next/router";
import { parseCookies } from "nookies";
import React, { useContext, useEffect, useState } from "react";

export default function Player({userData}) {
  const { setLoad } = useContext(GameContext);

 
  const [modalinfluence, setmodalInfluence] = useState(false); //modal pagamento troca bank

  function ModalInfluences() {
    setmodalInfluence(true);
  }
  
  useEffect(() => {
    getData();
    setLoad(false);
  }, []);

  const [signed, setSigned] = useState();

  async function getData() {
    try {
      const { data } = await api.get("players/me");
      setSigned(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Template userData={userData}>
      {modalinfluence === true ? (
        <ModelBanks
          onClose={() => {
            setmodalInfluence(false);
            setmodalInfluence(null);
          }}
        ></ModelBanks>
      ) : (
        <React.Fragment />
      )}

      <div className="LauncHerCentral">
        <section className="Player-A">
          <div className="Player-B">
            <div className="Player-jog">
              <div className="Player-full">
                <div className="LogoPlayer">
                  <Image className="Player-user" src={Logoempresa} alt="Users" />
                </div>
              </div>
              <div className="Player-full">
                <span className="player-NameUser">{userData.name}</span>
              </div>
              <div className="Player-full">
                <span className="player-spanP">{userData.email}</span>
              </div>
              <div className="Player-full">
                <span className="player-spanP">{userData.phone}</span>
              </div>
              <div className="Player-full">
                <button
                  className="Btn-player"
                  type="button"
                  onClick={() => Router.push("/game/player/alterar")}
                >
                  editar perfil
                </button>
                <button
                  style={{
                    color: "#fff",
                    marginLeft: 10,
                  }}
                  className="Btn-player"
                  type="button"
                  onClick={ModalInfluences}
                  id="resgate"
                >
                  Resgatar prêmio
                </button>
              </div>
              <div className="Player-full">
                <a
                  className="player-spanP"
                  href="https://www.agcocorp.com/privacy-cookies-pt.html"
                  rel="noopener"
                >
                  Ver Termos de Serviços e Politica de Privacidade
                </a>
              </div>
            </div>
          </div>
          <div className="Player-C">
            <div className="Player-Premier">
              <div className="Player-pontos">
                <Image className="Player-img-pontos" src={perfil2} alt="Users" />
              </div>
              <div className="Pleyer-figures">
                {signed && (
                  <span className="Player-fig-P">{signed.premiers}</span>
                )}
                <span className="Player-fig-F">Figurinhas abertas</span>
              </div>
            </div>
            <div className="Player-Premier">
              <div className="Player-pontos">
                <Image className="Player-img-pontos" src={perfil1} alt="Users" />
              </div>
              <div className="Pleyer-figures">
                {signed && (
                  <span className="Player-fig-P">{signed.stands}</span>
                )}
                <span className="Player-fig-F">Figurinhas trocadas</span>
              </div>
            </div>
            <div className="Player-Premier">
              <div className="Player-pontos">
                <Image className="Player-img-pontos" src={Mcons} alt="Users" />
              </div>
              <div className="Pleyer-figures">
                {signed && <span className="Player-fig-P">{signed.cash}</span>}
                <span className="Player-fig-F">Massey Points</span>
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
    const apiClient = getAPIClient(ctx);
    const { data } = await apiClient.get('players/me');
    console.log(data);
    return {
      props: { userData: data },
    };
  }
};