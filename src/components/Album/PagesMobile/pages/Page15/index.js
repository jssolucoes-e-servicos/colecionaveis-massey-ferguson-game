import React from "react";
import AssetsDataPage from "./page15.json";
import { Boxs } from "./styles";
import {
  PageContainer,
  PageHeaderMobile,
  PageTitle,
  PageDescription,
  PageHalf,
} from "../styles";

import { Sticker as StickerBase, getSticker } from "../../index";

import { StickerDescription, VidTxt } from "../Page1/styles";

export default function Page14({ stickers, userStickers }) {
  const sticker46 = getSticker(46, stickers);
  const sticker47 = getSticker(47, stickers);
  const sticker48 = getSticker(48, stickers);

  if (!stickers?.length) return null;

  const title = " Há 6 décadas de olho no futuro";
  const description =
    "2021 é o ano de celebrar os 60 anos de Massey Ferguson no Brasil. São muitas histórias, parcerias e evolução de uma trajetória que começou lá atrás. Vamos relembrar?";

  return (
    <PageContainer background={AssetsDataPage.pages.page15}>
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
              sticker={sticker46}
              title="MF 4300 + Grade Niveladora"
              year={1961}
              obtained={userStickers.includes(sticker46.id)}
              description="Non nostrud consequat tempor amet."
            />
          </Boxs>
          <Boxs style={{ marginTop: 5 }}>
            <Sticker
              multi={true}
              style={{ marginTop: 0 }}
              title="MF 4400 + Plantadeira 100"
              sticker={sticker47}
              year={1961}
              obtained={userStickers.includes(sticker47.id)}
              description="Non nostrud consequat tempor amet."
            />
            <Sticker
              multi={true}
              style={{ marginTop: 0 }}
              sticker={sticker48}
              year={1961}
              obtained={userStickers.includes(sticker48.id)}
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
