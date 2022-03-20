import React, { createContext, useState } from "react";
import api from "../services/api";

const AuthContext = createContext({});

const UserModel = {
  id: 0,
  name: "",
  email: "",
  phone: "",
  birth: "",
  country: "",
  provincy: "",
  city: "",
  address: "",
  language: "",
  photo: "",
  audio_play: false,
  rules_accept: true,
  score: 0,
  cash: 0,
  premiers: 0,
  stands: 0,
  videos: 0,
};

export const AuthProvider = ({ children }) => {
  const [PlayAudio, setPlayAudio] = useState(false);
  //const [AcceptRule, setAcceptRule] = useState(false);


  const [load, setLoad] = useState(false);
  const [overrideRestart, setOverrideRestart] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [click, setClick] = useState(false);
  const [paginate, setPaginate] = useState(false);
  const [UserData, setUserData] = useState(UserModel);
  const [loadinColor, setLoadinColor] = useState("red");

  
  async function AcceptRule() {
    setUserData((values) => ({
      ...values,
      rules_accept: true,
    }));
    await api.get("players/rules");
  }

  async function changeLanguague() {
    setUserData((values) => ({
      ...values,
      language: true,
    }));
    await api.post("players/language", {
      language: localStorage.getItem("i18nextLng"),
    });
  }

  return (
    <AuthContext.Provider
      value={{
     
        load,
        setLoad,
     
       
        PlayAudio,
        AcceptRule,
        overrideRestart,
        setOverrideRestart,
        isMobile,
        setIsMobile,
        loadinColor,
        setLoadinColor,
        click,
        setClick,
        paginate,
        setPaginate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
