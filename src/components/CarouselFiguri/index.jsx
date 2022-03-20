import React, { useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ItemsCarrocel, Slidenav, SliderFull, WralC } from "./carouselslider";
export default function CarouselG({ refi, children }) {
  useEffect(() => {
    document.querySelector(ItemsCarrocel);
    document.addEventListener("wheel", function (event) {
      if (event.deltaY > 0) {
        event.target.scrollBy(300, 0);
      } else {
        event.target.scrollBy(-300, 0);
      }
    });

    document
      .querySelector(`#next${refi}`)
      .addEventListener("click", function (event) {
        document.querySelector(`#itm${refi}`).scrollBy(400, 0);
      });

    document
      .querySelector(`#previous${refi}`)
      .addEventListener("click", function (event) {
        document.querySelector(`#itm${refi}`).scrollBy(-400, 0);
      });
  }, []);
  return (
    <React.Fragment>
      <Slidenav id={`previous${refi}`}>
        <SliderFull>
          <BsChevronLeft />
        </SliderFull>
      </Slidenav>

      <WralC>
        <ItemsCarrocel id={`itm${refi}`}>
          {children}
        </ItemsCarrocel>
      </WralC>
      <Slidenav id={`next${refi}`}>
        <SliderFull>
          <BsChevronRight />
        </SliderFull>
      </Slidenav>
    </React.Fragment>
  );
}
