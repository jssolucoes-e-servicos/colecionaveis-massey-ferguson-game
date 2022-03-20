import React from "react";
import AssetsData from "@/services/data.json";
import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,
  PageHalf,
} from "@/components/Album/pagesDesktop/pages/styles";

import {
  Sticker as StickerBase,
  StickersContainer,
  getSticker,
} from "@/components/Album/pagesDesktop";
import {
  HeaderContainer,
  InfoContainer,
  InfoContainerBox,
  InfoContainerBoxG,
  InfoContainerBoxTxt,
} from "./styles";
export default function Page4({ stickers, userStickers }) {
  const sticker43 = getSticker(43, stickers);
  const sticker44 = getSticker(44, stickers);
  const sticker45 = getSticker(45, stickers);
  const sticker46 = getSticker(46, stickers);
  const sticker47 = getSticker(47, stickers);
  const sticker48 = getSticker(48, stickers);

  if (!stickers?.length) return null;
  const NumberColor = "#FFF";
  const title = "Essa família não para";
  const description =
    "• As séries MF 4300 e 4400 são derivadas destes icônicos, aliando muito mais tecnologia e conforto.";

  return (
    <PageContainer
      background="https://3sdigital.com.br/videovaltra/sticksImgcdm/fundo77.png"
      style={{ display: "flex" }}
    >
      <PageHalf>
        {/* <PageHeader style={{ width: "90%" }}>
          <div>
            <PageTitle style={{ marginTop: "1vw", color: "#fff" }}>
              {title}
            </PageTitle>
          </div>
        </PageHeader> */}
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 100,
            backgroundImage: `url("${AssetsData.album.page3}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            marginTop: "1vw",
            color: "#fff",
            paddingRight: 10,
          }}
        >
          <InfoContainer>
            <p style={{ opacity: 1 }}>
              • As séries MF 4300 e 4400 são clássicos da Massey, aliando
              versatilidade, resistência e muita robustez.
            </p>
          </InfoContainer>
        </div> */}
        {/* <Sticker
                sticker={sticker43}
                title="MF 3307"
                containerStyle={{ marginLeft: "3vw" }}
                obtained={userStickers.includes(sticker43.id)}
                spanColor={NumberColor}
              /> */}
        <PageHalf style={{ marginTop: "5.5vw" }}>
          <Sticker
            sticker={sticker43}
            title="MF 7700 Dyna 6 + MF 700"
            containerStyle={{ marginLeft: "4vw", marginTop: "1vw" }}
            obtained={userStickers.includes(sticker43.id)}
            // spanColor={NumberColor}
          />
          <InfoContainerBox style={{ border: "none" }}>
            <InfoContainerBoxTxt>Plantadeira Momentum</InfoContainerBoxTxt>
            <InfoContainerBoxG>
              <Sticker
                sticker={sticker44}
                containerStyle={{ marginLeft: "4vw", marginRith: ".2vw" }}
                obtained={userStickers.includes(sticker44.id)}
              />
              <Sticker
                sticker={sticker45}
                obtained={userStickers.includes(sticker45.id)}
              />
            </InfoContainerBoxG>
          </InfoContainerBox>
        </PageHalf>
      </PageHalf>

      <PageHalf style={{ marginTop: "5.5vw" }}>
        <Sticker
          sticker={sticker46}
          title="MF 4300 + Grade Niveladora"
          containerStyle={{ marginLeft: "4vw", marginTop: "1.5vw" }}
          obtained={userStickers.includes(sticker46.id)}
          // spanColor={NumberColor}
        />
        <InfoContainerBox style={{ border: "none" }}>
          <InfoContainerBoxTxt>Plantadeira Momentum</InfoContainerBoxTxt>
          <InfoContainerBoxG>
            <Sticker
              sticker={sticker47}
              containerStyle={{ marginLeft: "5vw", marginRith: ".2vw" }}
              obtained={userStickers.includes(sticker47.id)}
            />
            <Sticker
              sticker={sticker48}
              obtained={userStickers.includes(sticker48.id)}
            />
          </InfoContainerBoxG>
        </InfoContainerBox>
      </PageHalf>
    </PageContainer>
  );
}

const Sticker = ({ style, ...props }) => {
  return <StickerBase style={{ color: "#FFF", ...style }} {...props} />;
};
