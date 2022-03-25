// import React from "react";
// import AssetsData from "./page.json";
// import {
//   StickerContainerP3,
//   StickerContainerP3B,
//   Boxs,
//   StickerDescription,
//   StickerCard,
//   StickerP3B,
//   StickerContainer,
// } from "./styles";
// import {
//   PageContainer,
//   PageHeaderMobile,
//   PageTitle,
//   PageDescription,
//   PageHalf,
// } from "../styles";

// import { Sticker as StickerBase, getSticker } from "../../index";

// import { VidTxt } from "../Page1/styles";

// export default function Page1({ stickers, userStickers }) {
//   const sticker1 = getSticker(1, stickers);
//   const sticker2 = getSticker(2, stickers);
//   const sticker3 = getSticker(3, stickers);

//   if (!stickers?.length) return null;
//   const title = "Há 175 anos de olho no futuro";
//   const description =
//     "A Massey Ferguson celebra 175 anos no mundo em 2022. Para celebrar sua presença no Brasil, que completou 60 anos em 2021, a marca lança um álbum que conta, por meio de figurinhas, seus principais marcos no país. São muitas histórias, parcerias e evolução de uma trajetória que começou lá atrás. Vamos relembrar? ";

//   return (
//     <PageContainer background={AssetsData.pages.page2}>
//       <PageHalf>
//         <PageHeaderMobile
//           style={{ justifyContent: "center", alignItems: "center" }}
//         >
//           <VidTxt>
//             <PageTitle style={{ marginTop: "1vw" }}>{title}</PageTitle>
//             <PageDescription
//               style={{
//                 maxWidth: "90%",
//                 marginTop: "1vw",
//                 color: "#fff",
//                 opacity: "0.5",
//               }}
//             >
//               {description}
//             </PageDescription>
//           </VidTxt>

//           <Boxs style={{ marginTop: "0vw" }}>
//             <Sticker
//               style={{ marginTop: 20, marginRight: 10 }}
//               title="Colheitadeira Massey-Harris Massey"
//               sticker={sticker1}
//               year={1938}
//               obtained={userStickers.includes(sticker1.id)}
//               description="1939 - A primeira colheita mecanizada do Brasil aconteceu com uma Massey-Harris, mais de duas décadas antes da chegada oficial da marca no país."
//             />

//             <Sticker
//               title="1ª Fábrica Massey Ferguson no Brasil"
//               multi={true}
//               style={{ marginTop: 20, marginRight: 10 }}
//               sticker={sticker2}
//               year={1961}
//               obtained={userStickers.includes(sticker2.id)}
//               description="1961 - A primeira fábrica Massey Ferguson foi instalada na capital paulista e, ali, nasceu uma parceria de amor pelo agro."
//             />
//             <Sticker
//               title="MF 275 trator Massey Ferguson"
//               multi={true}
//               style={{ marginTop: 20, marginRight: 10 }}
//               sticker={sticker3}
//               year={1961}
//               obtained={userStickers.includes(sticker3.id)}
//               description="1975 - Atingimos o recorde de maior produção de tratores em um ano e o MF 275 conquistou o coração dos brasileiros como"
//             />
//           </Boxs>
//         </PageHeaderMobile>
//       </PageHalf>
//     </PageContainer>
//   );
// }

// const Sticker = ({
//   title,
//   description,
//   year,
//   sticker,
//   style,
//   multi,
//   ...props
// }) => {
//   if (!sticker) return null;

//   return (
//     <Boxs style={style}>
//       <StickerBase title={title} sticker={sticker} {...props} multi={multi} />
//       <StickerDescription>
//         {/* {year && <b>{`${year} - `}</b>}
//         {description}*/}
//         {description}
//       </StickerDescription>
//     </Boxs>
//   );
// };

import React from "react";
import AssetsData from "./page.json";

import {
  BoxxT,
  Boxcards,
  Boxborder,
  Boxs,
  VidTxt,
  StickerDescription,
} from "../newsstyle";
import {
  PageContainer,
  PageHeaderMobile,
  PageTitle,
  PageDescription,
  PageHalf,
} from "../styles";

import { Sticker as StickerBase, getSticker } from "../../index";

export default function Page1({ stickers, userStickers }) {
  const sticker1 = getSticker(1, stickers);
  const sticker2 = getSticker(2, stickers);
  const sticker3 = getSticker(3, stickers);

  if (!stickers?.length) return null;

  const title = "Há 175 anos de olho no futuro";
  const description =
    "Celebramos 175 anos no mundo com figurinhas que contam nossa história. Vamos relembrar?";

  return (
    <PageContainer background={AssetsData.pages.page2}>
      <PageHalf>
        <PageHeaderMobile
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <VidTxt>
            <PageTitle>{title}</PageTitle>
            <PageDescription style={{ maxWidth: "100%", opacity: "0.5" }}>
              {description.substr(0, 110)}
            </PageDescription>
          </VidTxt>

          <BoxxT style={{ marginTop: 0 }}>
            <Boxcards>
              <Boxborder>
                <Sticker
                  // style={{ marginLeft: 5 }}
                  title="Colheitadeira Massey-Harris Ferguson"
                  sticker={sticker1}
                  year={1938}
                  obtained={userStickers.includes(sticker1.id)}
                  description="1939: Primeira colheita mecanizada do Brasil foi com uma Massey-Harris"
                />
              </Boxborder>
            </Boxcards>
            <Boxcards style={{ marginLeft: 5 }}>
              <Boxborder>
                <Sticker
                  // style={{ marginLeft: 5 }}
                  sticker={sticker2}
                  year={1961}
                  title="1ª Fábrica Massey Ferguson no Brasil"
                  obtained={userStickers.includes(sticker2.id)}
                  description="1961: Primeira fábrica Massey Ferguson foi instalada na capital de SP"
                />
              </Boxborder>
            </Boxcards>
          </BoxxT>
          <Boxs>
            <Sticker
              multi={true}
              style={{ marginTop: 5 }}
              sticker={sticker3}
              title="MF 275 trator Massey Ferguson"
              year={1961}
              obtained={userStickers.includes(sticker3.id)}
              description="1975: O MF 275 foi o trator mais vendido e a produção atingiu recorde."
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
        {description}*/}
        {description.substr(0, 110)}
      </StickerDescription>
    </Boxs>
  );
};
