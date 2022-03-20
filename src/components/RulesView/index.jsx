import Logoempresa from "@/assets/images/MF_Logo_Red_Grey.png";
import AssetsData from "@/services/data.json";
import Image from "next/image";
import React from "react";
export default function RulesView({ children }) {
  return (
    <React.Fragment>
      <section className="Terms-A">
        <div className="Terms-B">
          <div className="TermsH">
            <span className="TbdH">
              <Image
                src={Logoempresa}
                alt="Massey Ferguson"
                style={{ width: 90 }}
              />
            </span>
          </div>
          <h2>Seja bem-vindo (a) a sua coleção dos sonhos.</h2>
          <div
            className="Terms-Img"
            style={{ backgroundImage: `url("${AssetsData.pages.rules}")` }}
          ></div>
          <div className="Terms-TxtG">
            <div
              className="Terms-Blocs"
              style={{ borderRight: "solid 1.5px red" }}
            >
              <span className="txt-terms">
                Olá, Masseyro e Masseyra, você acaba de aterrissar na
                experiência dos Colecionáveis Massey Ferguson.
              </span>
              <span className="txt-terms">
                Um espaço dedicado para guardar os ícones que são parte da sua e
                da nossa história, com muitos dos vermelhinhos que fizeram o seu
                coração pulsar mais forte no campo.
              </span>
              <span className="txt-terms">
                Em 2022, a Massey Ferguson está completando 175 anos e, como
                você deve saber, em 2021 alcançou a marca de 60 anos no Brasil.
              </span>
              <span className="txt-terms">
                Foi lá em 1961 que oficializamos a nossa chegada por aqui e
                muita revolução aconteceu neste intervalo, que colocou a
                agricultura brasileira no topo do mundo. E, claro, nossa
                participação não passou despercebida. E foi assim que criamos
                este álbum que vai ficar no coração de toda a família.
              </span>
              <span className="txt-terms">
                Por aqui, você vai poder reviver os nossos anos de história no
                Brasil, em 60 figurinhas colecionáveis, que tornará essa
                experiência inesquecível.
              </span>
            </div>
            <div className="Terms-Blocs">
              <span className="txt-terms">
                Nesta viagem do tempo, vai redescobrir as máquinas agrícolas que
                se misturaram ao desenvolvimento do agronegócio aqui no Brasil,
                além é claro do nascimento de muitas das tecnologias que você
                utiliza todos os dias. Ficou curioso? Não queremos te dar muito
                spoiler, mas essa aqui vai ser uma atividade para viver e
                compartilhar com toda a família e amigos.
              </span>
              <span className="txt-terms">
                Sua banca de troca está logo ali, assim como o acesso a todas as
                suas figurinhas com as suas máquinas preferidas.{" "}
              </span>
              <span className="txt-terms">
                Também consegue visualizar toda a sua pontuação e as raridades
                desta coleção. Das pessoas que você conhece, quem será que vai
                completar o álbum antes de todos? Está na hora de descobrir. A
                experiência do Colecionáveis Massey Ferguson vai começar.
                <br />
                Vamos lá?
              </span>
            </div>
          </div>
          <div className="Terms-C">{children}</div>
        </div>
      </section>
    </React.Fragment>
  );
}
