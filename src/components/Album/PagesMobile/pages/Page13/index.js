import React from "react";
import AssetsDataPage from "./page13.json";
import { BoxxT, Boxcards, Boxborder, Boxs } from "./styles";
import {
  PageContainer,
  PageHeaderMobile,
  PageTitle,
  PageDescription,
  PageHalf,
} from "../styles";

import { Sticker as StickerBase, getSticker } from "../../index";

import { StickerDescription, VidTxt } from "../Page1/styles";

export default function Page12({ stickers, userStickers }) {
  const sticker40 = getSticker(40, stickers);
  const sticker41 = getSticker(41, stickers);
  const sticker42 = getSticker(42, stickers);

  if (!stickers?.length) return null;

  const title = "Se separados são parceiros, imagina juntos";
  const description =
    "O trabalho é melhor com a parceria certa. E temos uma dupla que vai te fazer produzir muito mais.";

  return (
    <PageContainer background={AssetsDataPage.pages.page12}>
      <PageHalf>
        <PageHeaderMobile
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <VidTxt>
            <PageTitle style={{ marginTop: "4vw" }}>{title}</PageTitle>
            <PageDescription style={{ maxWidth: "90%", marginTop: "1vw" }}>
              {description.substr(0, 110)}
            </PageDescription>
          </VidTxt>

          <BoxxT>
            <Boxcards>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 5 }}
                  sticker={sticker40}
                  title="MF 7720 Dyna-6 + Enfardadora MF 2270 XD"
                  year={1961}
                  obtained={userStickers.includes(sticker40.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
            <Boxcards style={{ marginLeft: 10 }}>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 5 }}
                  title="MF 5700 + Plantadeira MF 600"
                  sticker={sticker41}
                  year={1961}
                  obtained={userStickers.includes(sticker41.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
          </BoxxT>
          <BoxxT>
            <Boxcards>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 5 }}
                  sticker={sticker42}
                  year={1961}
                  title="MF 6712R + Enfardadora MF 4160V"
                  obtained={userStickers.includes(sticker42.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
          </BoxxT>
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
