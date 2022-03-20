import AssetsData from "@/services/data.json";
import React from "react";
import { useDrag } from "react-dnd";
import { Container, Image } from "./styles";


export default function DraggableSticker({ sticker }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "sticker-" + sticker.figure_id,
    item: sticker,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Container ref={drag}>
      <Image
        src={AssetsData.figures[sticker.figure_id - 1].image}
        style={{
          border: isDragging && "2px solid darkred",
        }}
      />
    </Container>
  );
}
