import React, { useContext } from "react";
import { useDrop } from "react-dnd";

import { AlbumContext } from "../index";
import {
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
  Page8,
  Page9,
  Page10,
} from "./pages";

import {
  StickerContainer,
  StickerTitle,
  ObtainedStickerContainer,
  StickerImageContainer,
  StickerId,
  StickerWrapper,
} from "./styles";

export { StickersRows as StickersContainer } from "./styles";

const pages = [
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
  Page8,
  Page9,
  Page10,
];

export default function Page({ page, stickers, ...props }) {
  const context = useContext(AlbumContext);

  const SelectedPage = pages[Number(page) - 1];
  if (!SelectedPage) return null;

  return <SelectedPage stickers={stickers} {...context} {...props} />;
}

export const Sticker = ({
  title,
  sticker,
  containerStyle,
  obtained,
  spanColor = "#3D3D3D",
  style,
}) => {
  const { addSticker } = useContext(AlbumContext);

  //console.log(sticker);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "sticker-" + sticker?.id,
    drop: addSticker,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  if (!sticker) return null;
  title = title ?? sticker.nome;

  return (
    <StickerWrapper style={containerStyle}>
      <StickerTitle
        style={{
          opacity: !title && "0",
          userSelect: !title && "none",
          color: style?.color && style.color,
        }}
      >
        {title || "-"}
      </StickerTitle>
      <StickerContainer
        style={style}
        ref={drop}
        isOver={isOver}
        obtained={obtained}
        spanColor={spanColor}
      >
        {obtained ? (
          <ObtainedStickerContainer>
            {/*  {console.log(sticker)} */}

            <StickerImageContainer>
              <img src={sticker.image} alt="" />
            </StickerImageContainer>
            {/* <StickerId>{sticker.id}</StickerId> */}
          </ObtainedStickerContainer>
        ) : (
          <span style={{ color: spanColor }}>
            {String(sticker.id).padStart(2, "0")}
          </span>
        )}
      </StickerContainer>
    </StickerWrapper>
  );
};

export function getSticker(sticker, stickers) {
  return stickers[sticker - 1];
}
