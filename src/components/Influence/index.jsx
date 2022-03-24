import Fakepacote from "@/assets/images/icons/pacotefigurinha.png";
import Translator from "@/components/I18n/Translator";
import GameContext from "@/contexts/gameContext";
import api from "@/services/api";
import AssetsData from "@/services/data.json";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import {
    BtnCloseBank,
    BtnClosed, ButtonResgate, FotoFiguri, FotoFiguriPadrao, InputdIV, InputTxt, ModalAnimaBooton, ModalFulllB, ModalImB, ModalPage, ModalResFull, ModalTxtB, ModelbankInflu, TxtB
} from "./styles";


export default function Influecer({
  id = "influencer_modal",
  onClose = () => {},
}) {
  const { setLoad } = useContext(GameContext);
  const [figure, setFigure] = useState(null);
  const [fields, setFields] = useState({
    token: "",
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFields((values) => ({
      ...fields,
      [key]: value,
    }));
  }

  const HandleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  function animations() {
    let btn = document.querySelector("#InfluencePremier");
    btn.classList.add("active");
    btn.style.display = "flex";
    setTimeout(function () {
      onClose();
    }, 7000);
  }

  async function handleRescue() {
    setLoad(true);
    setFigure(null);
    if (fields.token.length >= 3) {
      try {
        const { data } = await api.post("influencers-useds/insert", {
          token: fields.token.toUpperCase(),
        });
        toast.info(data.message);
        setLoad(false);
        if (data.figure) {
          setFigure(AssetsData.figures[data.figure.id - 1].image);
          animations();
        }
      } catch (error) {
        setLoad(false);
        console.error(error);
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Ops! Falha ao processr seu código");
        }
      }
    } else {
      setLoad(false);
      toast.error("Código inválido");
    }
  }

  return (
    <ModalFulllB id={id} onClick={HandleOutsideClick}>
      <ModelbankInflu>
        <ModalPage>
          <React.Fragment>
            <BtnCloseBank>
              <BtnClosed onClick={onClose}>X</BtnClosed>
            </BtnCloseBank>
            <ModalTxtB>
              <TxtB>
                <Translator path="components.promotion_code" />
              </TxtB>
            </ModalTxtB>
            <InputdIV>
              <InputTxt
                placeholder="Digite seu código promocional"
                name="token"
                onChange={handleChange}
              />
            </InputdIV>
            <ModalResFull>
              <ButtonResgate onClick={handleRescue}>
                <Translator path="components.rescue" />
              </ButtonResgate>
            </ModalResFull>
            <ModalAnimaBooton>
              <FotoFiguriPadrao src={Fakepacote} />
              <ModalImB>
                {figure != null ? (
                  <FotoFiguri src={figure} id="InfluencePremier" />
                ) : (
                  // <FotoFiguri src={Fakeimagem} />
                  <FotoFiguri src="/storage/images/icons/ImageBg.png" />
                )}
              </ModalImB>
            </ModalAnimaBooton>
          </React.Fragment>
        </ModalPage>
      </ModelbankInflu>
    </ModalFulllB>
  );
}
