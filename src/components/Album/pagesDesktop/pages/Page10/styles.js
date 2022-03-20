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
