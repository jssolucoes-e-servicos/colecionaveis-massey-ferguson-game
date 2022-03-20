import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 25px !important;
  width: 100%;
  background-image: url(${({ background }) => background});
  background-size: 100% 100%;
`;

export const PageHeader = styled.div`
  /* div central Album */
  /* background-color: blue; */
  width: 90%;
  margin-left: 5%;
  /* height: 95%; */
`;

export const PageTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 2vw;
  line-height: 2.55vw;
  margin-bottom: 0.25vw;
  color: #fff;
`;
export const StickerTitlePage = styled.div`
  margin-top: -10px;
  margin-bottom: 10px;
  width: 100%;
  height: 20px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitlePaget = styled.text`
  margin: 0;
  font-size: 0.7vw;
  margin-bottom: 5px;
  font-weight: bold;
  color: #fff;
  opacity: 0.3;
`;
export const PageDescription = styled.p`
  font-size: 0.7vw;
  opacity: 0.8;
  font-weight: bold;
  font-family: Roboto;
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
