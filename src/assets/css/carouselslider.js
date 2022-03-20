/* carousel teste */
import styled from "styled-components";

export const WralC = styled.section`
  width: 95%;
  max-width: 1000px;
  background-color: transparent;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemsCarrocel = styled.div`
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  height: 100%;
  background: transparent;
  justify-content: left;
  align-items: center;
  transition: all 0.1s ease-in-out;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const CardCarro = styled.section`
  flex: none;

  width: 130px;
  height: 99%;
  scroll-snap-align: start;
  margin-left: 6px;
  background: #fff;
  margin-bottom: 0;
  :hover {
    cursor: move;
    border: solid 3px red;
    height: 105% +10px;
    transition: all 0.1s ease-in-out;
  }
`;

export const ImgCaf = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
  margin: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #f3f3f3;
  object-fit: cover;
  pointer-events: none;
`;

export const Slidenav = styled.div`
  width: 60px;
  height: 100px;
  background-color: transparent;
  margin: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    display: none !important;
  }
`;

export const SliderFull = styled.div`
  width: 60px;
  height: 100px;
  color: rgb(97, 97, 97);
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2em;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5px;
  @media (max-width: 900px) {
    display: none !important;
  }
`;

// Carrousel da pagina Banca filtro só aparecera no media query
export const CarF = styled.div`
  display: none;
  width: 100%;
  max-width: 100%;
  height: auto;
  background-color: saddlebrown;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const FigureTT = styled.div`
  width: 100%;
  max-width: 180px;
  margin-right: 10px;
  /* background-color: #f3f3f3; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  @media (max-width: 1200px) {
    max-width: 130px;
    display: flex;
  }
`;

export const Imagett = styled.img`
  max-width: 180px;
  height: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #f3f3f3;
  @media (max-width: 1200px) {
    max-width: 130px;
    display: flex;
  }
`;
export const TxtCarCards = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const TxtTT = styled.text`
  width: 100%;
  max-width: 100%;
  font-size: 15px;
  color: #000;
  font-weight: 800;
  height: 20px;
  padding: 2px 5px;
`;
export const TxtTTfILL = styled.text`
  width: 100%;
  max-width: 100%;
  font-size: 10px;
  color: #4d4c4c;
  padding: 5px 5px;
`;

// .WralC {
//     width: 85%;
//     background-color: rgb(23, 23, 206);
//     height: 180px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .WralC .itemsCarrocel {
//     display: flex;
//     overflow-x: scroll;
//     scroll-snap-type: x mandatory;
//     -webkit-overflow-scrolling: touch;
//     scroll-behavior: smooth;
//     height: 100%;
//     background: #fff;
//     justify-content: left;
//     align-items: center;
//     margin: 0;
//   }

//   .CardCarro {
//     flex: none;

//     width: 130px;
//     height: 100%;
//     scroll-snap-align: start;
//     pointer-events: none;
//     margin-left: 2px;
//     background: #fff;
//     margin-bottom: 0;
//   }

//   .ImgCaf {
//     width: 100%;
//     max-width: 95%;
//     height: 100%;
//     margin: 0;
//     background-size: contain;
//     background-repeat: no-repeat;
//     background-color: #f3f3f3;
//     object-fit: cover;
//   }

//   /* Nav buttons */
//   .slide-nav {
//     width: 60px;
//     height: 60px;
//     background-color: #fff;
//     margin: 10px 10px;
//   }
//   .SliderFull {
//     width: 60px;
//     height: 60px;

//     color: rgb(97, 97, 97);
//     text-align: center;
//     text-decoration: none;
//     display: inline-block;
//     font-size: 2.2em;
//     transition-duration: 0.4s;
//     cursor: pointer;
//     border-radius: 5px;
//   }

//   .slide-nav button:hover {
//     color: #000;
//   }

//   .WralC .itemsCarrocel::-webkit-scrollbar {
//     display: none;
//   }
//   #iconCar {
//     font-size: 3em;
//   }
/* segundo carousel */
/* final */
