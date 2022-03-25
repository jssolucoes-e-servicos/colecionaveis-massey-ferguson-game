import React from "react";
import AssetsDataPage from "./page12.json";
import AssetsData from "@/services/data.json";
import { Boxs, PPDescription } from "./styles";
import {
  PageContainer,
  PageHeaderMobile,
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
    "175 anos se passaram e estamos mais conectados do que nunca com o produtor e com o futuro..";
  const description2 =
    "• Em 2020, O trator 8S veio mostrar que o futuro já começou.";
  return (
    //background={AssetsData.album.page3Bg}
    <PageContainer background={AssetsDataPage.pages.page12}>
      <PageHalf>
        <PageHeaderMobile
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <PageDescription style={{ maxWidth: "90%", marginTop: "4vw" }}>
            {description.substr(0, 110)}
          </PageDescription>
          <VidTxt style={{ marginTop: -10 }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                backgroundImage: `url("${AssetsData.album.page3}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                height: "40px",
                flexDirection: "column",
                padding: "5px 0px 0px 1px",
              }}
            >
              {/* <PageTitle>{title}</PageTitle> */}

              <PPDescription
                style={{ maxWidth: "100%", marginTop: 0, fontSize: 10 }}
              >
                {description2}
              </PPDescription>
            </div>
          </VidTxt>
          {/* <VidTxt>
            <PageTitle>{title}</PageTitle>
            <PageDescription style={{ maxWidth: "90%", marginTop: "1vw" }}>
              {description.substr(0, 110)}
            </PageDescription>
          </VidTxt> */}
          <Boxs style={{ marginTop: 0 }}>
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
          <Boxs style={{ marginTop: 0 }}>
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
