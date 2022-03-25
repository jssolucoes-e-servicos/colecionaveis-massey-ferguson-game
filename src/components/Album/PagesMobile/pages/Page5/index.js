import React from "react";
import AssetsData from "@/services/data.json";

import { BoxxT, Boxcards, Boxborder, Boxs } from "./styles";
import {
  PageContainer,
  PageHeaderMobile,
  PageDescription,
  PageHalf,
} from "../styles";

import { Sticker as StickerBase, getSticker } from "../../index";

import { StickerDescription, VidTxt } from "../Page1/styles";

export default function Page4({ stickers, userStickers }) {
  const sticker11 = getSticker(11, stickers);
  const sticker12 = getSticker(12, stickers);
  const sticker13 = getSticker(13, stickers);
  const sticker14 = getSticker(14, stickers);

  if (!stickers?.length) return null;

  return (
    <PageContainer background={AssetsData.album.page2}>
      {/* background={AssetsData.album.page2} */}
      <PageHalf>
        <PageHeaderMobile
          style={{
            justifyContent: "center",
            alignItems: "center",
            color: "#333",
          }}
        >
          <VidTxt>
            {/* <PageTitle style={{ color: "#333" }}>{title}</PageTitle> */}
            <PageDescription
              style={{ maxWidth: "90%", marginTop: "1vw", color: "#333" }}
            >
              {/* {description.substr(0, 110)} */}
            </PageDescription>
          </VidTxt>

          <BoxxT style={{ marginTop: "10vw" }}>
            <Boxcards>
              <Boxborder>
                <Sticker
                  // style={{ marginLeft: 5 }}
                  sticker={sticker11}
                  title="55X"
                  year={1961}
                  obtained={userStickers.includes(sticker11.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
            <Boxcards style={{ marginLeft: 5 }}>
              <Boxborder>
                <Sticker
                  // style={{ marginLeft: 5 }}
                  sticker={sticker12}
                  title="95X"
                  year={1961}
                  obtained={userStickers.includes(sticker12.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
          </BoxxT>
          <Boxs>
            <Sticker
              multi={true}
              style={{ marginTop: 5 }}
              sticker={sticker13}
              year={1961}
              obtained={userStickers.includes(sticker13.id)}
              description="Non nostrud consequat tempor amet."
            />

            <Sticker
              multi={true}
              style={{ marginTop: 5 }}
              sticker={sticker14}
              year={1961}
              obtained={userStickers.includes(sticker14.id)}
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
