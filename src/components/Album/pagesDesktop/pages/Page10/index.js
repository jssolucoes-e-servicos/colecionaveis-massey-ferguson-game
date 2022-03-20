import React from "react";
import AssetsData from "@/services/data.json";
import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,
  PageHalf,
} from "@/components/Album/pagesDesktop/pages/styles";

import {
  Sticker as StickerBase,
  StickersContainer,
  getSticker,
} from "@/components/Album/pagesDesktop";
import { HeaderContainer, InfoContainer } from "./styles";
export default function Page9({ stickers, userStickers }) {
  const sticker54 = getSticker(54, stickers);
  const sticker55 = getSticker(55, stickers);
  const sticker56 = getSticker(56, stickers);
  const sticker57 = getSticker(57, stickers);
  const sticker58 = getSticker(58, stickers);
  const sticker59 = getSticker(59, stickers);
  const sticker60 = getSticker(60, stickers);

  if (!stickers?.length) return null;
  const NumberColor = "#FFF";
  const title = "Colhemos muito mais que resultados";
  const description =
    "Isso porque nos últimos 175 anos colhemos parcerias, trabalho duro e uma revolução que se iniciou lá atrás, quando a Massey-Harris começou um legado. Hoje, nossas colheitadeiras continuam levando para o campo muita tecnologia e eficiência.";

  return (
    <PageContainer
      background="https://3sdigital.com.br/videovaltra/sticksImgcdm/fundo9.png"
      //fundo antigo page2
      style={{ display: "flex" }}
    >
      <PageHalf>
        <PageHeader style={{ width: "90%" }}>
          <div>
            <PageTitle style={{ color: "#fff" }}>{title}</PageTitle>
            <PageDescription style={{ marginTop: ".8vw", color: "#fff" }}>
              {description}
            </PageDescription>
          </div>
        </PageHeader>
        <StickersContainer>
          <Sticker
            containerStyle={{ marginLeft: "1.5vw" }}
            sticker={sticker54}
            title="MF 9895"
            obtained={userStickers.includes(sticker54.id)}
          />

          <Sticker
            sticker={sticker55}
            title="MF 9795"
            containerStyle={{ marginLeft: "1vw" }}
            obtained={userStickers.includes(sticker55.id)}
          />
          <Sticker
            containerStyle={{ marginLeft: "1vw" }}
            sticker={sticker56}
            title="MF 9695"
            obtained={userStickers.includes(sticker56.id)}
          />
        </StickersContainer>
      </PageHalf>

      <PageHalf style={{ paddingBottom: "5vw" }}>
        <Sticker
          containerStyle={{ marginLeft: "4vw" }}
          sticker={sticker57}
          title="MF 4690"
          obtained={userStickers.includes(sticker57.id)}
          // spanColor={NumberColor}
        />
        <Sticker
          sticker={sticker58}
          title="MF 5690"
          containerStyle={{ marginLeft: "1vw" }}
          obtained={userStickers.includes(sticker58.id)}
          // spanColor={NumberColor}
        />

        <Sticker
          sticker={sticker59}
          title="MF 6690"
          containerStyle={{ marginLeft: "1.5vw" }}
          obtained={userStickers.includes(sticker59.id)}
        />
        <Sticker
          sticker={sticker60}
          obtained={userStickers.includes(sticker60.id)}
        />
      </PageHalf>
    </PageContainer>
  );
}

const Sticker = ({ style, ...props }) => {
  return <StickerBase style={{ color: "#FFF", ...style }} {...props} />;
};

// import React from "react";

// import {
//   PageContainer,
//   PageHeader,
//   PageTitle,
//   PageDescription,
// } from "@/components/Album/pagesDesktop/pages/styles";

// import {
//   Sticker,
//   getSticker,
//   StickersContainer,
// } from "@/components/Album/pagesDesktop";

// import { HeaderContainer, InfoContainer } from "./styles";

// export default function Page9({ stickers, userStickers }) {
//   const sticker54 = getSticker(54, stickers);
//   const sticker55 = getSticker(55, stickers);
//   const sticker56 = getSticker(56, stickers);
//   const sticker57 = getSticker(57, stickers);
//   const sticker58 = getSticker(58, stickers);
//   const sticker59 = getSticker(59, stickers);
//   const sticker60 = getSticker(60, stickers);

//   if (!stickers?.length) return null;

//   const title = "Colhemos muito mais que resultados";
//   const description =
//     "Isso porque nos últimos 60 anos colhemos parcerias, trabalho duro e uma revolução, que iniciou lá atrás, quando a Massey-Harris começou um legado. Hoje, nossas colheitadeiras continuam levanto para o campo muita tecnologia e eficiência.";

//   return (
//     <PageContainer background="https://game-stickers.herokuapp.com/static/media/bgd.2eb73c93.png">
//       <HeaderContainer>
//         <PageHeader>
//           <div>
//             <PageTitle>{title}</PageTitle>
//             <PageDescription style={{ marginTop: ".8vw", color: "#ccc" }}>
//               {description}
//             </PageDescription>
//           </div>
//         </PageHeader>
//       </HeaderContainer>

//       <StickersContainer style={{ marginTop: "1vw" }}>
//         <Sticker
//           sticker={sticker54}
//           obtained={userStickers.includes(sticker54.id)}
//         />
//         <Sticker
//           sticker={sticker55}
//           title=""
//           obtained={userStickers.includes(sticker55.id)}
//           containerStyle={{ marginLeft: "1vw" }}
//         />

//         <Sticker
//           sticker={sticker58}
//           obtained={userStickers.includes(sticker58.id)}
//           containerStyle={{ marginLeft: "1vw" }}
//         />

//         <Sticker
//           sticker={sticker57}
//           obtained={userStickers.includes(sticker57.id)}
//           containerStyle={{ marginLeft: "15vw" }}
//         />

//         <Sticker
//           sticker={sticker58}
//           obtained={userStickers.includes(sticker56.id)}
//           containerStyle={{ marginLeft: "1vw", marginTop: "-5v" }}
//         />
//         <Sticker
//           sticker={sticker59}
//           obtained={userStickers.includes(sticker56.id)}
//           containerStyle={{ marginLeft: "1.5vw" }}
//         />
//         <Sticker
//           sticker={sticker60}
//           obtained={userStickers.includes(sticker56.id)}
//           containerStyle={{ marginLeft: "0vw" }}
//         />
//       </StickersContainer>
//     </PageContainer>
//   );
// }
