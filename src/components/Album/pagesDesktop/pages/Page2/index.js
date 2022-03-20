import React from "react";

import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,
  StickerTitlePage,
  TitlePaget,
} from "@/components/Album/pagesDesktop/pages/styles";

import {
  Sticker as StickerBase,
  getSticker,
  StickersContainer,
} from "@/components/Album/pagesDesktop";

import { StickerDescription, StickerContainer } from "./styles";

export default function Page1({ stickers, userStickers }) {
  const sticker1 = getSticker(1, stickers);
  const sticker2 = getSticker(2, stickers);
  const sticker3 = getSticker(3, stickers);
  const sticker4 = getSticker(4, stickers);
  const sticker5 = getSticker(5, stickers);
  const sticker6 = getSticker(6, stickers);
  const sticker7 = getSticker(7, stickers);

  if (!stickers?.length) return null;
  const title = "Há 175 anos de olho no futuro";
  const description =
    "A Massey Ferguson celebra 175 anos no mundo em 2022. Para celebrar sua presença no Brasil, que completou 60 anos em 2021, a marca lança um álbum que conta, por meio de figurinhas, seus principais marcos no país. São muitas histórias, parcerias e evolução de uma trajetória que começou lá atrás. Vamos relembrar?";

  return (
    <PageContainer background="https://3sdigital.com.br/videovaltra/sticksImgcdm/fundo1.png">
      <PageHeader>
        <div>
          <PageTitle style={{ maxWidth: "95%" }}>{title}</PageTitle>
          <PageDescription
            style={{
              maxWidth: "56%",
              marginTop: ".8vw",
              color: "#9A9A9A",
              opacity: 1,
            }}
          >
            {description}
          </PageDescription>
        </div>

        <StickersContainer style={{ marginTop: "2vw" }}>
          <Sticker
            sticker={sticker1}
            title="Colheitadeira Massey-Harris"
            year={1938}
            style={{ color: "#ccc" }}
            obtained={userStickers.includes(sticker1.id)}
            description="1939 - A primeira colheita mecanizada do Brasil aconteceu com uma Massey-Harris, mais de duas décadas antes da chegada oficial da marca no país."
          />
          <Sticker
            sticker={sticker2}
            year={1961}
            title="1ª Fábrica Massey Ferguson no Brasil"
            obtained={userStickers.includes(sticker2.id)}
            style={{ marginLeft: "2vw", color: "#ccc" }}
            description="1961 - A primeira fábrica Massey Ferguson foi instalada na capital paulista e, ali, nasceu uma parceria de amor pelo agro."
          />
          <Sticker
            title="MF 275  trator Massey Ferguson"
            sticker={sticker3}
            year={1975}
            obtained={userStickers.includes(sticker3.id)}
            style={{ marginLeft: "2vw", color: "#ccc" }}
            description="1975 - Atingimos o recorde de maior produção de tratores em um ano e o MF 275 conquistou o coração dos brasileiros como trator mais vendido."
          />
          <Sticker
            title="Consórcio Nacional Massey"
            sticker={sticker4}
            year={1980}
            obtained={userStickers.includes(sticker4.id)}
            style={{ marginLeft: "10vw", color: "#ccc" }}
            description="1980 - Como mais uma alternativa atrativa para o agricultor ter sua máquina Massey Ferguson, nasceu o Consórcio Nacional Massey Ferguson."
          />
          <Sticker
            title="Plantadeiras Massey Ferguson"
            sticker={sticker5}
            year={1988}
            obtained={userStickers.includes(sticker5.id)}
            style={{ marginLeft: "1.5vw", color: "#ccc" }}
            description="1988 - Com a expansão do plantio direto, surgem as primeiras plantadeiras Massey Ferguson."
          />
          <Sticker
            title="Agricultura de precisão"
            sticker={sticker6}
            year={2013}
            obtained={userStickers.includes(sticker6.id)}
            style={{ marginLeft: "1.5vw", color: "#ccc" }}
            description="2013 - A era da agricultura digital é oficializada com o lançamento das tecnologias de coletas de dados e monitoramento, que agora são cada vez mais inteligentes."
          />
          <Sticker
            title="Massey Ferguson Premium"
            sticker={sticker7}
            obtained={userStickers.includes(sticker7.id)}
            style={{ marginLeft: "1.5vw", color: "#ccc" }}
            description="2013 - A era da agricultura digital é oficializada com o lançamento das tecnologias de coletas de dados e monitoramento, que agora são cada vez mais inteligentes."
          />
        </StickersContainer>
      </PageHeader>
    </PageContainer>
  );
}

const Sticker = ({ title, description, year, sticker, style, ...props }) => {
  if (!sticker) return null;

  return (
    <StickerContainer style={style}>
      <StickerBase title={title} sticker={sticker} {...props} />
      <StickerDescription>
        {/* {year && <b>{`${year} - `}</b>}
        {description} */}
        {description}
      </StickerDescription>
    </StickerContainer>
  );
};
