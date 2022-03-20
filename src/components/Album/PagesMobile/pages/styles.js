import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 0px !important;
  width: 100%;
  background-image: url(${({ background }) => background});
  /* background-size: 100% 100%; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const PageHeader = styled.div`
  /* div central Album */
  background-color: blue;
  width: 50%;
  margin-left: 5%;
  /* height: 95%; */
`;
export const PageHeaderMobile = styled.div`
  /* div central Album */
  /* background-color: #e91e63; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
`;
export const PageTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 2.5vw;
  line-height: 1.55vw;
  font-weight: bold;
  margin-bottom: 0.25vw;
  color: #fff;
  margin-top: 1em;
  @media (max-width: 900px) {
    font-size: 2.5vw;
    font-weight: bold;
  }
`;

export const PageDescription = styled.p`
  font-size: 1vw;
  opacity: 0.8;
  font-weight: lighter;
  @media (max-width: 900px) {
    font-size: 10px;
    width: 90%;

    padding: 0px 0 0 12px;
  }
`;

export const StickerRow = styled.div`
  display: flex;

  > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export const PageHalf = styled.div`
  flex: 1;

  :last-child {
    display: flex;
    flex: 1;
    align-items: center;
    padding-bottom: 5vw;
  }
`;
