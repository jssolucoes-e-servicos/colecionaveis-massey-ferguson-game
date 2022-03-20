import React from "react";
import AssetsDataPage from "./page17.json";
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

export default function Page16({ stickers, userStickers }) {
  const sticker51 = getSticker(51, stickers);
  const sticker52 = getSticker(52, stickers);
  const sticker53 = getSticker(53, stickers);

  if (!stickers?.length) return null;

  const title = "Aquele parceiro que mais trabalha";
  const description =
    "Entre o preparo do solo e a colheita, muita coisa acontece na safra e uma delas é certeza: o seu pulverizador vai trabalhar muito, pois essa é a máquina que mais entra na lavoura.";

  return (
    <PageContainer background={AssetsDataPage.pages.page16}>
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
                  style={{ marginLeft: 5 }}
                  sticker={sticker51}
                  title="MF 9330"
                  year={1961}
                  obtained={userStickers.includes(sticker51.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
            <Boxcards style={{ marginLeft: 10 }}>
              <Boxborder>
                <Sticker
                  title="MF 9335"
                  style={{ marginLeft: 5 }}
                  sticker={sticker52}
                  year={1961}
                  obtained={userStickers.includes(sticker52.id)}
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
                  sticker={sticker53}
                  title="MF 9350 Dry"
                  year={1961}
                  obtained={userStickers.includes(sticker53.id)}
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
