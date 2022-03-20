import styled from "styled-components";

export const Container = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  background: #efefef;
  border: 0 solid darkgray;
  border-width: 0 2px;
  width: 100%;
  margin: 0 auto;
`;

export const CustomArrow = styled.button`
  background: none;
  border: none;
  margin-top: 30px;
  @media (min-width: 1250px) {
    /* margin-left: 20px;
    margin-right: 20px; */
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const DotButton = styled.button`
  height: 10px;
  min-height: 10px;
  width: 10px;
  min-width: 10px;
  background: ${({ active }) => (active ? "#222" : "#ccc")};
  border-radius: 50%;

  :not(:last-child) {
    margin-right: 5px;
  }
`;

export const CaruselContainer = styled.div`
  width: 100%;
  background: white;
  padding: 10px 0;
  border-top: 1px solid darkgray;
`;

export const CarouselParent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const CarouselWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 5px 0;
`;

export const CarouselTitle = styled.p`
  margin: 0;
  margin-bottom: 5px;
`;

export const CarouselAndTitleContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;
// export const IconG = styled.div`
//   background-color: red;
//   :last-child {
//     margin-right: 5px;
//   }

//   :first-child {
//     margin-left: 5px;
//   }
//   @media (max-width: 950px) {
//     position: relative;
//     background-color: transparent;
//     z-index: 1;
//     :last-child {
//       margin-right: 0px;
//     }

//     :first-child {
//       margin-left: 0px;
//     }
//   }
// `;

// import styled from "styled-components";

// export const Container = styled.div`
//   align-self: stretch;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 100%;
//   background: #efefef;
//   border: 0 solid darkgray;
//   border-width: 0 2px;
//   padding: 10px;
//   width: max-content;
//   margin: 0 auto;
// `;
