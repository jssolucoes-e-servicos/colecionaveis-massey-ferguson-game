import React from "react";
import AssetsDataPage from "./page10.json";
import AssetsData from "@/services/data.json";
import { BoxxT, Boxcards, Boxborder, Boxs, PPDescription } from "./styles";
import { PageContainer, PageHeaderMobile, PageHalf } from "../styles";

import { Sticker as StickerBase, getSticker } from "../../index";

import { StickerDescription, VidTxt } from "../Page1/styles";

export default function Page10({ stickers, userStickers }) {
  const sticker33 = getSticker(33, stickers);
  const sticker34 = getSticker(34, stickers);
  const sticker35 = getSticker(35, stickers);
  const sticker36 = getSticker(36, stickers);

  if (!stickers?.length) return null;

  const description = "• Os MF 6714 e 6714 R Dyna-4 trouxeram mais tecnologia.";
  const description2 =
    "• A Série MF 7300 Dyna-3 é ideal para o trabalho pesado.";
  return (
    //background={AssetsData.album.page3Bg}
    <PageContainer background={AssetsDataPage.pages.page10}>
      <PageHalf>
        <PageHeaderMobile
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <VidTxt>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url("${AssetsData.album.page3}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                height: "60px",
                flexDirection: "column",
                padding: "10px 0px 0px 0px",
              }}
            >
              {/* <PageTitle>{title}</PageTitle> */}
              <PPDescription
                style={{
                  maxWidth: "90%",
                  marginTop: 0,
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                {description}
              </PPDescription>
              <PPDescription
                style={{
                  maxWidth: "90%",
                  marginTop: -12,
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                {description2}
              </PPDescription>
            </div>
          </VidTxt>

          <BoxxT>
            <Boxcards>
              <Boxborder>
                <Sticker
                  sticker={sticker33}
                  year={1961}
                  title="MF 6714 Dyna -4"
                  obtained={userStickers.includes(sticker33.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
            <Boxcards style={{ marginLeft: 10 }}>
              <Boxborder>
                <Sticker
                  title="MF 7318 Dyna -3"
                  sticker={sticker34}
                  year={1961}
                  obtained={userStickers.includes(sticker34.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
          </BoxxT>
          <BoxxT>
            <Boxcards>
              <Boxborder>
                <Sticker
                  sticker={sticker35}
                  year={1961}
                  title="MF 7725 Dyna-6"
                  obtained={userStickers.includes(sticker35.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
            <Boxcards style={{ marginLeft: 10 }}>
              <Boxborder>
                <Sticker
                  sticker={sticker36}
                  year={1961}
                  title="MF 6714 R Dyna-4"
                  obtained={userStickers.includes(sticker36.id)}
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
