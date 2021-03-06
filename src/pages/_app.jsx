import "@/assets/css/Bank.css";
import "@/assets/css/launcher.css";
import "@/assets/css/modalalert.css";
import { GameProvider } from "@/contexts/gameContext";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "react-multi-carousel/lib/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../I18n";
function MyApp({ Component, pageProps }) {

  return (
    <GameProvider>
      <React.Fragment>
        <Head>
          <title>Colecionáveis Massey Ferguson</title>
        </Head>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossOrigin="anonymous"
        ></Script>
        <Script src="https://code.jquery.com/jquery-3.5.1.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></Script>
        <audio
          id="audioBackground"
          loop
          autoPlay={false}
          src="https://3sdigital.com.br/videovaltra/audiogame/Kingdom-sticks.mp3"
        />
        <Component {...pageProps} />
        <ToastContainer />
      </React.Fragment>
    </GameProvider>
  );
}

export default MyApp;
