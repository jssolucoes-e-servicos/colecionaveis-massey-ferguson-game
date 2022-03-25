import React from "react";
import AssetsData from "./page.json";

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

export default function Page2({ stickers, userStickers }) {
  const sticker4 = getSticker(4, stickers);
  const sticker5 = getSticker(5, stickers);
  const sticker6 = getSticker(6, stickers);
  const sticker7 = getSticker(7, stickers);

  if (!stickers?.length) return null;

  const title = "Há 175 anos de olho no futuro";
  const description = "A Massey";

  return (
    <PageContainer background={AssetsData.pages.page2}>
      {/* background={AssetsData.album.Page3BgM} */}
      <PageHalf>
        <PageHeaderMobile
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <VidTxt>
            {/* <PageTitle style={{ color: "#fff" }}>{title}</PageTitle> */}
            {/* <PageDescription style={{ maxWidth: "95%", opacity: "0" }}>
              {description.substr(0, 10)}
            </PageDescription> */}
          </VidTxt>

          <BoxxT style={{ marginTop: "10vw" }}>
            <Boxcards>
              <Boxborder>
                <Sticker
                  title="Consórcio Nacional Massey Brasil"
                  sticker={sticker4}
                  year={1961}
                  obtained={userStickers.includes(sticker4.id)}
                  description="1980: Nasceu o Consórcio Nacional Massey Ferguson."
                />
              </Boxborder>
            </Boxcards>
            <Boxcards style={{ marginLeft: 5 }}>
              <Boxborder>
                <Sticker
                  sticker={sticker5}
                  year={1961}
                  title="Plantadeiras Massey Ferguson"
                  obtained={userStickers.includes(sticker5.id)}
                  description="1988: Surgem as primeiras plantadeiras Massey Ferguson."
                />
              </Boxborder>
            </Boxcards>
          </BoxxT>
          <BoxxT style={{ marginTop: "3vw" }}>
            <Boxcards>
              <Boxborder>
                <Sticker
                  sticker={sticker6}
                  year={1961}
                  title="Agricultura de precisão"
                  obtained={userStickers.includes(sticker6.id)}
                  description="2013:Lançamento das tecnologias de coletas de dados e monitoramento"
                />
              </Boxborder>
            </Boxcards>
            <Boxcards style={{ marginLeft: 5 }}>
              <Boxborder>
                <Sticker
                  sticker={sticker7}
                  year={1961}
                  title="Massey Ferguson Premium"
                  obtained={userStickers.includes(sticker7.id)}
                  description="2013:Lançamento das tecnologias de coletas de dados e monitoramento"
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
        {description} */}
        {description.substr(0, 100)}
      </StickerDescription>
    </Boxs>
  );
};

// import React from "react";
// import AssetsData from "@/services/data.json";
// import {
//   PageContainer,
//   PageHeader,
//   PageTitle,
//   PageDescription,
//   PageHalf,
//   PageHeaderMobile,
// } from "../styles";

// import {
//   Sticker as StickerBase,
//   StickersContainer,
//   getSticker,
// } from "../../index";
// import { StickerDescription, StickerContainer, VidTxt } from "../Page1/styles";

// export default function Page2({ stickers, userStickers }) {
//   const sticker4 = getSticker(4, stickers);
//   const sticker5 = getSticker(5, stickers);
//   const sticker6 = getSticker(6, stickers);
//   const sticker7 = getSticker(7, stickers);

//   if (!stickers?.length) return null;

//   const title = "O seu amor por trator começou aqui";
//   const description =
//     "Quem é que não se lembra do vermelhinho que fez seu coração pulsar mais forte? É bem provável que tenha sido um destes tratores que mudaram a história da agricultura brasileira e que até hoje é o mais querido de muitos masseyros e masseyras: a Linha X";

//   return (
//     <PageContainer background={AssetsData.album.page2}>
//       <PageHalf>
//         <PageHeaderMobile style={{ marginTop: 50 }}>
//           {/* <VidTxt>
//           <PageTitle>{title}</PageTitle>
//           <PageDescription style={{ maxWidth: "60%", marginTop: "1vw" }}>
//             {description}
//           </PageDescription>
//         </VidTxt> */}

//           <StickersContainer>
//             <Sticker
//               sticker={sticker4}
//               title={sticker4.title}
//               obtained={userStickers.includes(sticker4.id)}
//             />
//             <Sticker
//               sticker={sticker5}
//               title={sticker5.title}
//               obtained={userStickers.includes(sticker5.id)}
//             />
//             <Sticker
//               sticker={sticker6}
//               title={sticker6.title}
//               obtained={userStickers.includes(sticker6.id)}
//             />
//             <Sticker
//               sticker={sticker7}
//               title={sticker7.title}
//               obtained={userStickers.includes(sticker7.id)}
//             />
//           </StickersContainer>
//         </PageHeaderMobile>
//       </PageHalf>
//     </PageContainer>
//   );
// }

// const Sticker = ({ title, description, year, sticker, style, ...props }) => {
//   if (!sticker) return null;

//   return (
//     <StickerContainer style={style}>
//       <StickerBase title={title} sticker={sticker} {...props} />
//       <StickerDescription>
//         {/* {year && <b>{`${year} - `}</b>}
//         {description} */}
//         {/* {description} */}
//       </StickerDescription>
//     </StickerContainer>
//   );
// };
