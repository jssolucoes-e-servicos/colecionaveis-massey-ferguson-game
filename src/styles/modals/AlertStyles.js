import styled from "styled-components";

export const ModalFulll = styled.section`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  position: fixed;
  background-color: transparent;
  margin: 0%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  //background-image: url("https://3sdigital.com.br/videovaltra/sticksImgcdm/redux.gif");
  //background-image: url("https://3sdigital.com.br/videovaltra/sticksImgcdm/animação_figurinhas_fundo_vermelho_01.gif");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  ::before {
    content: "";
    position: absolute;
    top: 100%;
    bottom: 0;
    width: 100%;
    height: 50%;
    border-radius: 50%;

    /* background-size: 400%; */
    opacity: 1;
    transition: 0.5s;

    //animation: animateGG 9s linear infinite;

    @keyframes animateGG {
      0% {
        box-shadow: 0 0 420px red, 0 0 200px #450247, 0 0 240px red,
          0 0 104px red;
      }
      50% {
        box-shadow: 0 0 420px #450247, 0 0 200px red, 0 0 240px #450247,
          0 0 104px #450247;
      }
      100% {
        box-shadow: 0 0 420px #450247, 0 0 200px #9c0606, 0 0 240px #450247,
          0 0 104px red;
      }
    }
  }
`;

export const GifgeralGis = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 80%;
  height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  background-image: url("https://3sdigital.com.br/videovaltra/sticksImgcdm/reduxxNew.gif");
  @media (max-width: 980px) {
    width: 100%;
    max-width: 100%;
    /* height: 40%; */
    max-height: 250px;
  }
`;

export const Gifgeral = styled.img`
  width: auto;
  /* max-width: 55%; */
  height: auto;
  margin: 0;
  padding: 0;
  /* border: solid 5px #fff; */
  background: transparent;
  margin-top: -10%;
`;
export const ModeldayGeral = styled.section`
  position: absolute;
  width: 100%;
  max-width: 30%;
  height: 80%;
  border-radius: 5px;
  /* background-color: #fff; */
  display: inline;
  justify-content: center;
  align-items: center;
  /* box-shadow: 0 0 1em #000; */
  animation: animateBorder 20s linear infinite;
  z-index: 1;
  /* ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    background: linear-gradient(
      45deg,
      #000000,
      #000,
      #f44336,
      #000,
      #f00,
      #fb0094,
      #000,
      #f44336,
      #000,
      #f00
    );
    background-size: 600%;
    filter: blur(8px);
    transition: 0.5s;
    z-index: -9999;

    animation: animateBorder 20s linear infinite;
  }
  @keyframes animateBorder {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 300% 0;
    }
    100% {
      background-position: 0 0;
    }
  } */
`;

export const ModalPremier = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 4px;
  /* background: linear-gradient(70deg, #000, #252525, #3d0000, #000); */
  background-size: 400% 400%;
  position: relative;

  /* animation: animateM 8s ease-in-out infinite;

  @keyframes animateM {
    0% {
      background-position: 0 50%;
      box-shadow: 0 0 420px #650b05, 0 0 200px #650b05, 0 0 240px #650b05,
        0 0 104px #650b05;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
      box-shadow: 0 0 420px #650b05, 0 0 200px #650b05, 0 0 240px #650b05,
        0 0 104px #650b05;
    }
  } */
`;

export const ModalAnimaBooton = styled.section`
  z-index: 9999999;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  /* margin-top: -10%; */
  position: absolute;
  bottom: 0;
  padding: 1px;
  @media (max-width: 980px) {
    width: 100%;
    max-width: 96%;
    bottom: 70px;
    background: red;
    z-index: 1;
    position: fixed;
    padding: 1px;
  }
`;

export const ButtonAnimate = styled.button`
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 48px;
  background: RED;
  border: none;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 4px;
  text-decoration: none;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  @media (max-width: 980px) {
    width: 100%;
    max-width: 100%;
    background-color: red;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      79deg,
      #000000,
      #000000,
      #000000,
      #000000,
      #f00,
      #f44336,
      #000000,
      #000000,
      #000000,
      #ae1515
    );
    background-size: 400%;

    transition: 0.5s;
    //animation: animate 20s linear infinite;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      79deg,
      #000000,
      #000000,
      #000000,
      #000000,
      #f00,
      #f44336,
      #000000,
      #000000,
      #000000,
      #ae1515
    );
    background-size: 400%;
    filter: blur(8px);
    transition: 0.5s;

    //animation: animate 20s linear infinite;
  }
  @keyframes animate {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 300% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export const Aa = styled.span`
  position: absolute;
  display: block;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
  text-align: center;
  background: #0c0c0c;
  color: rgba(255, 255, 255, 0.2);
  transition: 0.5s;
  z-index: 1;
`;

export const Gifmaster = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 100%;
  /* max-height: 300px; */
  background-color: transparent;
  z-index: 1;
  /* margin-bottom: 20px; */
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ::after {
    content: "";

    position: absolute;
    top: 10%;
    /* box-shadow: 0 0 420px #650b05, 0 0 200px #650b05, 0 0 240px #650b05,
      0 0 104px #650b05; */
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      blue,
      blue,
      blue,
      blue,
      #f00,
      blue,
      blue,
      blue,
      blue,
      blue
    );
    background-size: 400%;
    filter: blur(8px);
    transition: 0.5s;
    opacity: 0;
    animation: animate 20s linear infinite;
    /* }
  ::before {
    content: "";
    position: absolute;
    top: 100%;
    bottom: 0;

    width: 100%;
    height: 100%;
    border-radius: 50%;

    background-size: 400%;
    opacity: 1;
    transition: 0.5s;

    animation: animateff 2s linear infinite; */

    @keyframes animateff {
      0% {
        box-shadow: 0 0 420px #650b05, 0 0 200px #650b05, 0 0 240px #650b05,
          0 0 104px #650b05;
      }
      50% {
        box-shadow: 0 0 420px blue, 0 0 200px #fb0094, 0 0 240px #fb0094,
          0 0 104px #650b05;
      }
      100% {
        box-shadow: 0 0 420px #650b05, 0 0 200px #650b05, 0 0 240px #650b05,
          0 0 104px #650b05;
      }
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const GifmImg = styled.img`
  width: 100%;
  max-width: 50%;
  height: 100%;
  background-color: transparent;
  @media (max-width: 1200px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Anicont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  width: 100%;
  max-width: 160px;
  margin-bottom: 0px;
  height: auto;
  //background-color: rgba(255, 99, 71, 9);
  border-radius: 5px;
  /* transition: all 0.5s ease-in-out; */
  //background-image: url("https://3sdigital.com.br/videovaltra/sticksImgcdm/redux.gif");
  animation: animateGlobalImg 2s linear;
  animation-delay: 2s;
  //animation: animateGlobalImgF 4s linear infinite;
  @keyframes animateGlobalImg {
    0% {
      //box-shadow: 0 0 130px red, 0 0 10px #000000, 0 0 110px red;
      transform: perspective(700px) rotateY(0deg);
    }
    50% {
      //transform: rotateY(45deg);
      transform: perspective(700px) rotateY(180deg);
      // box-shadow: 0 0 310px red, 0 0 10px #000000, 0 0 110px #23151a;
    }
    100% {
      //transform: rotateY(45deg);
      transform: perspective(700px) rotateY(360deg);
      // box-shadow: 0 0 0px red, 0 0 130px #ff1c4a, 0 0 110px #23151a;
      /* box-shadow: 0 0 310px #ff1c4a, 0 0 130px blue, 0 0 310px #23151a; */
    }
  }
  @keyframes animateGlobalImgF {
    0% {
      box-shadow: 0 0 130px red, 0 0 10px #000000, 0 0 110px #23151a;
      // transform: perspective(700px) rotateY(0deg);
    }
    50% {
      // transform: rotateY(45deg);
      // transform: perspective(700px) rotateY(180deg);
      box-shadow: 0 0 310px red, 0 0 10px #000000, 0 0 110px #23151a;
    }
    100% {
      //transform: rotateY(45deg);
      // transform: perspective(700px) rotateY(360deg);
      box-shadow: 0 0 0px red, 0 0 130px red, 0 0 110px #23151a;
      /* box-shadow: 0 0 310px #ff1c4a, 0 0 130px blue, 0 0 310px #23151a; */
    }
  }
`;
export const Animes = styled.div`
  display: none;
  width: 100%;
  height: auto;
  margin-top: 0;
  flex-direction: row;
  /* background-color: blue; */
  justify-content: center;
  align-items: center;
  @media (max-width: 980px) {
    width: 70%;
    max-width: 90%;
    height: 50%;
  }
`;
export const Animates = styled.img`
  width: 0;
  height: 0;
  opacity: 0;
  /* background-color: #fff; */
  border-radius: 5px;
  height: auto;
  width: 100%;
  max-width: 160px;
  height: 100%;
  max-height: 250px;
  padding: 5px;
  /* background-image: url("https://game-stickers.herokuapp.com/static/media/card.ea727388.png"); */
  /* background-size: 100% 100%; */
  /*transition: all 3s ease-in-out;*/
  animation-duration: 1.5s;
  animation-fill-mode: both;

  animation-name: example;
  animation-delay: 2s;

  @keyframes example {
    0% {
      width: 0px;
      height: 0;
      background-color: #000;
      /*transform:  rotateY(90deg);*/
      margin-top: -100px;
      opacity: 0.2;
    }
    50% {
      margin-top: -60px;
      /* box-shadow: 10px red, 10px red, 10px red, 10px red; */
      /*transform: rotateX(180deg);*/
      transform: rotateY(180deg);
      opacity: 0.5;
    }
    100% {
      margin-top: 60px;
      opacity: 0.8;
    }
    100% {
      margin-top: 0;
      width: 230px;
      height: 300px;
      transform: rotateY(360deg);
      /* box-shadow: 0 0 10px #ff1c4a, 0 0 10px #000000, 0 0 10px #23151a,
        0 0 60px #ff0000; */
      opacity: 1;
    }
  }
  @media (max-width: 980px) {
    width: 70%;
    max-width: 80px;
    height: 120px;
    max-height: 120px;
  }
`;

//   .btnff .aa {
//     color: rgba(255, 255, 255, 1);
//   }

//   .btnff .aa::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 50%;
//     background: rgba(255, 255, 255, 0.1);
//   }
