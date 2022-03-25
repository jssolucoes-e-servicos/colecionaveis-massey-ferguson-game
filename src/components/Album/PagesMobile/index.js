import React, { useContext } from "react";
import { useDrop } from "react-dnd";

import { AlbumContext } from "@/components/Album";
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
  Page11,
  Page12,
  Page13,
  Page14,
  Page15,
  Page16,
  Page17,
  Page18,
  Page19,
} from "./pages";

import {
  StickerContainer,
  StickerTitle,
  ObtainedStickerContainer,
  StickerImageContainer,
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
  Page11,
  Page12,
  Page13,
  Page14,
  Page15,
  Page16,
  Page17,
  Page18,
  Page19,
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
  style,
  multi = false,
  pasted = false,
}) => {
  const { addSticker } = useContext(AlbumContext);

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
      <StickerContainer //borders
        style={style}
        ref={drop}
        multi={multi}
        isOver={isOver}
        obtained={obtained}
      >
        {obtained ? (
          <ObtainedStickerContainer>
            <StickerImageContainer>
              <img src={sticker.image} alt="" />
            </StickerImageContainer>
            {/* <StickerId>{sticker.id}</StickerId> */}
          </ObtainedStickerContainer>
        ) : (
          <span>{String(sticker.id).padStart(2, "0")}</span>
        )}
      </StickerContainer>
    </StickerWrapper>
  );
};

export function getSticker(sticker, stickers) {
  return stickers[sticker - 1];
}
