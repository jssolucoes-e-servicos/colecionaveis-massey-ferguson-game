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

export default function Page6({ stickers, userStickers }) {
  const sticker37 = getSticker(37, stickers);
  const sticker38 = getSticker(38, stickers);
  const sticker39 = getSticker(39, stickers);
  const sticker40 = getSticker(40, stickers);
  const sticker41 = getSticker(41, stickers);
  const sticker42 = getSticker(42, stickers);

  if (!stickers?.length) return null;

  const title = "De olho no amanhã";
  const description =
    "175 anos se passaram e, depois de fazer uma revolução no campo, estamos mais conectados com o futuro do que nunca. E isso o agricultor que faz com o coração sabe bem, pois pode confiar demais nas nossas máquinas.";
  const titles = "Se separados são parceiros, imagina juntos";
  const descriptions =
    "No campo, o trabalho sempre rende mais quando temos a parceria certa. Com as máquinas, isso não poderia ser diferente e quem vive do campo entende bem. É por isso que você sempre pode contar com uma dupla que vai te fazer produzir muito mais.";
  return (
    <PageContainer background="https://3sdigital.com.br/videovaltra/sticksImgcdm/fundo6.png">
      <HeaderContainer>
        <PageHeader>
          <div>
            <PageTitle>{title}</PageTitle>
            <PageDescription style={{ marginTop: ".8vw", color: "#fff" }}>
              {description}
            </PageDescription>

            <div
              style={{
                width: "100%",
                maxWidth: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 100,
                backgroundImage: `url("${AssetsData.album.page3}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                marginTop: "1vw",
                marginLeft: -30,

                color: "#fff",
              }}
            >
              <InfoContainer>
                <p
                  style={{
                    fontSize: "0.6vw",
                    width: "80%",
                    marginLeft: 15,
                    marginTop: 20,
                  }}
                >
                  • O trator 8S foi o grande lançamento da marca global em 2020
                  e veio para mostrar que o futuro já começou.
                </p>
              </InfoContainer>
            </div>
          </div>
        </PageHeader>

        <div>
          <InfoContainer>
            <PageTitle>{titles}</PageTitle>

            <PageDescription
              style={{ width: "90%", marginTop: ".8vw", color: "#fff" }}
            >
              {descriptions}
            </PageDescription>
          </InfoContainer>
        </div>
      </HeaderContainer>

      <StickersContainer style={{ marginTop: "0vw", marginLeft: "5%" }}>
        <Sticker
          title="MF 8737"
          sticker={sticker37}
          obtained={userStickers.includes(sticker37.id)}
          containerStyle={{ marginTop: ".6vw" }}
        />
        <Sticker
          sticker={sticker38}
          title="8S"
          obtained={userStickers.includes(sticker38.id)}
          containerStyle={{ marginLeft: "10vw", marginTop: ".6vw" }}
        />

        <Sticker
          sticker={sticker39}
          obtained={userStickers.includes(sticker39.id)}
          containerStyle={{ marginTop: ".6vw" }}
        />

        <Sticker
          title="MF 7720 Dyna-6 + Enfardadora MF 2270 XD"
          sticker={sticker40}
          obtained={userStickers.includes(sticker40.id)}
          containerStyle={{ marginLeft: "6vw" }}
        />

        <Sticker
          title="MF 5700 MASSEY + Plantadeira MF 600"
          sticker={sticker41}
          obtained={userStickers.includes(sticker41.id)}
          containerStyle={{ marginLeft: "2vw" }}
        />
        <Sticker
          title="MF 6712R + Enfardadora MF 4160V"
          sticker={sticker42}
          obtained={userStickers.includes(sticker42.id)}
          containerStyle={{ marginLeft: "2vw" }}
        />
      </StickersContainer>
    </PageContainer>
  );
}
