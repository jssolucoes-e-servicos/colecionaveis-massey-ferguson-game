import CarouselPlayer from "@/components/CarouselFiguri";
import {
    BtnBimage, CardCarro, DCbtns,
    DCbtnsB, DobtnFull, ImgCaf, SpanfULL, Spantick, TxtCarCards,
    TxtTT
} from "@/components/CarouselFiguri/carouselslider";
import ErrorBoundary from "@/components/ErrorBoundary";
import Translator from "@/components/I18n/Translator";
import ModelSales from "@/components/ModalAfterSales";
import { Saleschid } from "@/components/ModalAfterSales/styles";
import ModelBanks from "@/components/ModalBank";
import { BtnVendeBank, TxtBuMb } from "@/components/ModalBank/modbank";
import {
    ListPagination, Pagination, PaginationBox
} from "@/components/Paginations/style";
import GameContext from "@/contexts/gameContext";
import Template from "@/layouts/GameLayout";
import { default as api } from "@/services/api";
import { getAPIClient } from "@/services/axios";
import AssetsData from "@/services/data.json";
import { parseCookies } from "nookies";
import React, { useContext, useEffect, useState } from "react";
import {
    BsCheckAll, BsChevronLeft,
    BsChevronRight,
    BsStarFill
} from "react-icons/bs";
import { toast } from "react-toastify";
import ReactTooltip from "react-tooltip";



const formDataInitial = {
  id: "",
  type: 0,
};

const MAX_ITEMS = 3;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export default function Stands({userData}) {
  // state of Cont
  const { setLoad } = useContext(GameContext);
  const [formData, setformData] = useState(formDataInitial);
  const [filtered, setFiltered] = useState(false);
  const [listSales, setListSales] = useState(null);
  const [listFigurePlayer, setListFigurePlayer] = useState(null);
  const [userLocalData, setUserLocalData] = useState(userData);
  const [selectedSale, setSelectedSale] = useState(null);
  const [modalType, setModalType] = useState("out");
  const [modalBank, setModalBank] = useState(false); //modal pagamento troca bank
  const [dataToModal, setDataToModal] = useState({
    message: "",
    cash: "",
    type: "out",
  });
  const [modalSales, setModalSales] = useState(false); //modal pagamento troca bank

  const [info, setInfo] = useState({
    pages: 1,
    actual: 1,
    size: 0,
  });
  const [NextPage, setNextPage] = useState(1);

  const first = Math.max(info.actual - MAX_LEFT, 1);

  useEffect(() => {
    (function () {
      document.addEventListener("keyup", function (event) {
        if (event.key === "Return") {
          getData();
          console.log("Apertou o Enter");
        }
      });
    })();
  }, []);

  useEffect(() => {
    getData();
  }, [NextPage]);

  async function getData() {
    try {
      setLoad(true);
      const { data } = await api.get(
        `stands/player?page=${NextPage}&&type=${formData.type}&&id=${formData.id}`
      );
      setInfo({
        pages: data.sales.pages,
        actual: data.sales.actual,
        size: data.sales.size,
      });
      setListSales(data.sales.stands);
      setListFigurePlayer(data.hand);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      toast.error("Falha ao realizar a pesquisa");
    }
  }

  const refreshUserData = async () => {
    try {
      const { data } = await api.get("players/me");
      setUserLocalData(data);
    } catch (error) {
      toast.info("Olá, uma breve falha ocorreu ao atualizar suas informações na tela, mas tudo está salvo!");
    }
  }

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setformData((values) => ({
      ...values,
      [field]: value,
    }));
  };

  const handleFind = async () => {
    if (NextPage === 1) {
      await getData();
    } else {
      setNextPage(1);
    }
  };

  const handleClear = async (event) => {
    setformData(formDataInitial);
    setNextPage(1);
    if (NextPage === 1) {
      await getData();
    } else {
      setNextPage(1);
    }
  };

  const handSelectedBuy = (item) => {
    setModalType("in");
    setSelectedSale(item.target.name);
    setModalBank(true);
  };

  const handSelected = (item) => {
    setModalType("out");
    setSelectedSale(item.target.id);
    setModalBank(true);
  };

  const handleSale = async () => {
    try {
      setLoad(true);
      setFiltered(false);
      let StandArray = {};
      if (modalType === "out") {
        StandArray = await api.post("stands/create", {
          album_id: selectedSale,
        });
      } else {
        StandArray = await api.post("stands/buy", {
          stand_id: selectedSale,
        });
      }
      if (StandArray.data.error_cod === undefined) {
        setListSales(StandArray.data.sales.stands);
        setListFigurePlayer(StandArray.data.hand);
        setModalBank(false);
        setSelectedSale(null);
        setLoad(false);
        setDataToModal({
          message: StandArray.data.message,
          cash: StandArray.data.cash,
          type: modalType,
        });
        await refreshUserData();
        ModalSalesFill();
        toast.success(StandArray.data.message);
        toast.info(`Seu novo saldo é de M$ ${StandArray.data.cash}`);
      } else {
        setLoad(false);
        toast.error(StandArray.data.message);
        toast.info(`Seu saldo não foi alterado`);
      }
    } catch (error) {
      setModalBank(false);
      setLoad(false);
      if (modalType === "out") {
        toast.error("Ops! Falha ao concluir a venda.");
      } else {
        toast.error("Ops! Falha ao concluir a compra.");
      }
      setSelectedSale(null);
    }
  };

  function filterList(item) {
    return (item.figure.id = 1);
  }

  function ModalSalesFill() {
    setModalSales(true);
    setTimeout(myfigure, 5000);
    function myfigure() {
      setModalSales(false);
    }
  }

  return (
    <Template userData={userData}>
      <ReactTooltip />
      {modalSales === true ? (
        <ModelSales data={dataToModal}>
          <Saleschid
            onClose={() => {
              setModalSales(false);
              setSelectedSale(null);
            }}
          ></Saleschid>
        </ModelSales>
      ) : (
        <React.Fragment />
      )}
      {modalBank === true ? (
        <ModelBanks
          onClose={() => {
            setModalBank(false);
            //setSaleDisabled(true);
            setSelectedSale(null);
          }}
          id="geralf"
          album_id={selectedSale}
          type={modalType}
        >
          <BtnVendeBank onClick={handleSale}>
            <TxtBuMb>Confirmar</TxtBuMb>
          </BtnVendeBank>
        </ModelBanks>
      ) : (
        <React.Fragment />
      )}

      <div className="LauncHerCentral">
        <div className="Banc_G">
          <div className="Banks">
            <div className="Banck_Verse">
              <div className="Title_Bnack">
                <h2 className="Htitle">
                  <Translator path="stands.title" />
                </h2>
              </div>
              <div className="Bank_filter">
                <div className="Bank_Result">
                  <div className="Bank_form">
                    <div className="DadosSearch">
                      <input
                        style={{ fontSize: "0.73em" }}
                        className="Result_A"
                        type="text"
                        name="id"
                        placeholder="Número da figurinha que deseja encontrar..."
                        onChange={handleChange}
                        value={formData.id}
                      />
                      <button className="Result_pesquisar" onClick={handleFind}>
                        <span>
                          pesquisar
                          <BsStarFill
                            size={12}
                            id="teste"
                            style={{ marginLeft: 10 }}
                          />
                        </span>
                      </button>
                      <button
                        className="Result_pesquisar"
                        onClick={handleClear}
                        onMouseEnter={() => {
                         
                        }}
                      >
                        <span>
                          todos
                          <BsCheckAll
                            size={16}
                            style={{ marginLeft: 10 }}
                            id="teste"
                          />
                        </span>
                      </button>
                    </div>
                    <div className="Result_Soruce">
                      <div className="Result_C">
                        <input
                          className="RadioR"
                          type="radio"
                          name="type"
                          value="4"
                          onChange={handleChange}
                        />
                        <label className="LBr" htmlFor="html">
                          rara
                        </label>
                      </div>
                      <div className="Result_C">
                        <input
                          type="radio"
                          className="RadioR"
                          name="type"
                          value="3"
                          onChange={handleChange}
                        />
                        <label className="LBr" htmlFor="html">
                          lançamento
                        </label>
                      </div>
                      <div className="Result_C">
                        <input
                          type="radio"
                          className="RadioR"
                          name="type"
                          value="2"
                          onChange={handleChange}
                        />
                        <label className="LBr" htmlFor="html">
                          média
                        </label>
                      </div>
                      <div className="Result_C">
                        <input
                          type="radio"
                          className="RadioR"
                          name="type"
                          value="1"
                          onChange={handleChange}
                        />
                        <label className="LBr" htmlFor="html">
                          normal
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Bank_Valor">
                  <div className="Player_valor">
                    <span className="Player_V">MP {userLocalData?.cash}</span>
                  </div>
                </div>
              </div>

              <div className="Bank_carousel">
                {listSales == null ? (
                  <React.Fragment />
                ) : (
                  <div
                    className="Bank_carousel_A"
                    style={{ alignItems: "baseline" }}
                  >
                    {listSales.map(function (item) {
                      return (
                        <ErrorBoundary key={item.id}>
                          <div className="figuraT">
                            <div className="Dfigureg">
                              <img
                                className="Imgcard"
                                src={
                                  AssetsData.figures[item.figure_id - 1].image
                                }
                              />
                              <DCbtns>
                                <DCbtnsB
                                  data-tip="Comprar Figurinha"
                                  name={item.id}
                                  onClick={handSelectedBuy}
                                  style={{ background: "#810101" }}
                                >
                                  <BtnBimage
                                    src="/storage/images/icons/mcons.png"
                                    name={item.id}
                                    style={{ background: "#810101" }}
                                    onClick={handSelectedBuy}
                                    id="teste"
                                  />
                                </DCbtnsB>
                                <Spantick
                                  id="spartacus"
                                  name={item.id}
                                  onClick={handSelectedBuy}
                                >
                                  Comprar Figurinha
                                </Spantick>
                              </DCbtns>
                              <TxtCarCards>
                                <TxtTT>
                                  {AssetsData.figures[
                                    item.figure_id - 1
                                  ].name.substr(0, 60)}
                                </TxtTT>
                              </TxtCarCards>
                            </div>
                          </div>
                        </ErrorBoundary>
                      );
                    })}
                  </div>
                )}
              </div>

              <Pagination>
                <PaginationBox>
                  <button
                    className="PaginationBtn"
                    onClick={() => setNextPage(info.actual - 1)}
                    disabled={info.actual === 1}
                  >
                    <BsChevronLeft />
                  </button>

                  {Array.from({ length: Math.min(MAX_ITEMS, info.pages) })
                    .map((_, index) => index + first)
                    .map((page) => (
                      <ListPagination key={page}>
                        <button
                          onClick={() => setNextPage(info.pages)}
                          className={
                            page === NextPage
                              ? "pagination__item--active"
                              : null
                          }
                        >
                          {page}
                        </button>
                      </ListPagination>
                    ))}

                  <button
                    className="PaginationBtn"
                    onClick={() => setNextPage(info.actual + 1)}
                    disabled={info.actual === info.pages}
                  >
                    <BsChevronRight />
                  </button>
                </PaginationBox>
              </Pagination>
              <React.Fragment></React.Fragment>
              <div className="Bank_carousel_Player">
                <div className="Bank_carousel_B">
                  <div className="Bank_vender">
                    <span className="Result_pesquisar">
                      Figurinhas disponíveis para venda
                    </span>
                  </div>
                  <div className="card_player">
                    {listFigurePlayer === null ? (
                      <React.Fragment>
                        <div
                          className="Bank_carousel_A"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            overflow: "hidden",
                          }}
                        >
                          <div className="figuraT">
                            <img className="Imgcard" src="/storage/images/icons/ImageBg.png" />
                          </div>
                          <div className="figuraT">
                            <img className="Imgcard" src="/storage/images/icons/ImageBg.png" />
                          </div>
                          <div className="figuraT">
                            <img className="Imgcard" src="/storage/images/icons/ImageBg.png" />
                          </div>
                        </div>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <CarouselPlayer refi={"b2"}>
                          {listFigurePlayer.map(function (item) {
                            return (
                              <ErrorBoundary key={item.id}>
                                <CardCarro >
                                  <ImgCaf
                                    src={
                                      AssetsData.figures[item.figure_id - 1]
                                        .image
                                    }
                                  />
                                  <DobtnFull
                                    className="Dobtn"
                                    style={{
                                      bottom: 60,
                                      position: "relative",
                                      width: "auto",
                                      // left: "1vw",
                                    }}
                                  >
                                    <DCbtnsB
                                      id={item.id}
                                      onClick={handSelected}
                                      data-tip="Vender Figurinha"
                                    >
                                      <BtnBimage
                                        src="/storage/images/icons/mcons.png"
                                        id={item.id}
                                        data-tip="Vender Figurinha"
                                      />
                                    </DCbtnsB>
                                    <SpanfULL id="fulanos">
                                      Vender Figurinha
                                    </SpanfULL>
                                  </DobtnFull>
                                </CardCarro>
                              </ErrorBoundary>
                            );
                          })}
                        </CarouselPlayer>
                      </React.Fragment>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
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
    const apiClient = getAPIClient(ctx);
    const { data } = await apiClient.get('players/me');
    return {
      props: { userData: data },
    };
  }
};
