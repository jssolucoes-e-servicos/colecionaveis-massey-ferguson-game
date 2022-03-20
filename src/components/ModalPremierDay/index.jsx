import API from "@/services/api";
import AssetsData from "@/services/data.json";
import {
  Anicont, Animates, Animes, Gifgeral, GifgeralGis, ModalAnimaBooton, ModalFulll, ModalPremier, ModeldayGeral
} from "@/styles/modals/AlertStyles";
import React, { useEffect, useState } from "react";

export default function PremierDay({ children, view = false }) {
  const [data, setData] = useState(null);
  const [enableButtom, setEnableButtom] = useState(false);

  useEffect(() => {
    async function getPremier() {
      try {
        const hash = await localStorage.getItem("mdlPmr");
        const { data } = await API.post("figures/premier/get", { hash: hash });
        const fig1 = AssetsData.figures[data.premier1 - 1];
        const fig2 = AssetsData.figures[data.premier2 - 1];
        const fig3 = AssetsData.figures[data.premier3 - 1];

        setData({
          premier1: fig1,
          premier2: fig2,
          premier3: fig3,
        });
      } catch (error) {
        console.error(error);
      }
    }

    async function animations() {
      if (view === true) {
        setTimeout(my2Timer, 3000);
        function my2Timer() {
          getPremier();
          let btn = document.querySelector("#Efeitos");
          btn.classList.add("active");
          btn.style.display = "flex";

          setEnableButtom(true);
        }
      }
    }
    animations();
    animateGFif();
  }, [view]);

  function animateGFif() {
    setTimeout(function () {
      if (view === true) {
        let Gifs = document.querySelector("#GifCard");
        //Gifs.style.opacity = "0.1";
        Gifs.style =
          "background-image:url('https://3sdigital.com.br/videovaltra/sticksImgcdm/animação_figurinhas_fundo_vermelho_01.gif')";
        //Gifs.style.display = "none";
      }
    }, 14000);
  }

  return view === true ? (
    <ModalFulll>
      <GifgeralGis id="GifCard" />
      <Gifgeral />
      <ModeldayGeral>
        <ModalPremier>
          <Animes id="Efeitos">
            {data !== null ? (
              <Anicont>
                <Animates
                  styles={{ marginLeft: -15 }}
                  src={data.premier1.image}
                ></Animates>
                <Animates src={data.premier2.image}></Animates>
                <Animates
                  styles={{ marginLeft: 15 }}
                  src={data.premier3.image}
                ></Animates>
              </Anicont>
            ) : (
              <React.Fragment />
            )}
          </Animes>
          {enableButtom === true && (
            <ModalAnimaBooton>{children}</ModalAnimaBooton>
          )}
        </ModalPremier>
      </ModeldayGeral>
    </ModalFulll>
  ) : (
    <React.Fragment />
  );
}
