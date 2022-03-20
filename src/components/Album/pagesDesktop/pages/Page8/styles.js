// import styled from "styled-components";

// export const HeaderContainer = styled.div`
//   display: flex;
//   > div {
//     flex: 1;
//   }
// `;

// export const InfoContainer = styled.ul`
//   list-style: none;

//   > li {
//     font-size: 0.7vw;
//     opacity: 0.5;
//     color: black;
//     background: white;
//     padding: 0.5vw 0.8vw;

//     :not(:last-child) {
//       margin-bottom: 0.5vw;
//     }
//   }
// `;

// export const Texts = styled.div`
//   width: 100%;
//   height: 40px;
//   display: flex;
//   justify-content: start;
//   align-items: center;
//   > p {
//     font-family: "Roboto";
//     font-size: 0.6vw;
//     font-weight: 900;
//     min-height: 25px;
//     color: #fff;
//     text-align: start;
//   }
// `;

import styled from "styled-components";

export const StickersContainer = styled.div`
  display: flex;
  margin-top: 3vw;
  width: 5vw;
`;

export const StickerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StickerTitle = styled.p`
  margin: 0;
  font-size: 0.8vw;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const StickerDescription = styled.p`
  margin: 0;
  font-size: 0.6vw;
  line-height: 0.65vw;
  margin-top: 5px;
  font-weight: lighter;
  opacity: 0.7;

  > b {
    font-weight: bold;
  }
`;

export const InfoContainer = styled.ul`
  list-style: none;

  > li {
    font-size: 0.7vw;
    opacity: 0.5;
    color: black;
    padding: 0.5vw 0.8vw;

    :not(:last-child) {
      margin-bottom: 0.5vw;
    }
  }
  > p {
    margin-top: 10px;
    margin-bottom: -5px;
    padding: 1em 1em;
    color: #fff;
    font-size: 0.7vw;
    opacity: 0.5;
  }
`;

export const InfoContainerBox = styled.div`
  border: solid 2px #e70a18;
  margin-top: 1vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin-left: 0.3vw;
`;

export const InfoContainerBoxG = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const InfoContainerBoxTxt = styled.div`
  font-family: "Roboto";
  min-width: 50%;
  max-width: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: #fff;
  margin-left: 5vw;
  font-size: 0.6vw;
  font-weight: 900;
  color: #fff;
  text-align: start;
  margin-bottom: -1vw;
`;
