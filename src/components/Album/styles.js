import styled from "styled-components";
// tamanho da pagina figuras
export const Wrapper = styled.div`
  /* position: relative;
  margin: 20px auto;
  width: 50vw;
  height: 29vw;
  min-height: 29vw;
  color: white; */
  /* ORIGINAL VINICUS */
  position: relative;
  margin: 20px auto;
  width: 70vw;
  height: 32vw;
  // height: 75vw;
  min-height: 29vw;
  /* width: 95%;
  height: 450px;
  min-height: 90vw;
  color: white; */
  @media (max-width: 1200px) {
    width: 98vw;
    height: 100%;
    min-height: 100vw;
    color: white;
  }
  @media (max-width: 800px) {
    width: 97vw;
    height: 100%;
    min-height: 100vw;
  }
  @media (max-width: 550px) {
    width: 97vw;
    height: 100%;
    min-height: 110vw;
  }
`;

export const Controllers = styled.button`
  font-size: 24px;
  cursor: pointer;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 50px;
  opacity: 0.9;
  font-size: 50px;
  color: #888888;
  font-weight: 900;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background: transparent;
  :last-child {
    right: -70px;
    bottom: 50%;
  }
  :hover {
    opacity: 0.2;
    color: #333;
  }
  :first-child {
    left: -70px;
    bottom: 50%;
  }
  :hover {
    opacity: 0.5;
    color: black;
  }
  @media (max-width: 900px) {
    :last-child {
      width: 30px;
      height: 30px;
      right: 20px;
      color: red;
      font-weight: bold;
      /* background-color: red; */
    }
    :first-child {
      width: 30px;
      height: 30px;
      left: 20px;
      color: red;
      font-weight: bold;
    }
  }
`;
export const PagesTxt = styled.div`
  position: absolute;
  z-index: 8;
  width: 100%;
  max-width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  opacity: 0.8;
  font-size: 0.7vw;
  bottom: 5px;
  @media (max-width: 1100px) {
    font-size: 10px;
    color: #d3c8c8;
    font-weight: bold;
    opacity: 1;
    justify-content: flex-end;
    align-items: flex-end;
    max-width: 90%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  overflow: hidden;
  background: white;
  display: flex;
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
    max-width: 100%;
    grid-template-columns: repeat(auto-fill, 85%);
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  min-width: 100%;
  display: flex;
`;
