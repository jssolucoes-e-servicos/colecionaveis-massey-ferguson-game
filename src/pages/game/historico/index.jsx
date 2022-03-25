import CarouselF from "@/components/CarouselFiguri";
import {
  BtnBimage,
  DCbtns,
  DCbtnsB,
  Dge,
  FigureTT,
  Imagett,
  TxtCarCards,
  TxtTT
} from "@/components/CarouselFiguri/carouselslider";
import ModelSales from "@/components/ModalAfterSales";
import { Saleschid } from "@/components/ModalAfterSales/styles";
import ModelBanks from "@/components/ModalBank";
import { BtnVendeBank, TxtBuMb } from "@/components/ModalBank/modbank";
import GameContext from "@/contexts/gameContext";
import Template from "@/layouts/GameLayout";
import api from "@/services/api";
import { getAPIClient } from "@/services/axios";
import AssetsData from "@/services/data.json";
import { parseCookies } from "nookies";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Historic({ userData }) {
  const { setLoad } = useContext(GameContext);
  const [listCommon, setListCommon] = useState(null);
  const [listMedium, setListMedium] = useState(null);
  const [listLaunch, setListLaunch] = useState(null);
  const [listRare, setListRare] = useState(null);
  const [modalBank, setModalBank] = useState(false); //modal pagamento troca bank
  const [modalSales, setModalSales] = useState(false); //modal Pos-pagamento troca bank
  const [selectedSale, setSelectedSale] = useState(null);

  const [dataToModal, setDataToModal] = useState({
    message: "",
    cash: "",
    type: "out",
  });

  useEffect(() => {
    getData();
    setLoad(false);
  }, []);

  async function getData() {
    try {
      setLoad(true);
      const {
        data: { albums },
      } = await api.get(`/albums/historic`);

      if (albums) {
        let dataFilterType1 = albums.filter(function (el) {
          console.log(el);
          return el.figure.type_id === 1;
        });
        let dataFilterType2 = albums.filter(function (el) {
          return el.figure.type_id === 2;
        });
        let dataFilterType3 = albums.filter(function (el) {
          return el.figure.type_id === 3;
        });
        let dataFilterType4 = albums.filter(function (el) {
          return el.figure.type_id === 4;
        });
        setListCommon(dataFilterType1);
        setListMedium(dataFilterType2);
        setListLaunch(dataFilterType3);
        setListRare(dataFilterType4);
      }
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error);
      toast.error("falha ao carregar seu histórico");
    }
  }

  const handSelectedBuy = (item) => {
    setSelectedSale(item.target.id);
    setModalBank(true);
  };

  const handleSale = async () => {
    try {
      setLoad(true);
      let stands = {};
      stands = await api.post("stands/create", {
        album_id: selectedSale,
      });

      if (stands.data.error_cod === undefined) {
        setModalBank(false);
        setSelectedSale(null);
        getData();
        setLoad(false);
        setDataToModal({
          message: stands.data.message,
          cash: stands.data.cash,
          type: "out",
        });
        ModalSalesFill();
        toast.success(stands.data.message);
        toast.info(`Seu novo saldo é de M$ ${stands.data.cash}`);
      } else {
        setLoad(false);
        toast.error(stands.data.message);
        toast.info(`Seu saldo não foi alterado`);
      }
    } catch (error) {
      setModalBank(false);
      setLoad(false);
      console.error(error);
      toast.error("Ops! Falha ao concluir a venda.");
      setSelectedSale(null);
    }
  };

  const handlePaste = async (item) => {
    try {
      setLoad(true);
      await api.post(`/albums/paste`, { album_id: item.target.id });
      toast.success("Figurinha colada com sucesso!");
      await getData();
    } catch (error) {
      setLoad(false);
      console.error(error);
      toast.error("Ops! Falha ao colar a figurinha.");
    }
  };

  function ModalSalesFill() {
    setModalSales(true);
    setTimeout(myfigure, 4000);
    function myfigure() {
      setModalSales(false);
    }
  }

  const FakeFigures = () => {
    return (
      <React.Fragment>
        <div
          style={{
            marginLeft: 0,
            display: "flex",
            flexDirection: "row",
            maxWidth: "95%",
            overflowX: "overlay",
            // background: "red",
            height: 200,
          }}
        >
          <FigureTT>
            <Imagett src="/storage/images/icons/ImageBg.png" />
          </FigureTT>
          <FigureTT>
            <Imagett src="/storage/images/icons/ImageBg.png" />
          </FigureTT>
          <FigureTT>
            <Imagett src="/storage/images/icons/ImageBg.png" />
          </FigureTT>
        </div>
      </React.Fragment>
    );
  };
  return (
    <Template userData={userData}>
      {/* Modal de mostra Pos-venda com efeito */}
      {modalSales === true ? (
        <ModelSales
          // onClose={() => {
          //   setModalSales(false);
          //   setSelectedSale(null);
          // }}
          data={dataToModal}
        >
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

      {/* Modal de venda figurinhas */}
      {modalBank === true ? (
        <ModelBanks
          onClose={() => {
            setModalBank(false);
            setSelectedSale(null);
          }}
          album_id={selectedSale}
          type="out"
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
              <div className="Title_Historyc">
                <h2 className="TxtHistoric">Minhas figurinhas</h2>
              </div>

              {/* INICIO CAROUSEL 1 */}
              {listRare === null ? (
                <React.Fragment>
                  {/* <h3 className="textH3">
                    Nenhuma figurinha raras para listar aqui teste.
                  </h3> */}
                  <div
                    id="carbanc"
                    className="Bank_carousel_A"
                    style={{ background: "transparent" }}
                  >
                    <FakeFigures />
                  </div>
                </React.Fragment>
              ) : (
                <div className="Bank_carousel" style={{ maxWidth: "100%" }}>
                  <div className="Bank_vender">
                    <h3 className="textH3">
                      Minhas Figurinhas Raras (
                      {listRare != null && listRare.length})
                    </h3>
                  </div>
                  <div
                    id="carbanc"
                    className="Bank_carousel_A"
                    style={{ background: "transparent" }}
                  >
                    {listRare.length === 0 ? (
                      <FakeFigures />
                    ) : (
                      <CarouselF refi="AB1">
                        {listRare.map(function (item) {
                          return (
                            <FigureTT key={item.id}>
                              <Dge>
                                {/* <NumberApecial>
                                  {item.figure.id <= 10
                                    ? `0${item.figure.id}`
                                    : item.figure.id}
                                </NumberApecial> */}
                                <Imagett
                                  src={
                                    AssetsData.figures[item.figure.id - 1].image
                                  }
                                />
                                <DCbtns>
                                  {item.repeted === false && (
                                    <DCbtnsB id={item.id} onClick={handlePaste}>
                                      <BtnBimage
                                        id={item.id}
                                        src="/storage/images/icons/iconeC.png"
                                      />
                                    </DCbtnsB>
                                  )}

                                  <DCbtnsB
                                    id={item.id}
                                    onClick={handSelectedBuy}
                                  >
                                    <BtnBimage
                                      src="/storage/images/icons/mcons.png"
                                      // src={IconBank}
                                      id={item.id}
                                      onClick={handSelectedBuy}
                                    />
                                  </DCbtnsB>
                                </DCbtns>
                                <TxtCarCards>
                                  <TxtTT>
                                    {item.figure.name.substr(0, 58)}
                                  </TxtTT>
                                  {/* <TxtTTfILL>
                                    {item.figure.description.substr(0, 20)}
                                  </TxtTTfILL> */}
                                </TxtCarCards>
                              </Dge>
                            </FigureTT>
                          );
                        })}
                      </CarouselF>
                    )}
                  </div>
                </div>
              )}
              {/* FINAL CAROUSEL 1 */}

              {/* INICIO CAROUSEL 2 */}
              {listLaunch === null ? (
                <React.Fragment>
                  <div
                    id="carbanc"
                    className="Bank_carousel_A"
                    style={{ background: "transparent" }}
                  >
                    <FakeFigures />
                  </div>
                </React.Fragment>
              ) : (
                <div
                  className="Bank_carousel"
                  style={{ maxWidth: "100%", background: "#FFF" }}
                >
                  <div className="Bank_vender">
                    <h3 className="textH3">
                      Minhas Figurinhas Lançamento (
                      {listLaunch != null && listLaunch.length})
                    </h3>
                  </div>
                  <div
                    id="carbanc"
                    className="Bank_carousel_A"
                    style={{ background: "transparent" }}
                  >
                    {listLaunch.length === 0 ? (
                      <FakeFigures />
                    ) : (
                      <CarouselF refi="AB2">
                        {listLaunch.map(function (item) {
                          return (
                            <FigureTT key={item.id}>
                              <Dge>
                                {/*  <Numbers>
                                  {item.figure.id <= 10
                                    ? `0${item.figure.id}`
                                    : item.figure.id}
                                </Numbers> */}
                                <Imagett
                                  src={
                                    AssetsData.figures[item.figure.id - 1].image
                                  }
                                />
                                <DCbtns>
                                  {item.repeted === false && (
                                    <DCbtnsB id={item.id} onClick={handlePaste}>
                                      <BtnBimage
                                        id={item.id}
                                        src="/storage/images/icons/iconeC.png"
                                      />
                                    </DCbtnsB>
                                  )}
                                  <DCbtnsB
                                    id={item.id}
                                    onClick={handSelectedBuy}
                                  >
                                    <BtnBimage
                                      src="/storage/images/icons/mcons.png"
                                      id={item.id}
                                      onClick={handSelectedBuy}
                                    />
                                  </DCbtnsB>
                                </DCbtns>
                                <TxtCarCards>
                                  <TxtTT>
                                    {item.figure.name.substr(0, 58)}
                                  </TxtTT>
                                  {/* <TxtTTfILL>
                                    {item.figure.description.substr(0, 20)}
                                  </TxtTTfILL> */}
                                </TxtCarCards>
                              </Dge>
                            </FigureTT>
                          );
                        })}
                      </CarouselF>
                    )}
                  </div>
                </div>
              )}

              {/* 3 carousel  */}
              {listMedium === null ? (
                <React.Fragment>
                  <div
                    id="carbanc"
                    className="Bank_carousel_A"
                    style={{ background: "transparent" }}
                  >
                    <FakeFigures />
                  </div>
                </React.Fragment>
              ) : (
                <div className="Bank_carousel" style={{ maxWidth: "100%" }}>
                  <div className="Bank_vender">
                    <h3 className="textH3">
                      Minhas Figurinhas Médias (
                      {listMedium != null && listMedium.length})
                    </h3>
                  </div>
                  <div
                    id="carbanc"
                    className="Bank_carousel_A"
                    style={{ background: "transparent" }}
                  >
                    {listMedium.length === 0 ? (
                      <FakeFigures />
                    ) : (
                      <CarouselF refi="AB3">
                        {listMedium.map(function (item) {
                          return (
                            <FigureTT key={item.id}>
                              <Dge>
                                {/*   <Numbers>
                                  {item.figure.id <= 10
                                    ? `0${item.figure.id}`
                                    : item.figure.id}
                                </Numbers> */}
                                <Imagett
                                  src={
                                    AssetsData.figures[item.figure.id - 1].image
                                  }
                                />
                                <DCbtns>
                                  {item.repeted === false && (
                                    <DCbtnsB id={item.id} onClick={handlePaste}>
                                      <BtnBimage
                                        id={item.id}
                                        src="/storage/images/icons/iconeC.png"
                                      />
                                    </DCbtnsB>
                                  )}
                                  <DCbtnsB
                                    id={item.id}
                                    onClick={handSelectedBuy}
                                  >
                                    <BtnBimage
                                      src="/storage/images/icons/mcons.png"
                                      id={item.id}
                                      onClick={handSelectedBuy}
                                    />
                                  </DCbtnsB>
                                </DCbtns>
                                <TxtCarCards>
                                  <TxtTT>
                                    {item.figure.name.substr(0, 58)}
                                  </TxtTT>
                                  {/* <TxtTTfILL>
                                    {item.figure.description.substr(0, 20)}
                                  </TxtTTfILL> */}
                                </TxtCarCards>
                              </Dge>
                            </FigureTT>
                          );
                        })}
                      </CarouselF>
                    )}
                  </div>
                </div>
              )}
              {/* final 3 carousel */}

              {/* INICIO CAROUSEL 4 comum*/}
              {listCommon === null ? (
                <React.Fragment>
                  <div
                    id="carbanc"
                    className="Bank_carousel_A"
                    style={{ background: "transparent" }}
                  >
                    <FakeFigures />
                  </div>
                </React.Fragment>
              ) : (
                <div
                  className="Bank_carousel"
                  style={{
                    maxWidth: "100%",
                    background: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="Bank_vender">
                    <h3 className="textH3">
                      Minhas Figurinhas Comuns (
                      {listCommon != null && listCommon.length})
                    </h3>
                  </div>
                  <div
                    id="carbanc"
                    className="Bank_carousel_A"
                    style={{
                      background: "transparent",
                    }}
                  >
                    {listCommon.length === 0 ? (
                      <FakeFigures />
                    ) : (
                      <CarouselF refi="AB4">
                        {listCommon.map(function (item) {
                          return (
                            <FigureTT key={item.id}>
                              <Dge>
                                {/*  <Numbers>
                                  {item.figure.id <= 10
                                    ? `0${item.figure.id}`
                                    : item.figure.id}
                                </Numbers> */}
                                <Imagett
                                  src={
                                    AssetsData.figures[item.figure.id - 1].image
                                  }
                                />
                                <DCbtns>
                                  {item.repeted === false && (
                                    <DCbtnsB id={item.id} onClick={handlePaste}>
                                      <BtnBimage
                                        id={item.id}
                                        src="/storage/images/icons/iconeC.png"
                                      />
                                    </DCbtnsB>
                                  )}
                                  <DCbtnsB
                                    id={item.id}
                                    onClick={handSelectedBuy}
                                  >
                                    <BtnBimage
                                      src="/storage/images/icons/mcons.png"
                                      id={item.id}
                                      onClick={handSelectedBuy}
                                    />
                                  </DCbtnsB>
                                </DCbtns>
                                <TxtCarCards>
                                  <TxtTT>
                                    {item.figure.name.substr(0, 58)}
                                  </TxtTT>
                                  {/* <TxtTTfILL>
                                    {item.figure.description.substr(0, 20)}
                                  </TxtTTfILL> */}
                                </TxtCarCards>
                              </Dge>
                            </FigureTT>
                          );
                        })}
                      </CarouselF>
                    )}
                  </div>
                </div>
              )}
              {/* FINAL CAROUSEL 4 */}
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
    const { data } = await apiClient.get("players/me");
    return {
      props: { userData: data },
    };
  }
};
