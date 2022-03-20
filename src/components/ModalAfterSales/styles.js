import styled from "styled-components";

// export const Container =styled.section`

// `;

export const ModalSale = styled.section`
  width: 100%;
  max-width: 100%;
  height: 100%;
  position: fixed;
  /* background-color: rgb(151 149 149 / 54%); */
  margin: 0%;
  z-index: 999998;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 5s ease-in-out;
`;

export const ModelSaleF = styled.section`
  position: absolute;
  width: 100%;
  max-width: 40%;
  height: 25%;
  min-height: 30%;
  border-radius: 5px;
  background-color: #fff;
  border: 3px solid #810101;
  /* #810101; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1em #000;
  z-index: 1;
  @media (max-width: 900px) {
    max-width: 95%;
    height: 30%;
  }
  //animation: AnimateTxtSalesb 1s linear infinite;
  @keyframes AnimateTxtSalesb {
    0% {
      max-width: 40%;
      height: 25%;
    }

    50% {
      max-width: 42%;
      height: 27%;
    }

    100% {
      width: 40%;
      height: 25%;
    }
  }
`;

export const ModalSalesG = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  width: 100%;
  max-width: 90%;
  height: 90%;
  background-color: #fff;
`;

export const ModalSalesImage = styled.img`
  width: 150px;
  max-width: 150px;

  top: 20%;
  bottom: 30px;
  background-position: center;
  background-size: contain;
  // animation: AnimateTxtSales 5s ease-in-out infinite;
`;
export const BtnCloseSales = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0;
  width: 100%;
  max-width: 100%;
  height: 20px;
  background-color: #ccc;
`;
export const BtnClosed = styled.button`
  font-size: 15px;
  color: #000;
  font-weight: bold;
  background-color: red;
`;

export const Saleschid = styled.section`
  z-index: 99999;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 0%;

  padding: 10px 10px 10px 10px;
`;
export const SalesTxtPA = styled.text`
  margin-top: 10px;
  font-size: 0.8em;
  color: #000;
  font-weight: bold;
  animation: AnimateTxtSales 2s ease-in-out;
`;

export const SalesTxts = styled.text`
  font-size: 0.8em;
  font-weight: 800;
  color: #000;
  animation: AnimateTxtSales 2s ease-in-out;
  /* animation: AnimateTxtSales 1s linear infinite; */
  @keyframes AnimateTxtSales {
    0% {
      display: flex;
      font-size: 0.8em;
      /* margin-left: -100%; */
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-5px);
      margin-left: 0%;
      font-size: 0.9em;
    }

    100% {
      //transform: translateY(0px);
      font-size: 0.8em;
    }
  }
`;
