import styled from "styled-components";

// export const Container =styled.section`

// `;

export const ModalFulllB = styled.section`
  width: 100%;
  max-width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgb(151 149 149 / 54%);
  margin: 0%;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 5s ease-in-out;
`;

export const Modelbank = styled.section`
  position: absolute;
  width: 100%;
  max-width: 40%;
  height: auto;
  min-height: 60%;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1em #000;
  z-index: 1;

  @media (max-width: 900px) {
    max-width: 90%;
    height: 80%;
  }
`;

export const ModalPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0;
  width: 100%;
  max-width: 90%;
  height: 100%;
  background-color: #fff;
`;
export const BtnCloseBank = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  max-width: 100%;
  height: 20px;
  background-color: #fff;
`;
export const BtnClosed = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 25px;
  height: 25px;
  padding: 8px 8px;
  border-radius: 50%;
  border: solid 1.3px #000;
  font-size: 0.8em;
  color: #000;
  font-weight: bold;
  cursor: pointer;

  :hover {
    color: #fff;
    background-color: #660303;
    border: none;
  }
`;

export const ModalImB = styled.div`
  width: 100%;
  max-width: 120px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  /* border-right: 2px solid red; */
  margin-bottom: 2%;
  /* background-color: #e7010f; */
  /* background-color: #ccc;
  box-shadow: 0 0 0.3em #000; */
  @media (max-width: 900px) {
    margin-bottom: 8%;
  }
`;
export const FotoFiguriPadrao = styled.img`
  position: relative;
  width: 100%;
  max-width: 190px;
  transform: rotate(-10deg);
  /* height:50%; */
  margin-right: -20px;

  /* margin: 10px; */
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  pointer-events: none;
`;
export const FotoFiguri = styled.img`
  position: relative;
  width: 100%;
  max-width: 80%;
  /* height:50%; */
  transform: rotate(10deg);
  margin: 0;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  pointer-events: none;
`;
export const ModalTxtB = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-bottom: 0.5em;
  /* background-color: RED; */
`;
export const TxtB = styled.text`
  font-size: 1em;
  color: #333;
  font-weight: 800;
  margin: 10px;
  @media (max-width: 900px) {
    font-size: 1em;
  }
`;
export const BtnVendeBank = styled.button`
  width: 100%;
  max-width: 200px;
  background-color: rgb(24, 24, 24);
  height: 45px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1em;
  border-style: none;
  border: 0;
`;
export const TxtBuMb = styled.text`
  color: #fff;
  font-size: 15px;
`;

export const ModalAnimaBooton = styled.section`
  z-index: 99999;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-top: 0%;
  padding: 10px 10px 10px 10px;
`;

export const ButtonAnimate = styled.button`
  position: relative;
  width: 160px;
  height: 50px;
  line-height: 48px;
  background: RED;
  border: none;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 4px;
  text-decoration: none;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
`;
