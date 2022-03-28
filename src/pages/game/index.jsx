import Album from "@/components/Album";
import DraggableSticker from "@/components/DraggableSticker";
import ModalPremierDay from "@/components/ModalPremierDay";
import GameContext from "@/contexts/gameContext";
import useRefCallback from "@/hooks/useRefCallback";
import Template from "@/layouts/GameLayout";
import API from '@/services/api';
import { getAPIClient } from "@/services/axios";
import { Aa, ButtonAnimate } from "@/styles/modals/AlertStyles";
import {
  CarouselAndTitleContainer, CarouselParent, CarouselTitle,
  CarouselWrapper, CaruselContainer, Container, CustomArrow, DotButton, DotsContainer
} from "@/styles/pages/gameStyle";
import { parseCookies } from "nookies";
import React, { useContext, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import { toast } from "react-toastify";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 750 },
    items: 7,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 749, min: 660 },
    items: 6,
    paritialVisibilityGutter: 50,
  },
  mobile2: {
    breakpoint: { max: 659, min: 480 },
    items: 4.5,
    paritialVisibilityGutter: 50,
  },
  mobile3: {
    breakpoint: { max: 479, min: 450 },
    items: 4,
    paritialVisibilityGutter: 30,
  },
  mobile4: {
    breakpoint: { max: 449, min: 0 },
    items: 3,
    paritialVisibilityGutter: 30,
  },
};

export default function Home({ userData }) {

  const { setLoad, isMobile, setIsMobile } = useContext(GameContext);
  const [album, setAlbum] = useState(null); //Figurinhas do album (coladas)
  const [stickers, setStickers] = useState([]); //Figurinhas do player para se coladas no album (coladas)
  const [modalPremier, setModalPremier] = useState(false); //modal premio dia
  const [slide, setSlide] = useState(0);
  const [totalDots, setTotalDots] = useState(0);
  const [carouselRef, setCarouselRef] = useState(null);
  const [inMobile, setInMobile] = useState(false);

  const [carousel] = useRefCallback((ref) => {
    const total = ref?.state.totalItems - ref?.state.slidesToShow + 1;
    if (total >= 0) setTotalDots(total);
    setCarouselRef(ref);
  });

  useEffect(() => {
    async function setConfigs() {
      let im = sessionStorage.getItem("isMobile");
      if (im === "true") {
        setInMobile(true);
      } else {
        setInMobile(false);
      }

      if (localStorage.getItem("mdlPmr") !== "null") {
        setTimeout(() => {
          setModalPremier(true);
        }, 10000);
      }
    }
    setConfigs();
    getData();
  }, [isMobile]);

  async function getData() {
    try {
      setLoad(true);
      const { data } = await API.get("/albums/player");
      setAlbum(data.pasted);
      setStickers(data.unpasted);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      toast.error("falha ao carregar seu album");
    }
  }

  async function getPremier() {
    try {
      const hash = localStorage.getItem("mdlPmr");
      await API.post("figures/premier/open", { hash: hash });
      setModalPremier(false);
      localStorage.setItem("mdlPmr", null);

      await getData();
    } catch (error) {
      console.error(error);
    }
  }


  const removeUserSticker = (stickerId) => {
    setStickers((items) => items.filter((item) => item.id !== stickerId));
  };

  const goToSlide = (slide) => {
    const ref = carouselRef;
    if (!ref) return;
    ref.goToSlide(slide);
  };

  const goToNextSlide = (slide) => {
    const ref = carouselRef;
    if (!ref) return;

    if (
      carouselRef.state.currentSlide + slide < 0 ||
      carouselRef.state.currentSlide + slide >
      carouselRef.state.totalItems - carouselRef.state.slidesToShow
    ) {
      return;
    }

    ref.goToSlide(carouselRef.state.currentSlide + slide);
  };

  return (
    <DndProvider
      backend={isMobile === true ? (TouchBackend) : (HTML5Backend)}

    >
      <Template userData={userData}>
        <ModalPremierDay view={modalPremier}>
          <ButtonAnimate onClick={getPremier}>
            <Aa>RESTAGAR PRÊMIO</Aa>
          </ButtonAnimate>
        </ModalPremierDay>

        <Container id="thisContainer">
          {album !== null ? (
            <Album
              removeUserSticker={removeUserSticker}
              data={album}
              isMobile={inMobile}
            />
          ) : (
            <div
              style={{
                background: "#333",
                height: "100vh",
                position: "fixed",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
          )}

          <CaruselContainer>
            <CarouselParent>
              <CarouselWrapper>
                <CustomArrow onClick={() => goToNextSlide(-1)}>
                  <BsChevronLeft
                    size={30}
                    color="#888"
                    style={{ marginLeft: 15 }}
                  />
                </CustomArrow>

                <CarouselAndTitleContainer>
                  <CarouselTitle>Minhas figurinhas</CarouselTitle>
                  {Boolean(stickers.length) && (
                    <Carousel
                      arrows={false}
                      draggable={false}
                      ref={carousel}
                      responsive={responsive}
                      swipeable={false}
                      beforeChange={(nextSlide) => setSlide(nextSlide)}
                      itemClass="carrousel-game-item"
                      customTransition="all .2"
                    >
                      {stickers.map((sticker) => (
                        <DraggableSticker key={sticker.id} sticker={sticker} />
                      ))}
                    </Carousel>
                  )}
                </CarouselAndTitleContainer>

                <CustomArrow onClick={() => goToNextSlide(1)}>
                  <BsChevronRight
                    size={30}
                    color="#888"
                    style={{ marginRight: 5 }}
                  />
                </CustomArrow>
              </CarouselWrapper>
              {totalDots.length > 0 && (
                <DotsContainer>
                  {Array(totalDots)
                    .fill()
                    .map((x, index) => (
                      <DotButton
                        key={index}
                        type="button"
                        onClick={() => goToSlide(index)}
                        active={slide === index}
                      />
                    ))}
                </DotsContainer>
              )}
            </CarouselParent>
          </CaruselContainer>
        </Container>
      </Template>
    </DndProvider>
  );
}

export const getServerSideProps = async (ctx) => {
  const { "cmf-00": profile } = parseCookies(ctx);
  if (!profile) {
    return {
      redirect: {
        destination: "/login",
        permanet: false,
      },
    };
  } else {
    try {
      const apiClient = getAPIClient(ctx);
      const { data } = await apiClient.get('players/me');
      console.log(data);
      return {
        props: { userData: data },
      };
    } catch (error) {
      return {
        redirect: {
          destination: "/login",
          permanet: false,
        },
      }

    }
  }
};