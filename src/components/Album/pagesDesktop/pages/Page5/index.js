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
  IconPin,
} from "./styles";
import { IoLocation } from "react-icons/io5";
export default function Page4({ stickers, userStickers }) {
  const sticker22 = getSticker(22, stickers);
  const sticker23 = getSticker(23, stickers);
  const sticker24 = getSticker(24, stickers);
  const sticker25 = getSticker(25, stickers);
  const sticker26 = getSticker(26, stickers);
  const sticker27 = getSticker(27, stickers);
  const sticker28 = getSticker(28, stickers);
  const sticker29 = getSticker(29, stickers);

  if (!stickers?.length) return null;
  const NumberColor = "#FFF";
  const title = "Essa família não para";
  const description =
    "• As séries MF 4300 e 4400 são derivadas destes icônicos, aliando muito mais tecnologia e conforto.";

  return (
    <PageContainer
      background="https://3sdigital.com.br/videovaltra/sticksImgcdm/fundo_7-8.png"
      //fundo antigo page2 AssetsData.album.Page3BgM
      style={{ display: "flex" }}
    >
      <PageHalf>
        <PageHeader style={{ width: "90%" }}>
          <div>
            <PageTitle style={{ marginTop: "1vw", color: "#fff" }}>
              {title}
            </PageTitle>
            {/* <PageDescription style={{ marginTop: ".8vw", color: "#fff" }}>
              {description}
            </PageDescription> */}
          </div>
        </PageHeader>
        <div
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
            <p style={{ opacity: 1, fontFamily: "sans-serif" }}>
              • As séries MF 4300 e 4400 são clássicos da Massey, aliando
              versatilidade, resistência e muita robustez.
            </p>
          </InfoContainer>
        </div>

        <StickersContainer style={{ marginTop: "3vw" }}>
          <Sticker
            containerStyle={{ marginLeft: "1.5vw" }}
            sticker={sticker22}
            title="MF 4307 Massey Ferguson"
            obtained={userStickers.includes(sticker22.id)}
          />

          <Sticker
            sticker={sticker23}
            title="MF 4408 S Cabinado Massey"
            containerStyle={{ marginLeft: "1vw" }}
            obtained={userStickers.includes(sticker23.id)}
          />

          <Sticker
            containerStyle={{ marginLeft: "1vw" }}
            sticker={sticker24}
            title="MF 4408 Plataformado"
            obtained={userStickers.includes(sticker24.id)}
          />
          <Sticker
            containerStyle={{ marginLeft: "1vw" }}
            sticker={sticker25}
            title="MF 4707 Cabinado Massey"
            obtained={userStickers.includes(sticker25.id)}
          />
        </StickersContainer>
      </PageHalf>

      <PageHalf style={{ paddingBottom: "5vw" }}>
        <Sticker
          sticker={sticker26}
          title="MF 3307"
          containerStyle={{ marginLeft: "5vw" }}
          obtained={userStickers.includes(sticker26.id)}
          // spanColor={NumberColor}
        />

        <Sticker
          sticker={sticker27}
          title="MF 5709"
          containerStyle={{ marginLeft: "1vw" }}
          obtained={userStickers.includes(sticker27.id)}
        />
        <InfoContainerBox>
          <InfoContainerBoxG>
            <Sticker
              containerStyle={{ marginLeft: ".2vw", marginRith: ".2vw" }}
              sticker={sticker28}
              title="MF 7180"
              obtained={userStickers.includes(sticker28.id)}
            />
            <Sticker
              containerStyle={{ marginLeft: ".4vw" }}
              sticker={sticker29}
              title="MF 7415 Dyna-6"
              obtained={userStickers.includes(sticker29.id)}
            />
          </InfoContainerBoxG>
          <InfoContainerBoxTxt>
            <IconPin>
              <IoLocation size={18} color={"#fff"} style={{ marginLeft: 10 }} />
            </IconPin>
            SE LEMBRA DELES?
          </InfoContainerBoxTxt>
        </InfoContainerBox>
      </PageHalf>
    </PageContainer>
  );
}

const Sticker = ({ style, ...props }) => {
  return <StickerBase style={{ color: "#FFF", ...style }} {...props} />;
};
