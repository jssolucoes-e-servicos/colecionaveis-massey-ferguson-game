import React from "react";
import AssetsDataPage from "@/services/dataPage.json";
import AssetsData from "@/services/data.json";
import {
  StickerContainerP3,
  BoxxT,
  Boxcards,
  Boxborder,
  Boxs,
  PPDescription,
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

export default function Page6({ stickers, userStickers }) {
  const sticker18 = getSticker(18, stickers);
  const sticker19 = getSticker(19, stickers);
  const sticker20 = getSticker(20, stickers);
  const sticker21 = getSticker(21, stickers);

  if (!stickers?.length) return null;

  const title = "Mais que um trator, uma família";
  const description =
    "• O MF 275 foi lançado em 1975 e foi líder de vendas absoluto na categoria.";
  const description2 =
    "• Os modelos 290 e 295 possuíam a mesma tecnologia do trator mais amado do Brasil.";
  const description3 =
    "• O MF 4275 continuou o legado como trator mais vendido por sua versatilidade.";

  return (
    <PageContainer background={AssetsDataPage.pages.pages7}>
      {/* background={AssetsData.album.Page3BgM} */}
      <PageHalf>
        <PageHeaderMobile
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {/* <PageTitle>{title}</PageTitle> */}
          {/* <PageDescription style={{ maxWidth: "90%", marginTop: "1vw" }}>
              {description}
            </PageDescription> */}
          <VidTxt>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "start",
                alignItems: "start",
                backgroundImage: `url("${AssetsData.album.page3}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                height: "80px",
                flexDirection: "column",
                padding: "10px 0px 0px 22px",
              }}
            >
              {/* <PageTitle>{title}</PageTitle> */}
              <PPDescription
                style={{ maxWidth: "90%", marginTop: 5, fontSize: 8 }}
              >
                {description}
              </PPDescription>
              <PPDescription
                style={{ maxWidth: "90%", marginTop: -12, fontSize: 8 }}
              >
                {description2}
              </PPDescription>
            </div>
          </VidTxt>

          <BoxxT style={{ marginTop: -20 }}>
            <Boxcards>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 5 }}
                  sticker={sticker18}
                  title="MF 296"
                  year={1961}
                  obtained={userStickers.includes(sticker18.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
            <Boxcards style={{ marginLeft: 10 }}>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 5 }}
                  sticker={sticker19}
                  title="MF 680"
                  year={1961}
                  obtained={userStickers.includes(sticker19.id)}
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
                  sticker={sticker20}
                  title="MF 4275"
                  year={1961}
                  obtained={userStickers.includes(sticker20.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
            <Boxcards style={{ marginLeft: 10 }}>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 5 }}
                  sticker={sticker21}
                  title="MF 4292"
                  year={1961}
                  obtained={userStickers.includes(sticker21.id)}
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
