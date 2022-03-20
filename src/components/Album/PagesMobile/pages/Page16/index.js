import React from "react";
import AssetsDataPage from "./page16.json";
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

export default function Page15({ stickers, userStickers }) {
  const sticker49 = getSticker(49, stickers);
  const sticker50 = getSticker(50, stickers);

  if (!stickers?.length) return null;

  const title = "Aquele parceiro que mais trabalha";
  const description =
    "Entre o preparo do solo e a colheita, muita coisa acontece na safra e uma delas é certeza: o seu pulverizador vai trabalhar muito, pois essa é a máquina que mais entra na lavoura.";

  return (
    <PageContainer background={AssetsDataPage.pages.page16}>
      <PageHalf>
        <PageHeaderMobile
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <VidTxt>
            <PageTitle>{title}</PageTitle>
            <PageDescription style={{ maxWidth: "90%", marginTop: "1vw" }}>
              {description}
            </PageDescription>
          </VidTxt>

          <Boxs style={{ marginTop: 20 }}>
            <Sticker
              multi={true}
              style={{ marginTop: 0 }}
              sticker={sticker49}
              title="MF 8225"
              year={1961}
              obtained={userStickers.includes(sticker49.id)}
              description="Non nostrud consequat tempor amet."
            />
            <Sticker
              multi={true}
              style={{ marginTop: 0 }}
              sticker={sticker50}
              year={1961}
              obtained={userStickers.includes(sticker50.id)}
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
        {description}*/}
        {description}
      </StickerDescription>
    </Boxs>
  );
};
