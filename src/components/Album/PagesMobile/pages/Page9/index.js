import React from "react";
import AssetsDataPage from "./page9.json";

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

export default function Page8({ stickers, userStickers }) {
  const sticker26 = getSticker(26, stickers);
  const sticker27 = getSticker(27, stickers);
  const sticker28 = getSticker(28, stickers);
  const sticker29 = getSticker(29, stickers);

  if (!stickers?.length) return null;

  const title = "Essa família não para";
  const description =
    "As séries MF 4300 e 4400 são clássicos da Massey, aliando versatilidade, resistência e muita robustez.";

  return (
    // background={AssetsData.album.page3Bg}
    <PageContainer background={AssetsDataPage.pages.page9}>
      <PageHalf>
        <PageHeaderMobile
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <VidTxt>
            {/* <PageTitle>{title}</PageTitle>
            <PageDescription style={{ maxWidth: "98%", marginTop: "1vw" }}>
              {description.substr(0, 110)}
            </PageDescription> */}
          </VidTxt>

          <BoxxT style={{ marginTop: "0vw" }}>
            <Boxcards>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 5 }}
                  sticker={sticker26}
                  year={1961}
                  title="MF 3307"
                  obtained={userStickers.includes(sticker26.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
            <Boxcards style={{ marginLeft: 10 }}>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 5 }}
                  sticker={sticker27}
                  title="MF 5709"
                  year={1961}
                  obtained={userStickers.includes(sticker27.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
          </BoxxT>
          <BoxxT style={{ border: "solid 1px red" }}>
            <Boxcards>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 5 }}
                  sticker={sticker28}
                  title="MF 7180"
                  year={1961}
                  obtained={userStickers.includes(sticker28.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
            <Boxcards style={{ marginLeft: 10 }}>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 2 }}
                  sticker={sticker29}
                  title="MF 7415 Dyna-6"
                  year={1961}
                  obtained={userStickers.includes(sticker29.id)}
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
