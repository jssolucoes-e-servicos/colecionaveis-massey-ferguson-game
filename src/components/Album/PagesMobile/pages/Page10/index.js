import React from "react";
import AssetsDataPage from "./page10.json";
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

export default function Page9({ stickers, userStickers }) {
  const sticker30 = getSticker(30, stickers);
  const sticker31 = getSticker(31, stickers);
  const sticker32 = getSticker(32, stickers);

  if (!stickers?.length) return null;

  const title = "O futuro já começou";
  const description =
    "60 anos se passaram e, de repente, a gente fez uma revolução no campo e estamos mais conectados com o futuro do que nunca. E isso, o agricultor que faz com o coração sabe bem, pois pode confiar demais nas nossas máquinas.";

  return (
    <PageContainer background={AssetsDataPage.pages.page10}>
      <PageHalf>
        <PageHeaderMobile
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <VidTxt>
            <PageTitle style={{ marginTop: "10vw" }}>{title}</PageTitle>
            <PageDescription
              style={{
                maxWidth: "90%",
                marginTop: "1vw",
                color: "#fff",
              }}
            >
              {/* {description} */}
            </PageDescription>
          </VidTxt>

          <Boxs style={{ marginTop: "10vw" }}>
            <Sticker
              multi={true}
              title="MF 6711"
              style={{ marginLeft: 3, marginTop: 20 }}
              sticker={sticker30}
              year={1961}
              obtained={userStickers.includes(sticker30.id)}
              description="Non nostrud consequat tempor amet."
            />

            <Sticker
              multi={true}
              style={{ marginTop: 20 }}
              sticker={sticker31}
              year={1961}
              obtained={userStickers.includes(sticker31.id)}
              description="Non nostrud consequat tempor amet."
            />
            <Sticker
              multi={true}
              style={{ marginTop: 20 }}
              sticker={sticker32}
              year={1961}
              obtained={userStickers.includes(sticker32.id)}
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
