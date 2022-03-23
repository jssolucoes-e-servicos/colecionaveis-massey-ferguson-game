/* carousel teste */
import styled, { css } from "styled-components";

export const WralC = styled.section`
  width: 95%;
  max-width: 1000px;
  background-color: transparent;
  height: auto;
  display: flex;
  justify-content: start;
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

export const CardCarro = styled.button`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  flex: none;
  width: 110px;
  /* width: 130px; */
  height: 99%;
  scroll-snap-align: start;
  margin-left: 6px;
  background: #fff;
  margin-bottom: 0;

  /* :hover {
    cursor: pointer;
    border: solid 3px red;
    height: 105% +10px;
    transition: all 0.1s ease-in-out;
  } */
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

  ${({ active }) => active && activeStyles}
`;

/* border: ${props => props.active == true ? "red"; */
const activeStyles = css`
  border: solid 3px red;
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

export const DobtnFull = styled.div`
  bottom: 60;
  position: relative;
  width: auto;
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
  /* max-width: 180px; */
  max-width: 130px;
  margin-right: 10px;
  /* background-color: #f3f3f3; */
  display: inline;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  @media (max-width: 1200px) {
    max-width: 130px;
    display: flex;
  }
`;
export const Dge = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const DCbtns = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 80px;
  :hover > #spartacus {
    display: flex;
    position: absolute;
    z-index: 1;
  }
`;
export const DCbtnsB = styled.button`
  background-color: #3c3c3c;
  color: #fff;
  width: 30px;
  /* margin-left: 15px; */
  min-width: 40px;
  height: 40px;
  min-height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 30px;
    /* margin-left: 15px; */
    min-width: 30px;
    height: 30px;
    min-height: 30px;
  }

  &:hover {
    background: #810101;
    Spanf {
      visibility: visible;
    }

    :hover > #teste {
      color: #ffce2c;
      font-size: 25px;
    }
  }
`;
export const Spantick = styled.button`
  width: 100px;
  max-width: 150px;
  height: 40;
  display: none;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  margin-bottom: 80px;
  font-size: 0.6em;
  border-radius: 10px;
  transition: all ease-in-out 0.9s;
  justify-content: center;
  align-items: center;
  padding: 5px 5px 5px;
`;
export const SpanfULL = styled.button`
  /* width: 100px;
  max-width: 150px; */
  margin-left: 1%;
  height: 40;
  display: none;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  margin-bottom: 70px;

  font-size: 0.6em;
  border-radius: 10px;
  transition: all ease-in-out 0.9s;
  justify-content: center;
  align-items: center;
  padding: 5px 5px 5px;
`;
export const DCbtnsBb = styled.button`
  background-color: #810101;
  color: #fff;
  width: 30px;
  /* margin-left: 15px; */
  min-width: 40px;
  height: 40px;
  min-height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 30px;
    /* margin-left: 15px; */
    min-width: 30px;
    height: 30px;
    min-height: 30px;
  }
  &:hover {
    background: #3c3c3c;
    Spanf {
      visibility: visible;
    }
  }
`;

export const Spanf = styled.span`
  visibility: hidden;
  width: 100%;
  max-width: 300px;
  display: inline;
  flex-direction: row;
  background-color: red;
  border-radius: 3px;
  font-size: 0.6em;
  margin-bottom: 60px;
  position: absolute;
  z-index: 999999;
`;
export const BtnBimage = styled.img`
  width: 100%;
  max-width: 50%;
  height: 50%;
  background: #3c3c3c;
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 40%;
    height: 40%;
  }
`;

export const Numbers = styled.div`
  /* width: 30px;
  height: 30px;
  position: absolute;
  z-index: 99999998;
  margin-top: 0px;
  margin-left: 150px;
  background-color: #3c3c3c;
  border-radius: 50%;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center; */
  position: absolute;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 13px;
  top: 5px;
  right: 5px;
  background-color: #3c3c3c;
  color: #fff;
  width: 25px;
  min-width: 25px;
  height: 25px;
  min-height: 25px;
  border-radius: 50%;
`;
export const NumberApecial = styled.div`
  position: absolute;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 13px;
  top: 5px;
  right: 5px;
  background-color: #daa520;
  color: #fff;
  width: 25px;
  min-width: 25px;
  height: 25px;
  min-height: 25px;
  border-radius: 50%;
  border: 1px solid #e5b51f;
  box-shadow: 3px 2px 5px 0px #656565;
  transition: box-shadow 0.3s ease-in 0s;
`;
export const DobtDf = styled.button`
  position: relative;
  background-color: #810101;
  color: #fff;
  width: 30px;
  /* margin-left: 15px; */
  min-width: 40px;
  height: 40px;
  min-height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Imagett = styled.img`
  /* max-width: 180px; */
  max-width: 130px;
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
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const TxtTT = styled.text`
  width: 100%;
  max-width: 100%;
  font-size: 0.7em;
  color: #000;
  font-weight: 800;
  height: auto;
  padding: 0 5px;
  @media (max-width: 900px) {
    font-size: 11px;
  }
`;
export const TxtTTfILL = styled.text`
  width: 100%;
  max-width: 100%;
  font-size: 10px;
  height: auto;
  color: #4d4c4c;
  padding: 0 5px;
`;
