import React from "react";
import AssetsDataPage from "./page18.json";
import { StickerContainerP3, BoxxT, Boxcards, Boxborder, Boxs } from "./styles";
import {
  PageContainer,
  PageHeaderMobile,
  PageTitle,
  PageDescription,
  PageHalf,
} from "../styles";

import { Sticker as StickerBase, getSticker } from "../../index";

import { StickerDescription, VidTxt } from "../Page1/styles";

export default function Page17({ stickers, userStickers }) {
  const sticker54 = getSticker(54, stickers);
  const sticker55 = getSticker(55, stickers);
  const sticker56 = getSticker(56, stickers);

  if (!stickers?.length) return null;

  const title = "Colhemos muito mais que resultados";
  const description =
    "Nos últimos 175 anos colhemos parcerias e uma revolução que se iniciou com a Massey-Harris. ";

  return (
    <PageContainer background={AssetsDataPage.pages.page18}>
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

          <BoxxT>
            <Boxcards>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 5 }}
                  sticker={sticker54}
                  title="MF 9895"
                  year={1961}
                  obtained={userStickers.includes(sticker54.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
            <Boxcards style={{ marginLeft: 10 }}>
              <Boxborder>
                <Sticker
                  title="MF 9795"
                  style={{ marginLeft: 5 }}
                  sticker={sticker55}
                  year={1961}
                  obtained={userStickers.includes(sticker55.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
          </BoxxT>
          <BoxxT>
            <Boxcards>
              <Boxborder>
                <Sticker
                  title="MF 9695"
                  style={{ marginLeft: 5 }}
                  sticker={sticker56}
                  year={1961}
                  obtained={userStickers.includes(sticker56.id)}
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
