import React from "react";
import { PageContainer } from "@/components/Album/pagesDesktop/pages/styles";
import { Capas } from "./styles";
import AssetsData from "./capa.json";
//import Bg from "@/assets/images/albumG.png";
export default function Page0({ stickers, userStickers }) {
  return (
    <PageContainer
      //background={AssetsData.pages.Capa}
      style={{
        backgroundColor: "#efefef",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Capas />
    </PageContainer>
  );
}
