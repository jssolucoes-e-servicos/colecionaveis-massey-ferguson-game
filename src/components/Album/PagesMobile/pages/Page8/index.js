import React from "react";
import AssetsDataPage from "./page8.json";
import AssetsData from "@/services/data.json";
import { BoxxT, Boxcards, Boxborder, Boxs, PPDescription } from "./styles";
import {
  PageContainer,
  PageHeaderMobile,
  PageTitle,
  PageDescription,
  PageHalf,
} from "../styles";

import { Sticker as StickerBase, getSticker } from "../../index";

import { StickerDescription, VidTxt } from "../Page1/styles";

export default function Page7({ stickers, userStickers }) {
  const sticker22 = getSticker(22, stickers);
  const sticker23 = getSticker(23, stickers);
  const sticker24 = getSticker(24, stickers);
  const sticker25 = getSticker(25, stickers);

  if (!stickers?.length) return null;

  const title = "Essa família não para";
  const description =
    "• MF 4300 e 4400 são clássicos, versáteis e resistentes.";

  return (
    //background={AssetsDataPage.pages.pages7}
    <PageContainer background={AssetsDataPage.pages.page8}>
      <PageHalf>
        <PageHeaderMobile
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <VidTxt>
            <PageTitle style={{ fontSize: 7, marginTop: "4vw" }}>
              {title}
            </PageTitle>
            {/* <PageDescription style={{ maxWidth: "90%", marginTop: "0.5vw" }}>
              {description.substr(0, 110)}
            </PageDescription> */}

            <div
              style={{
                marginTop: 5,
                width: "100%",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url("${AssetsData.album.page3}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                height: "20vw",
                flexDirection: "column",
                padding: "8px 0px 0px 1px",
              }}
            >
              {/* <PageTitle>{title}</PageTitle> */}
              <PPDescription
                style={{ maxWidth: "100%", marginTop: 0, fontSize: 10 }}
              >
                {description}
              </PPDescription>
            </div>
          </VidTxt>

          <BoxxT style={{ marginTop: "-2vw" }}>
            <Boxcards>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 5 }}
                  sticker={sticker22}
                  title="MF 4307"
                  year={1961}
                  obtained={userStickers.includes(sticker22.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
            <Boxcards style={{ marginLeft: 10 }}>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 5 }}
                  sticker={sticker23}
                  title="MF 4408 S Cabinado"
                  year={1961}
                  obtained={userStickers.includes(sticker23.id)}
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
                  sticker={sticker24}
                  year={1961}
                  title="MF 4408 Plataformado"
                  obtained={userStickers.includes(sticker24.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
            <Boxcards style={{ marginLeft: 10 }}>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 5 }}
                  sticker={sticker25}
                  year={1961}
                  title="MF 4707 Cabinado"
                  obtained={userStickers.includes(sticker25.id)}
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
