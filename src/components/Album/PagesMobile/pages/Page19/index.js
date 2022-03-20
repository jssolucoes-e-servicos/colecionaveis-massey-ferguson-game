import React from "react";
import AssetsDataPage from "./page19.json";
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

export default function Page18({ stickers, userStickers }) {
  const sticker57 = getSticker(57, stickers);
  const sticker58 = getSticker(58, stickers);
  const sticker59 = getSticker(59, stickers);
  const sticker60 = getSticker(60, stickers);

  if (!stickers?.length) return null;

  const title = "Colhemos muito mais que resultados";
  const description =
    "Isso porque nos últimos 175 anos colhemos parcerias, trabalho duro e uma revolução que se iniciou lá atrás, quando a Massey-Harris começou um legado. Hoje, nossas colheitadeiras continuam levando para o campo muita tecnologia e eficiência.";

  return (
    <PageContainer background={AssetsDataPage.pages.page19}>
      <PageHalf>
        <PageHeaderMobile
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <VidTxt>
            {/* <PageTitle>{title}</PageTitle>
            <PageDescription style={{ maxWidth: "90%", marginTop: "1vw" }}>
              {description.substr(0, 110)}
            </PageDescription> */}
          </VidTxt>
          <BoxxT style={{ marginTop: "8vw" }}>
            <Boxcards>
              <Boxborder>
                <Sticker
                  title="MF 4690"
                  sticker={sticker57}
                  year={1961}
                  obtained={userStickers.includes(sticker57.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
            <Boxcards>
              <Boxborder>
                <Sticker
                  sticker={sticker58}
                  title="MF 5690"
                  year={1961}
                  obtained={userStickers.includes(sticker58.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
          </BoxxT>
          <Boxs>
            <Sticker
              multi={true}
              style={{ marginLeft: 3 }}
              sticker={sticker59}
              title="MF 6690"
              year={1961}
              obtained={userStickers.includes(sticker59.id)}
              description="Non nostrud consequat tempor amet."
            />

            <Sticker
              multi={true}
              sticker={sticker60}
              year={1961}
              obtained={userStickers.includes(sticker60.id)}
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
