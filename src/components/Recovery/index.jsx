import React, { useState, useContext } from "react";
import {
  ModalFulllB,
  ModelbankInflu,
  ModalPage,
  BtnCloseBank,
  BtnClosed,
  ModalTxtB,
  TxtB,
  InputTxt,
  InputdIV,
  ButtonResgate,
} from "./styles";
import { toast } from "react-toastify";
import Translator from "@/components/I18n/Translator";
import api from "@/services/api";
import AuthContext from "@/contexts/authContext";

export default function Recovery({
  id = "recovery_modal",
  onClose = () => {},
}) {
  const { setLoad } = useContext(AuthContext);
  const [fields, setFields] = useState({
    email: "",
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

  async function handleRecovery() {
    setLoad(true);
    if (fields.email.length >= 10) {
      try {
        const { data } = await api.post("players/recovery", {
          email: fields.email,
        });
        setLoad(false);
        toast.success(data.message);
        onClose();
      } catch (error) {
        setLoad(false);
        console.error(error);
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Ops! Falha ao processr seu pedido");
        }
      }
    } else {
      setLoad(false);
      alert("E-mail Inválido!");
      toast.error("E-mail inválido");
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
                {/* <Translator path="components.promotion_code" /> */}
                Recuperação de Senha
              </TxtB>
            </ModalTxtB>
            <InputdIV>
              <InputTxt
                placeholder="E-mail"
                name="email"
                onChange={handleChange}
              />
            </InputdIV>
            <ButtonResgate onClick={handleRecovery}>
              {/* <Translator path="components.rescue" /> */}
              Recuperar
            </ButtonResgate>
          </React.Fragment>
        </ModalPage>
      </ModelbankInflu>
    </ModalFulllB>
  );
}
