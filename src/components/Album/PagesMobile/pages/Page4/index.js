import React from "react";
import AssetsData from "./page3.json";

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

export default function Page3({ stickers, userStickers }) {
  const sticker8 = getSticker(8, stickers);
  const sticker9 = getSticker(9, stickers);
  const sticker10 = getSticker(10, stickers);

  if (!stickers?.length) return null;

  const title = "O seu amor por trator começou aqui";
  const description =
    "Com os vermelhinhos que fizeram o coração de muitos pulsar mais forte: da linha X";

  return (
    //  background={AssetsData.album.page2}
    //background="https://colecionaveismassey.com.br/assets/images/bgs/3.png"
    <PageContainer background={AssetsData.pages.page4}>
      <PageHalf>
        <PageHeaderMobile
          style={{
            justifyContent: "center",
            alignItems: "center",
            color: "#333",
          }}
        >
          <VidTxt>
            <PageTitle style={{ color: "#333", marginTop: "5vw" }}>
              {title}
            </PageTitle>
            <PageDescription
              style={{
                maxWidth: "90%",
                // marginTop: "1vw",
              }}
            >
              {description.substr(0, 110)}
            </PageDescription>
          </VidTxt>

          <BoxxT>
            <Boxcards>
              <Boxborder>
                <Sticker
                  style={{ paddingBottom: 0 }}
                  title="35X"
                  sticker={sticker8}
                  year={1961}
                  obtained={userStickers.includes(sticker8.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
          </BoxxT>
          <Boxs style={{ paddingBottom: 0 }}>
            <Sticker
              title="50X"
              multi={true}
              style={{ marginLeft: 3, marginTop: 5 }}
              sticker={sticker9}
              year={1961}
              obtained={userStickers.includes(sticker9.id)}
              description="Non nostrud consequat tempor amet."
            />

            <Sticker
              title=""
              multi={true}
              style={{ marginTop: 5 }}
              sticker={sticker10}
              year={1961}
              obtained={userStickers.includes(sticker10.id)}
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
        {/* {description} */}
      </StickerDescription>
    </Boxs>
  );
};
