import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  margin-top: 3;
  @media (max-width: 980px) {
    width: 100%;
    max-width: 90px;
  }
`;

export const Number = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 5px;
  right: 5px;
  background: darkred;
  width: 25px;
  min-width: 25px;
  height: 25px;
  min-height: 25px;
  border-radius: 50%;

  > span {
    font-size: 1em;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }
`;
