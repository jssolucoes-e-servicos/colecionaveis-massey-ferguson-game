import React from "react";
import AssetsDataPage from "./page12.json";
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
  const sticker37 = getSticker(37, stickers);
  const sticker38 = getSticker(38, stickers);
  const sticker39 = getSticker(39, stickers);

  if (!stickers?.length) return null;

  const title = "De olho no amanhã";
  const description =
    "175 anos se passaram e, depois de fazer uma revolução no campo, estamos mais conectados com o futuro do que nunca. E isso o agricultor que faz com o coração sabe bem, pois pode confiar demais nas nossas máquinas.";

  return (
    //background={AssetsData.album.page3Bg}
    <PageContainer background={AssetsDataPage.pages.page12}>
      <PageHalf>
        <PageHeaderMobile
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <VidTxt>
            <PageTitle>{title}</PageTitle>
            <PageDescription style={{ maxWidth: "90%", marginTop: "1vw" }}>
              {description.substr(0, 110)}
            </PageDescription>
          </VidTxt>
          <Boxs style={{ marginTop: 10 }}>
            <Sticker
              multi={true}
              style={{ marginTop: 0 }}
              a
              sticker={sticker37}
              title="MF 8737"
              year={1961}
              obtained={userStickers.includes(sticker39.id)}
              description="Non nostrud consequat tempor amet."
            />
          </Boxs>
          <Boxs style={{ marginTop: 5 }}>
            <Sticker
              multi={true}
              style={{ marginTop: 0 }}
              sticker={sticker38}
              title="8S"
              year={1961}
              obtained={userStickers.includes(sticker38.id)}
              description="Non nostrud consequat tempor amet."
            />
            <Sticker
              multi={true}
              style={{ marginTop: 0 }}
              sticker={sticker39}
              year={1961}
              obtained={userStickers.includes(sticker39.id)}
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
