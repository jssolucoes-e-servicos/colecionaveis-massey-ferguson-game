import React from "react";
import AssetsDataPage from "./page14.json";
import {
  StickerContainerP3,
  StickerContainerP3B,
  Boxs,
  StickerCard,
  StickerP3B,
  StickerContainer,
} from "./styles";
import {
  PageContainer,
  PageHeaderMobile,
  PageTitle,
  PageDescription,
  PageHalf,
} from "../styles";

import { Sticker as StickerBase, getSticker } from "../../index";

import { StickerDescription, VidTxt } from "../Page1/styles";

export default function Page13({ stickers, userStickers }) {
  const sticker43 = getSticker(43, stickers);
  const sticker44 = getSticker(44, stickers);
  const sticker45 = getSticker(45, stickers);

  if (!stickers?.length) return null;

  const title = " Há 6 décadas de olho no futuro";
  const description =
    "2021 é o ano de celebrar os 60 anos de Massey Ferguson no Brasil. São muitas histórias, parcerias e evolução de uma trajetória que começou lá atrás. Vamos relembrar?";

  return (
    <PageContainer background={AssetsDataPage.pages.page14}>
      <PageHalf>
        <PageHeaderMobile
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <VidTxt>
            {/* <PageTitle>{title}</PageTitle>
            <PageDescription style={{ maxWidth: "98%", marginTop: "1vw" }}>
              {description}
            </PageDescription> */}
          </VidTxt>
          <Boxs style={{ marginTop: "10vw" }}>
            <Sticker
              multi={true}
              style={{ marginTop: 0 }}
              a
              sticker={sticker43}
              title="MF 7700 Dyna 6 + MF 700"
              year={1961}
              obtained={userStickers.includes(sticker43.id)}
              description="Non nostrud consequat tempor amet."
            />
          </Boxs>
          <Boxs style={{ marginTop: 5 }}>
            <Sticker
              multi={true}
              style={{ marginTop: 0 }}
              sticker={sticker44}
              title="Plantadeira Momentum"
              year={1961}
              obtained={userStickers.includes(sticker44.id)}
              description="Non nostrud consequat tempor amet."
            />
            <Sticker
              multi={true}
              style={{ marginTop: 0 }}
              sticker={sticker45}
              year={1961}
              obtained={userStickers.includes(sticker45.id)}
              description="Non nostrud consequat tempor amet."
            />
          </Boxs>
        </PageHeaderMobile>
      </PageHalf>
    </PageContainer>
  );
}

const Sticker = ({
  title,
  description,
  year,
  sticker,
  style,
  multi,
  ...props
}) => {
  if (!sticker) return null;

  return (
    <Boxs style={style}>
      <StickerBase title={title} sticker={sticker} {...props} multi={multi} />
      <StickerDescription>
        {/* {year && <b>{`${year} - `}</b>}
        {description}
        {description} */}
      </StickerDescription>
    </Boxs>
  );
};
