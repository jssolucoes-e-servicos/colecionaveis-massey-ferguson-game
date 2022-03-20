import React, { useState, useEffect } from "react";
import {
  ModalFulllB,
  Modelbank,
  ModalPage,
  BtnCloseBank,
  BtnClosed,
  ModalTxtB,
  ModalImB,
  FotoFiguri,
  FotoFiguriPadrao,
  TxtB,
  ModalAnimaBooton,
} from "./modbank";
import api from "@/services/api";
import AssetsData from "@/services/data.json";
import Translator from "@/components/I18n/Translator";
import Fakepacote from "@/assets/images/icons/pacotefigurinha.png";

export default function ModelBanks({
  children,
  album_id = null,
  type,
  id = "Medel",
  onClose = () => {},
}) {
  const HandleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  const [search, setSearch] = useState(false);
  const [dataView, setDataView] = useState(null);

  useEffect(() => {
    async function getData() {
      if (album_id != null) {
        setSearch(true);
        if (type === "out") {
          const albums = await api.get(`albums/show/${album_id}`);
          setDataView(albums.data.album.figure_id);
        } else {
          const stands = await api.get(`stands/show/${album_id}`);
          setDataView(stands.data.stand.figure_id);
        }
        setSearch(false);
        album_id = null;
      }
    }
    getData();
  }, []);

  return (
    <ModalFulllB id={id} onClick={HandleOutsideClick}>
      <Modelbank>
        <ModalPage>
          {search === true ? (
            <React.Fragment>
              <h3>
                <Translator path="components.seeking" />
                ...
              </h3>
            </React.Fragment>
          ) : dataView != null ? (
            <React.Fragment>
              <BtnCloseBank onClick={onClose}>
                <BtnClosed>X</BtnClosed>
              </BtnCloseBank>
              <ModalTxtB>
                {type === "out" ? (
                  <TxtB>
                    <Translator path="components.sale_figure" />
                    {` ${AssetsData.figures[dataView - 1].name}`}
                    <Translator path="components.sale_to_stand" />
                    {` MP ${AssetsData.figures[dataView - 1].coin}?`}
                  </TxtB>
                ) : (
                  <TxtB>
                    <Translator path="components.buy_figure" />
                    {` ${AssetsData.figures[dataView - 1].name}`}
                    <Translator path="components.buy_of_stand" />
                    {` MP ${AssetsData.figures[dataView - 1].coin}?`}
                  </TxtB>
                )}
              </ModalTxtB>

              <ModalImB>
                <FotoFiguriPadrao src={Fakepacote} />
                <FotoFiguri src={AssetsData.figures[dataView - 1].image} />
              </ModalImB>

              <ModalAnimaBooton> {children}</ModalAnimaBooton>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h3>
                <Translator path="components.loading" /> ...
              </h3>
            </React.Fragment>
          )}
        </ModalPage>
      </Modelbank>
    </ModalFulllB>
  );
}
