import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background-color: #efefef;
  overflow: auto;

  @media (min-width: 1100px) {
  }
`;

export const ContainerPlay = styled.div`
  width: 100%;
  max-width: 98%;
  height: auto;
  margin-top: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  /* flex-wrap: wrap; */

  @media (max-width: 980px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Playdas = styled.div`
  width: 100%;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: red; */

  @media (max-width: 980px) {
    max-width: 100%;
  }
`;
export const PlayA = styled.div`
  width: 100%;
  max-width: 100%;
  background-color: #fff;
  /* background-color: #ccc; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 980px) {
    max-width: 100%;
  }
`;

export const PlayBlocoTXT = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: left;
  padding: 0px 40px 0px 50px;
  margin: 5px;
  background-color: #fff;
  > h2 {
    font-weight: bold;
    font-family: "Roboto";
    font-size: 14px;
    color: #333;
  }
  > h1 {
    font-weight: bold;
    font-family: system-ui;
    font-size: 30px;
    color: #333;
  }
  @media (max-width: 980px) {
    max-width: 100%;
    padding: 0px 5px 0px 5px;
    > h1 {
      max-width: 100%;
      text-align: center;
      font-size: 35px;
    }
  }
`;
export const PlayTXT = styled.p`
  font-size: 13px;
  font-family: "Roboto", sans-serif;
  color: #777777;
  width: 100%;
  max-width: 100%;
  padding: 0px 10px 0px 0px;
  @media (min-width: 1100px) {
  }
`;
export const PlayImage = styled.img`
  width: 100%;
  max-width: 100px;
`;
export const PlayImaageM = styled.img`
  width: 100%;
  max-width: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
