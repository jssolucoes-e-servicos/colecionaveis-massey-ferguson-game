import styled from "styled-components";

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
  transition: all 2s ease-in-out;
`;

export const ModelbankInflu = styled.section`
  position: absolute;
  width: 100%;
  max-width: 60%;
  height: 70%;
  min-height: 80%;
  border-radius: 5px;
  background-color: #8b0000;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1em #000;
  z-index: 1;

  @media (min-width: 1300px) {
    width: 100%;
    max-width: 700px;
    max-height: 50%;
    min-height: 50%;
  }

  @media (max-width: 900px) {
    max-width: 95%;
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
  max-width: 100%;
  height: 100%;
`;
export const BtnCloseBank = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  max-width: 100%;
  height: 20px;
  padding: 10px 10px 10px 10px;
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
  max-width: 100px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0.3em #000;
  transform: rotate(10deg);
  @media (max-width: 1000px) {
    max-width: 60px;
  }
`;

export const FotoFiguriPadrao = styled.img`
  position: relative;
  width: 100%;
  max-width: 115px;
  transform: rotate(-10deg);
  margin-right: -20px;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  pointer-events: none;
  @media (max-width: 1000px) {
    max-width: 77px;
  }
`;

export const FotoFiguri = styled.img`
  position: relative;
  width: 100%;
  max-width: 100%;
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
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-top: 10px;
`;
export const TxtB = styled.text`
  font-size: 20px;
  color: #000;
  font-weight: 800;
  @media (max-width: 900px) {
    font-size: 1em;
  }
`;
export const BtnVendeBank = styled.button`
  width: 100%;
  max-width: 200px;
  background-color: rgb(24, 24, 24);
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TxtBuMb = styled.text`
  color: #fff;
  font-size: 15px;
`;

// inicio modal influence

export const InputdIV = styled.div`
  width: 100%;
  max-width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 900px) {
    height: 50px;
  }
`;

export const InputTxt = styled.input`
  width: 100%;
  max-width: 60%;
  height: 50px;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  border-bottom: solid 1px #ccc;
  border-style: none;
  border: 0;
  @media (max-width: 900px) {
    height: 40px;
    font-size: 0.8em;
  }
  :focus {
    border-bottom: solid 1px red;
  }
`;

export const ModalAnimaBooton = styled.section`
  z-index: 99999;
  width: 100%;
  min-height: auto;
  max-width: 100%;
  top: 10px;
  bottom: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
`;
export const ModalResFull = styled.section`
  z-index: 99999;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: relative;
  bottom: 0;
  @media (max-width: 980px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const ButtonResgate = styled.button`
  width: 300px;
  max-width: 60%;
  height: 50px;
  line-height: 48px;
  background: #000;
  border: none;
  text-transform: uppercase;
  color: #fff;
  font-size: 20px;
  letter-spacing: 4px;
  text-decoration: none;
  border-style: none;
  border: 0;
  @media (max-width: 1000px) {
    width: 90%;
    font-size: 10px;
  }
`;
