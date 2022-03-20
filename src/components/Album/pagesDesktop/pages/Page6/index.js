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

export default function Page5({ stickers, userStickers }) {
  const sticker30 = getSticker(30, stickers);
  const sticker31 = getSticker(31, stickers);
  const sticker32 = getSticker(32, stickers);
  const sticker33 = getSticker(33, stickers);
  const sticker34 = getSticker(34, stickers);
  const sticker35 = getSticker(35, stickers);
  const sticker36 = getSticker(36, stickers);

  if (!stickers?.length) return null;

  const title = "O futuro já começou";
  const description =
    "60 anos se passaram e, de repente, a gente fez uma revolução no campo e estamos mais conectados com o futuro do que nunca. E isso, o agricultor que faz com o coração sabe bem, pois pode confiar demais nas nossas máquinas.";
  return (
    <PageContainer background="https://3sdigital.com.br/videovaltra/sticksImgcdm/fundo4.png">
      <HeaderContainer>
        <PageHeader>
          <div>
            <PageTitle>{title}</PageTitle>
            <PageDescription
              style={{
                width: "85%",
                marginTop: ".8vw",
                color: "transparent",
                paddingRight: 10,
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
          <InfoContainer
            style={{
              marginTop: 16,
              color: "#fff",
              opacity: 1,
              fontFamily: "Roboto",
            }}
          >
            <li>
              <p>
                • Em 2020, os modelos MF 6714 e o MF 6714 R Dyna-4 chegaram para
                levar muita tecnologia pro campo.
              </p>
              <p>
                • A Série de tratores MF 7300 Dyna-3 é ideal para o trabalho
                pesado da produção de cana, arroz e grãos.
              </p>
            </li>
          </InfoContainer>
        </div>
      </HeaderContainer>

      <StickersContainer style={{ marginTop: "2.5vw", marginLeft: "5%" }}>
        <Sticker
          title="MF 6711"
          sticker={sticker30}
          obtained={userStickers.includes(sticker30.id)}
        />
        <Sticker
          sticker={sticker31}
          title=""
          obtained={userStickers.includes(sticker31.id)}
        />

        <Sticker
          sticker={sticker32}
          obtained={userStickers.includes(sticker32.id)}
          containerStyle={{ marginLeft: "0vw" }}
        />

        <Sticker
          sticker={sticker33}
          obtained={userStickers.includes(sticker33.id)}
          containerStyle={{ marginLeft: "16vw" }}
          title="MF 6714 Dyna -4"
        />

        <Sticker
          sticker={sticker34}
          obtained={userStickers.includes(sticker34.id)}
          containerStyle={{ marginLeft: "1.5vw" }}
          title="MF 7318 Dyna -3"
        />
        <Sticker
          sticker={sticker35}
          obtained={userStickers.includes(sticker35.id)}
          containerStyle={{ marginLeft: "1.5vw" }}
          title="MF 7725 Dyna-6"
        />
        <Sticker
          sticker={sticker36}
          obtained={userStickers.includes(sticker36.id)}
          containerStyle={{ marginLeft: "1.5vw" }}
          title="MF 6714 R Dyna-4"
        />
      </StickersContainer>
    </PageContainer>
  );
}
