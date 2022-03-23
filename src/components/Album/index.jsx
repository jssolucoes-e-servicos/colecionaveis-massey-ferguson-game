import Translator from "@/components/I18n/Translator";
import api from "@/services/api";
import AssetsData from "@/services/data.json";
import React, {
  createContext, useEffect,
  useRef, useState
} from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { toast } from "react-toastify";
import PageDesk from "./pagesDesktop";
import PageM from "./PagesMobile";
import {
  Container,
  Controllers, PageContainer, PagesTxt, Wrapper
} from "./styles";

export const AlbumContext = createContext();

export default function Album({ removeUserSticker, data = [], isMobile }) {
  const containerRef = useRef();
  const [stickers, setStickers] = useState([]);
  const [userStickers, setUserStickers] = useState([]);
  const [page, setPage] = useState(0);
  const [processClick, setProcessClick] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setStickers(AssetsData.figures);
        data.map((item) => {
          if (userStickers.includes(item.id)) return;
          setUserStickers((items) => [...items, item.figure_id]);
        });
      } catch (error) {}
    }
    getData();
  }, []);

  const addSticker = async (item) => {
    if (userStickers.includes(item.id)) return;
    setUserStickers((items) => [...items, item.figure_id]);
    try {
      const { data } = await api.post("/albums/paste", { album_id: item.id });
      let effectClick = document.querySelector("#audioPastes");
      effectClick.volume = 0.3;
      effectClick.play();
      toast.success(data.message);
      removeUserSticker(item.id);
    } catch (error) {
      console.error(error);
      toast.error("Falha ao colar sua figurinha");
    }
  };

  const handleSetPage = (page) => {
    setPage(page);
  };

/*   useEffect(() => {
    window.removeEventListener("resize", () => handleSetPage(page));
    window.addEventListener("resize", () => handleSetPage(page));
  }, [page]); */

  return (
    <AlbumContext.Provider
      value={{
        addSticker,
        stickers,
        setStickers,
        userStickers,
        setUserStickers,
        page,
        setPage: handleSetPage,
      }}
    >
      <Wrapper>
        <div>
          {page !== 0 ? (
            <Controllers
              onClick={() => handleSetPage(page - 1)}
              disabled={processClick}
            >
              <BsChevronLeft />
            </Controllers>
          ) : (
            <React.Fragment />
          )}

          <PagesTxt>
            {page === 0 ? (
              <React.Fragment />
            ) : (
              <React.Fragment>
                <Translator path="album.page" /> {page}
              </React.Fragment>
            )}
          </PagesTxt>
          {isMobile === true
            ? page < 18 && (
                <Controllers onClick={() => handleSetPage(page + 1)}>
                  <BsChevronRight />
                </Controllers>
              )
            : page < 9 && (
                <Controllers
                  onClick={() => handleSetPage(page + 1)}
                  disabled={processClick}
                >
                  <BsChevronRight />
                </Controllers>
              )}
        </div>
        <Container ref={containerRef}>
          <audio
            id="audioPastes"
            src="https://3sdigital.com.br/videovaltra/audiogame/Salescomplet.mp3"
          />
          {isMobile === true ? (
            <PageContainer>
              <PageM page={page + 1} />
            </PageContainer>
          ) : (
            <PageContainer>
              <PageDesk page={page + 1} />
            </PageContainer>
          )}
        </Container>
      </Wrapper>
    </AlbumContext.Provider>
  );
}
