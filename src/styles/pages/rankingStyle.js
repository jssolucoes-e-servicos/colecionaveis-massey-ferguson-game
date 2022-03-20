import styled from "styled-components";

// export const Model = styled.section`

// `;
export const ContainerRank = styled.div`
  overflow: auto;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: #000;
  position: relative;
  background-color: #efefef;
  margin: 0%;
  padding: 0;
  background-image: url("https://game-stickers.herokuapp.com/static/media/bgd.2eb73c93.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 900px) {
    overflow-y: auto;
  }
`;
export const RankA = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Rankt = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 70px;
  background-color: #5a1317;
`;
export const Ranktxt = styled.text`
  font-size: 1.5em;
  color: #fff; //#3d3d3d
  font-weight: 900;
  font-family: "https://fonts.googleapis.com/css?family=Lato:400,700";
  padding: 0 0 0 20px;
  font-weight: 600;
`;

export const RanktPlayeA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 65%;
  height: 50px;
  margin-top: 50px;
  background-color: #7e7e7e;
  border-radius: 30px;
  box-shadow: 0px 0px 2px 0px #333;
  transition: box-shadow 0.1s ease-out 0s;
`;
export const RanktxtPlayerB = styled.text`
  font-size: 2em;
  color: #fff;
  font-weight: 900;
  font-family: "Roboto";

  font-weight: bold;
`;

export const Rankform = styled.div`
  width: 100%;
  max-width: 60%;
  height: auto;
  /* min-height: 100vh; */
  /* background-color: #fff; */
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1100px) {
    max-width: 95%;
  }
`;
export const RankingFormB = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 50px;
  background-color: #fff;
  box-shadow: 0 0 0.2em #333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 10px;
  border-radius: 10px;
  /* background-color: #c41230; */
  /* background: linear-gradient(180deg, #f41622, #8b0008); */
`;
export const RankingImageBg = styled.div`
  width: 100%;
  max-width: 1px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  border-right: solid 1px #ccc;
  /* box-shadow: -1px 1px 35px 4px #f00000; */
  transition: box-shadow 0.1s ease-out 0s;

  margin: 10px;
`;
export const RankingImagePlayer = styled.img`
  width: 100%;
  max-width: 25px;
`;

export const RankingTxtPonto = styled.text`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 1.5em;
  padding: 15px;
  width: 100%;
  max-width: 10%;
  /* background: linear-gradient(180deg, #f41622, #8b0003); */
`;
export const RankingFormTxt = styled.text`
  color: #ccc;
  font-size: 1em;
  padding: 15px;
  width: 100%;
  max-width: 40%;
  /* background: linear-gradient(180deg, #f41622, #8b0003); */
  @media (max-width: 900px) {
    font-size: 0.7em;
  }
`;
export const RankingFormTxtHrs = styled.text`
  color: #ccc;
  font-size: 0.7em;
  padding: 15px;
  width: 100%;
  max-width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RankingFormIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  /* width: 100%;
  max-width: 180px; */
  padding: 1px 10px 0px 12px;
  background-color: transparent;
  border: solid 3px #9b190d;
  box-shadow: 2px #9b190d;
  border-radius: 5px;
  height: 100%;
  min-height: 40px;
  margin: 0;
  font-size: 1.2em;
  :hover {
    box-shadow: -1px 1px 25px 4px #f00000;
    transition: box-shadow 0.1s ease-out 0s;
  }
  @media (max-width: 1000px) {
    font-size: 0.8em;
  }
`;
