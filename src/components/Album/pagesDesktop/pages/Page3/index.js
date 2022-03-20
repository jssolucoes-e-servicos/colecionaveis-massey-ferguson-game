import React from "react";
import AssetsData from "@/services/data.json";
import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,
  PageHalf,
  StickerTitlePage,
  TitlePaget,
} from "@/components/Album/pagesDesktop/pages/styles";

import {
  Sticker as StickerBase,
  StickersContainer,
  getSticker,
} from "@/components/Album/pagesDesktop";

export default function Page2({ stickers, userStickers }) {
  const sticker8 = getSticker(8, stickers);
  const sticker9 = getSticker(9, stickers);
  const sticker10 = getSticker(10, stickers);
  const sticker11 = getSticker(11, stickers);
  const sticker12 = getSticker(12, stickers);
  const sticker13 = getSticker(13, stickers);
  const sticker14 = getSticker(14, stickers);

  if (!stickers?.length) return null;
  const title = "O seu amor por trator começou aqui";
  const description =
    "Quem é que não se lembra do vermelhinho que fez seu coração pulsar mais forte? É bem provável que tenha sido um destes tratores que mudaram a história da agricultura brasileira e que até hoje é o mais querido de muitos masseyros e masseyras: a Linha X";

  return (
    <PageContainer
      background={AssetsData.album.page2}
      style={{ display: "flex" }}
    >
      <PageHalf>
        <PageHeader style={{ width: "90%" }}>
          <div>
            <PageTitle style={{ fontWeight: "bold", color: "#3D3D3D" }}>
              {title}
            </PageTitle>
            <PageDescription style={{ marginTop: ".8vw", color: "#444" }}>
              {description}
            </PageDescription>
          </div>
        </PageHeader>

        <StickersContainer>
          <Sticker
            containerStyle={{ marginLeft: "2vw" }}
            sticker={sticker8}
            title="35X"
            obtained={userStickers.includes(sticker8.id)}
          />

          <Sticker
            sticker={sticker9}
            title="50X"
            containerStyle={{ marginLeft: "8vw" }}
            obtained={userStickers.includes(sticker9.id)}
          />
          <Sticker
            sticker={sticker10}
            title=""
            obtained={userStickers.includes(sticker10.id)}
          />
        </StickersContainer>
      </PageHalf>

      <PageHalf>
        <Sticker
          containerStyle={{ marginLeft: "5vw" }}
          sticker={sticker11}
          title="55X"
          obtained={userStickers.includes(sticker11.id)}
        />

        <Sticker
          sticker={sticker12}
          title="95X"
          containerStyle={{ marginLeft: "1vw" }}
          obtained={userStickers.includes(sticker12.id)}
        />

        <Sticker
          sticker={sticker13}
          containerStyle={{ marginLeft: "1.5vw" }}
          obtained={userStickers.includes(sticker13.id)}
        />
        <Sticker
          sticker={sticker14}
          title=""
          obtained={userStickers.includes(sticker14.id)}
        />
      </PageHalf>
    </PageContainer>
  );
}

const Sticker = ({ style, ...props }) => {
  return (
    <StickerBase
      style={{ borderColor: "darkred", color: "#444", ...style }}
      {...props}
    />
  );
};
