import AlbumM from "@/assets/images/icons/album.png";
import BancaM from "@/assets/images/icons/banca.png";
import HankM from "@/assets/images/icons/grafic.png";
import HistoryM from "@/assets/images/icons/historico.png";
import PerfilM from "@/assets/images/icons/user.png";
import videos from "@/assets/images/perfil3.png";
import Translator from "@/components/I18n/Translator";
import Router from "next/router";
import React from "react";
import {
  Btnmobile, ContainerMobile, Imabtnmobi, Spann, Sptxt, Txtbtnmobile
} from "./styles";
export default function MenuMobile({ id }) {

  async function executeLogout() {
    setLoad(true);
    await API.post("logout");
    destroyCookie(null, 'cmf-00');
    destroyCookie(null, 'cmf-01');  
    Router.push("/login");
    setLoad(false);
  }

  return (
    <ContainerMobile id={id}>
      <Btnmobile onClick={() => Router.push("game/como-jogar")}>
        <Txtbtnmobile>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Imabtnmobi src={videos} />
          <Sptxt>
            Como Jogar
            <Translator path-="menu.profile" />
          </Sptxt>
        </Txtbtnmobile>
      </Btnmobile>
      <Btnmobile onClick={() => Router.push("game/player")}>
     
        <Txtbtnmobile>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Imabtnmobi src={PerfilM} />
          <Sptxt>
            Perfil
            <Translator path-="menu.profile" />
          </Sptxt>
        </Txtbtnmobile>
      </Btnmobile>
      <Btnmobile onClick={() => Router.push("game")}>
        <Txtbtnmobile>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Imabtnmobi src={AlbumM} />
          <Sptxt>
            Álbum
            <Translator path-="menu.album" />
          </Sptxt>
        </Txtbtnmobile>
      </Btnmobile>
      <Btnmobile onClick={() => Router.push("game/banca")}>
        <Txtbtnmobile>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Imabtnmobi src={BancaM} />
          <Sptxt>
            Banca de Troca
            <Translator path-="menu.stands" />
          </Sptxt>
        </Txtbtnmobile>
      </Btnmobile>
      <Btnmobile onClick={() => Router.push("game/ranking")}>
        <Txtbtnmobile>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Imabtnmobi src={HankM} />
          <Sptxt>
            Ranking
            <Translator path-="menu.ranking" />
          </Sptxt>
        </Txtbtnmobile>
      </Btnmobile>
      <Btnmobile onClick={() => Router.push("game/historico")}>
        <Txtbtnmobile>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Imabtnmobi src={HistoryM} style={{ width: 16 }} />
          <Sptxt>
            Historico
            <Translator path-="menu.historic" />
          </Sptxt>
        </Txtbtnmobile>
      </Btnmobile>
      <Btnmobile onClick={executeLogout}>
        <Txtbtnmobile>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Imabtnmobi src={BancaM} />
          <Sptxt>
            Sair
            <Translator path-="menu.logout" />
          </Sptxt>
        </Txtbtnmobile>
      </Btnmobile>
    </ContainerMobile>
  );
}
