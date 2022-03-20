import React from "react";

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

export default function Page8({ stickers, userStickers }) {
  const sticker49 = getSticker(49, stickers);
  const sticker50 = getSticker(50, stickers);
  const sticker51 = getSticker(51, stickers);
  const sticker52 = getSticker(52, stickers);
  const sticker53 = getSticker(53, stickers);

  if (!stickers?.length) return null;

  const title = "Aquele parceiro que mais trabalha";
  const description =
    "Entre o preparo do solo e a colheita, muita coisa acontece na safra e uma delas é certeza: o seu pulverizador vai trabalhar muito, pois essa é a máquina que mais entra na lavoura.";

  return (
    <PageContainer background="https://3sdigital.com.br/videovaltra/sticksImgcdm/fundo88.png">
      <HeaderContainer>
        <PageHeader>
          <div>
            <PageTitle>{title}</PageTitle>
            <PageDescription
              style={{ maxWidth: "80%", marginTop: ".8vw", color: "#fff" }}
            >
              {description}
            </PageDescription>
          </div>
        </PageHeader>

        <div>
          <InfoContainer>
            {/* <li>
              • O <b>6</b> foi lançado em 1975 e foi líder de vendas absoluto na
              categoria.
            </li>

            <li>
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

      <StickersContainer style={{ marginTop: "1vw", marginLeft: "2vw" }}>
        <Sticker
          title="MF 8225"
          sticker={sticker49}
          obtained={userStickers.includes(sticker49.id)}
          containerStyle={{ marginLeft: "1.5vw", marginTop: "2vw" }}
        />
        <Sticker
          sticker={sticker50}
          obtained={userStickers.includes(sticker50.id)}
          containerStyle={{ marginTop: "2vw" }}
        />

        <Sticker
          title="MF 9330"
          sticker={sticker51}
          obtained={userStickers.includes(sticker51.id)}
          containerStyle={{ marginLeft: "25vw", marginTop: "-5vw" }}
        />

        <Sticker
          title="MF 9335"
          sticker={sticker52}
          obtained={userStickers.includes(sticker52.id)}
          containerStyle={{ marginLeft: "2vw", marginTop: "-5vw" }}
        />

        <Sticker
          title="MF 9350 Dry"
          sticker={sticker53}
          obtained={userStickers.includes(sticker53.id)}
          containerStyle={{ marginLeft: "2vw", marginTop: "-5vw" }}
        />
      </StickersContainer>
    </PageContainer>
  );
}
