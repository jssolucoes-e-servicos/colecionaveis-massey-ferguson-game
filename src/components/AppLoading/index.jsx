import Translator from "@/components/I18n/Translator";
import React, { useEffect } from "react";

export default function AppLoading() {
  useEffect(() => {
    function setConfigs() {
      handleLoading();
    }
    setConfigs();
  }, []);

  function handleLoading() {
    var text = document.querySelector(".textF");
    var percent = document.querySelector(".percentF");
    var progress = document.querySelector(".progressF");
    var count = 4;
    var per = 16;
    var loading = setInterval(animate, 50);
    function animate() {
      if (count === 100 && per === 400) {
        text.textContent = "Completo";
        text.style.fontSize = "20px";
        text.classList.add("addF");
        clearInterval(loading);
      } else {
        per = per + 4;
        count = count + 1;
        progress.style.width = per + "px";
        percent.textContent = count + "%";
      }
    }
  }
  return (
    <React.Fragment>
      <section className="loadingmaster">
        <div className="loadingF">
          <div className="textF">
            <Translator path="components.loading" />
            ...
          </div>
          <label className="percentF">100%</label>
          <div className="progress-barF">
            <div className="progressF"></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
