import Translator from "@/components/I18n/Translator";
import GameContext from '@/contexts/gameContext';
import Link from 'next/link';
import Router from "next/router";
import React, { useContext } from "react";
import {
  Btnmobile, ContainerMobile, Imabtnmobi, Spann, Sptxt, Txtbtnmobile
} from "./styles";

export default function MenuMobile({ id }) {
  const {setLoad}=useContext(GameContext)

  async function executeLogout() {
    setLoad(true);
    await API.post("logout");
    destroyCookie(null, 'cmf-00');
    destroyCookie(null, 'cmf-01');  
    Router.replace("/login");
    setLoad(false);
  }

  return (
    <ContainerMobile id={id}>
      <Link href="/game/como-jogar">
        <Btnmobile>
          <Txtbtnmobile>
            <Spann></Spann>
            <Spann></Spann>
            <Spann></Spann>
            <Spann></Spann>
            <Imabtnmobi src="/storage/images/icons/videos.png" />
            <Sptxt>
              Como Jogar
              <Translator path-="menu.profile" />
            </Sptxt>
          </Txtbtnmobile>
        </Btnmobile>
      </Link>
      <Link href="/game/player">
      <Btnmobile >
        <Txtbtnmobile>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Imabtnmobi src="/storage/images/icons/user.png"/>
          <Sptxt>
            Perfil
            <Translator path-="menu.profile" />
          </Sptxt>
        </Txtbtnmobile>
        </Btnmobile>
      </Link>
      <Link href="/game">
        <Btnmobile>
          <Txtbtnmobile>
            <Spann></Spann>
            <Spann></Spann>
            <Spann></Spann>
            <Spann></Spann>
            <Imabtnmobi src="/storage/images/icons/album.png" />
            <Sptxt>
              Álbum
              <Translator path-="menu.album" />
            </Sptxt>
          </Txtbtnmobile>
        </Btnmobile>
      </Link>
      <Link href="game/banca">
        <Btnmobile>
          <Txtbtnmobile>
            <Spann></Spann>
            <Spann></Spann>
            <Spann></Spann>
            <Spann></Spann>
            <Imabtnmobi src="/storage/images/icons/banca.png" />
            <Sptxt>
              Banca de Troca
              <Translator path-="menu.stands" />
            </Sptxt>
          </Txtbtnmobile>
        </Btnmobile>
      </Link>
      <Link href="/game/ranking">
        <Btnmobile>
          <Txtbtnmobile>
            <Spann></Spann>
            <Spann></Spann>
            <Spann></Spann>
            <Spann></Spann>
            <Imabtnmobi src="/storage/images/icons/grafic.png" />
            <Sptxt>
              Ranking
              <Translator path-="menu.ranking" />
            </Sptxt>
          </Txtbtnmobile>
        </Btnmobile>
      </Link>
      <Link href="game/historico">
      <Btnmobile>
        <Txtbtnmobile>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Imabtnmobi src="/storage/images/icons/historico.png" style={{ width: 16 }} />
          <Sptxt>
            Historico
            <Translator path-="menu.historic" />
          </Sptxt>
        </Txtbtnmobile>
        </Btnmobile>
      </Link>

      <Btnmobile onClick={executeLogout}>
        <Txtbtnmobile>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Spann></Spann>
          <Sptxt>
            Sair
            <Translator path-="menu.logout" />
          </Sptxt>
        </Txtbtnmobile>
        </Btnmobile>

    </ContainerMobile>
  );
}
