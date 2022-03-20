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
  width: 40%;
  height: 350px;
  border-radius: 5px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1em #000;
  z-index: 1;

  @media (min-width: 1300px) {
    width: 100%;
    max-width: 450px;
    max-height: 50%;
    min-height: 50%;
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: 90%;
    height: auto;
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

  /* background-color: blue; */
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
  font-size: 20px;
  color: #000;
  font-weight: bold;
  cursor: pointer;

  :hover {
    color: #fff;
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
`;

export const ModalTxtB = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 70px;
  margin-top: 30px;

  /* background-color: RED; */
`;
export const TxtB = styled.text`
  font-size: 20px;
  color: #8b0000;
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
  max-width: 98%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    height: 50px;
  }
`;

export const InputTxt = styled.input`
  width: 100%;
  max-width: 95%;
  height: 50px;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 900px) {
    height: 40px;
    font-size: 0.8em;
  }
`;

export const ModalAnimaBooton = styled.section`
  z-index: 99999;
  width: 100%;
  min-height: auto;
  max-width: 100%;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #fff; */
  /* margin-top: 0%; */
  padding: 10px 10px 10px 10px;
`;

export const ButtonResgate = styled.button`
  position: relative;
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
  margin-bottom: 20px;
  /* -webkit-box-reflect: below 1px linear-gradient(transparent, #0004); */
  @media (max-width: 900px) {
    width: 90%;
    font-size: 10px;
  }
`;
