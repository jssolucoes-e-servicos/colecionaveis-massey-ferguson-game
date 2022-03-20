import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  > div {
    flex: 1;
  }
`;

export const InfoContainer = styled.ul`
  list-style: none;

  > li {
    font-size: 0.7vw;
    opacity: 0.5;
    color: black;
    background: white;
    padding: 0.5vw 0.8vw;

    :not(:last-child) {
      margin-bottom: 0.5vw;
    }
  }
`;
export const Boxs = styled.div`
  display: -ms-flexbox;
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-bottom: 5vw;
  /* background-color: rosybrown; */
  /* width: 100%; */
`;

export const DescriptionTirle = styled.p`
  margin: 0;
  font-size: 8px;
  line-height: 10px;
  margin-top: 2px;
  font-weight: lighter;
  opacity: 0.7;
  max-width: 80px !important;
  display: flex;
  justify-content: start;
  align-items: start;
  background-color: red;

  > b {
    font-weight: bold;
  }
`;

// import styled from "styled-components";

// export const HeaderContainer = styled.div`
//   display: flex;
//   > div {
//     flex: 1;
//   }
// `;

// export const StickerContainerP3 = styled.div`
//   display: inline-block;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #333;
//   /* width: 48%; */
//   height: auto;
// `;
// export const Boxs = styled.div`
//   display: -ms-flexbox;
//   display: inline-block;
//   justify-content: center;
//   align-items: center;
//   left: 5px;
//   -webkit-align-items: center;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   -webkit-align-items: center;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
//   /* padding-bottom: 5vw; */
//   /* background-color: rosybrown; */
//   /* width: 100%; */
// `;

// export const StickerContainerP3B = styled.div`
//   margin-top: 6%;
//   width: 100%;
//   height: 39vw;
//   background-color: #e91e63;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* background-color: red; */
// `;

// export const StickerP3B = styled.div`
//   width: 100px;
//   height: 100px;
// `;

// export const InfoContainer = styled.ul`
//   list-style: none;

//   > li {
//     font-size: 0.6em;
//     opacity: 0.5;
//     color: black;
//     /* background: white; */
//     padding: 20px 2px 10px 0px;
//     color: #fff;
//     font-weight: 800;

//     :not(:last-child) {
//       margin-top: 5px;
//       margin-bottom: 0.1vw;
//     }
//   }

//   > p {
//     margin-top: 0;
//     font-size: 0.8em;
//     width: 80%;
//   }
// `;
// export const BoxxT = styled.div`
//   display: -webkit-box;
//   display: -webkit-flex;
//   display: -ms-flexbox;
//   display: flex;
//   margin-top: 1vw;
//   /* width: 100%; */
//   background: red;
//   align-items: center;
// `;
// export const Boxcards = styled.div`
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-flex-direction: column;
//   -ms-flex-direction: column;
//   flex-direction: column;
//   /* background-color: purple; */
//   padding: 0;
//   min-width: 90px;
// `;
// export const Boxborder = styled.div`
//   width: 100%;
//   height: 100%;
//   border-left: 1px solid transparent;
//   display: -webkit-box;
//   display: -ms-flexbox;
//   -ms-flex-pack: center;
//   -ms-flex-align: center;
// `;
// export const ImagesS = styled.div`
//   width: 100px;
//   height: auto;
// `;

// // antigo ver qual vai ser apagado
// export const StickerContainer = styled.div`
//   display: inline-block;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   /* background-color: blue; */
//   width: 46%;
//   margin-left: 3%;
// `;

// // export const StickerDescription = styled.p`
// //   margin: 0;
// //   font-size: 2vw;
// //   line-height: 0.65vw;
// //   margin-top: 5px;
// //   font-weight: lighter;
// //   opacity: 0.7;

// //   > b {
// //     font-weight: bold;
// //   }
// // `;
// export const DivDados = styled.div`
//   display: inline-block;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 500px;
//   /* background-color: royalblue; */
// `;
// export const VidTxt = styled.div`
//   width: 100%;
//   padding: 2px 0 0 0;
//   /* background-color: black; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;
