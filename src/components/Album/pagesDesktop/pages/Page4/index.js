import React from "react";
import AssetsData from "@/services/data.json";
import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,
} from "@/components/Album/pagesDesktop/pages/styles";

import {
  Sticker,
  getSticker,
  StickersContainer,
} from "@/components/Album/pagesDesktop";

import { HeaderContainer, InfoContainer } from "./styles";

export default function Page3({ stickers, userStickers }) {
  const sticker15 = getSticker(15, stickers);
  const sticker16 = getSticker(16, stickers);
  const sticker17 = getSticker(17, stickers);
  const sticker18 = getSticker(18, stickers);
  const sticker19 = getSticker(19, stickers);
  const sticker20 = getSticker(20, stickers);
  const sticker21 = getSticker(21, stickers);

  if (!stickers?.length) return null;

  const title = "Mais que um trator, uma família";
  const description =
    "Foi na década de 1980 que o icônico trator MF 275 conquistou o posto de mais vendido do Brasil, ou melhor dizendo, o coração dos produtores brasileiros. De lá para cá esse parceiro de todas as horas mudou, se reinventou e continua sendo o preferido de muito produtor. E é por isso que permanece fazendo parte da família brasileira.";

  return (
    <PageContainer background={AssetsData.album.Page3BgM}>
      {/* page3Bg  ,Page3BgM*/}
      <HeaderContainer>
        <PageHeader>
          <div>
            <PageTitle>{title}</PageTitle>
            <PageDescription
              style={{
                color: "#fff",
                paddingRight: 20,
                marginTop: "30px",
              }}
            >
              {description}
            </PageDescription>
          </div>
        </PageHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url("${AssetsData.album.page3}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <InfoContainer>
            <li>
              <p>
                • O <b>MF 275</b> foi lançado em 1975 e foi líder de vendas
                absoluto na categoria.
              </p>
              <p>
                • Os modelos <b>290</b> e <b>295</b> possuíam a mesma tecnologia
                do trator mais amado do Brasil.
              </p>
              <p>
                • O <b>MF 4275</b> continuou o legado como trator mais vendido
                por sua versatilidade.
              </p>
            </li>

            {/* <li>
              • Os modelos <b>290</b> e <b>295</b> possuíam a mesma tecnologia
              do trator mais amado do Brasil.
            </li>

            <li>
              • O <b>MF 4275</b> continuou o legado como trator mais vendido por
              sua versatilidade.
            </li> */}
          </InfoContainer>
        </div>
      </HeaderContainer>

      <StickersContainer style={{ marginTop: "1vw", marginLeft: "3vw" }}>
        <Sticker
          title="MF 275"
          sticker={sticker15}
          obtained={userStickers.includes(sticker15.id)}
        />
        <Sticker
          sticker={sticker16}
          title=""
          obtained={userStickers.includes(sticker16.id)}
        />

        <Sticker
          title="MF 290"
          sticker={sticker17}
          obtained={userStickers.includes(sticker17.id)}
          containerStyle={{ marginLeft: "7vw" }}
        />

        <Sticker
          title="MF 296"
          sticker={sticker18}
          obtained={userStickers.includes(sticker18.id)}
          containerStyle={{ marginLeft: "12vw" }}
        />

        <Sticker
          title="MF 680"
          sticker={sticker19}
          obtained={userStickers.includes(sticker19.id)}
          containerStyle={{ marginLeft: ".5vw" }}
        />
        <Sticker
          title="MF 4275"
          sticker={sticker20}
          obtained={userStickers.includes(sticker20.id)}
          containerStyle={{ marginLeft: ".5vw" }}
        />
        <Sticker
          title="MF 4292"
          sticker={sticker21}
          obtained={userStickers.includes(sticker21.id)}
          containerStyle={{ marginLeft: ".5vw" }}
        />
      </StickersContainer>
    </PageContainer>
  );
}
