import React from "react";
import AssetsData from "@/services/data.json";
import AssetsDataPage from "@/services/dataPage.json";
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

export default function Page5({ stickers, userStickers }) {
  const sticker15 = getSticker(15, stickers);
  const sticker16 = getSticker(16, stickers);
  const sticker17 = getSticker(17, stickers);

  if (!stickers?.length) return null;

  const title = "Mais que um trator, uma família";
  const description =
    "Foi na década de 1980 que o icônico trator MF 275 conquistou o posto de mais vendido do Brasil, ou melhor dizendo, o coração dos produtores brasileiros. De lá para cá esse parceiro de todas as horas mudou, se reinventou e continua sendo o preferido de muito produtor. E é por isso que permanece fazendo parte da família brasileira.";

  return (
    //background={AssetsData.album.page3Bg}
    <PageContainer background={AssetsDataPage.pages.pages7}>
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
          <Boxs>
            <Sticker
              multi={true}
              style={{ marginTop: 5 }}
              sticker={sticker15}
              title="MF 250"
              year={1961}
              obtained={userStickers.includes(sticker15.id)}
              description="Non nostrud consequat tempor amet."
            />

            <Sticker
              multi={true}
              style={{ marginTop: 5 }}
              sticker={sticker16}
              year={1961}
              obtained={userStickers.includes(sticker16.id)}
              description="Non nostrud consequat tempor amet."
            />
          </Boxs>
          <BoxxT>
            <Boxcards style={{ marginTop: -40 }}>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 5 }}
                  sticker={sticker17}
                  title="MF 290"
                  year={1961}
                  obtained={userStickers.includes(sticker17.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards>
            {/* <Boxcards style={{ marginLeft: 10 }}>
              <Boxborder>
                <Sticker
                  style={{ marginLeft: 5 }}
                  sticker={sticker16}
                  year={1961}
                  obtained={userStickers.includes(sticker16.id)}
                  description="Non nostrud consequat tempor amet."
                />
              </Boxborder>
            </Boxcards> */}
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
