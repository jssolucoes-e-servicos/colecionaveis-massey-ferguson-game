import React from "react";
import { useTranslation } from "react-i18next";
import Flag from "./Flag";

const I18n = () => {
  const { i18n } = useTranslation();
  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
  }

  const selectedLanguage = i18n.language; // Idioma selecionado
  return (
    <div className="flags-container" style={{ marginTop: 10 }}>
      {/* Bandeira do Brasil */}
      <Flag
        image={Flags.Brazil}
        isSelected={selectedLanguage === "pt-BR"} // Verifica o idioma escolhido
        onClick={() => handleChangeLanguage("pt-BR")} // Troca o idioma para pt-BR
      />
      {/* Bandeira da Espanha */}
      <Flag
        image={Flags.Espanish}
        style={{ marginLeft: 5 }}
        isSelected={selectedLanguage === "es"} // Verifica o idioma escolhido
        onClick={() => handleChangeLanguage("es")} // Troca o idioma para es
      />
    </div>
  );
};

export default I18n;

const Flags = {
  Brazil:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABTCAMAAACS2miYAAAA/FBMVEUAmzr+3wAAJ3b/4wAAlzwAmTsAlT3///8AJXWDtC3/6AD/5QAAIXQAI3QAE3kAHHIAAGvx2wzGyxydvSdMpTUAHXgAAHporTE8ojfT0BiswiTx1xfizSbbxi3BrD8AGHh6cV5uaWKsnUhHS2xqZWPm1xEACXq4xiEAE28mnTlCR21mYmXVwDB7dVxERG4hL3SlmEvJuTczRIRnb5wAHYVRV4+Cf6mFibAoOn/w68WhzrKu2bfd8eCk1KzK58652bzo5++/wdWWmLXa7+1ount1v4e8ys1UYJP/9aKsz7rY3+LNztuYq7OrtMOUy52rqMaAfHfJ29P/+dvp2ob0Rsp6AAAEZ0lEQVRoge1ZWXvaOBQVXrBiZMtZ7LQNCSVNitqkdWuPMTPGgEkbWmjIdOb//5eR2SxAJiQY/DCcB74syMdHuufeKwmAPfbYY4+dQZbkPGiLp9enxZ2zyuBILIhHYLeSZemgMMbBLidbevVanPCKr19JO2KVi8cFFsfFnUiWTg7FOV7x8GT7kmXwplRYhPhm2/FVPF0QO5W8VUuNzMPHFi2VmIePLVmKmme2sqJaOiufn5+Xz0rqbAZK27CULCXmUQsXnz7bFcuyKvbnTxf095mlspYsnVxPdanlt7puIggFQYAQmbr+tjxlFq8ztZQsz8xTKlctM6ZMAE2rWp79vyZnJpkxj3qpm8IyTP1yJjkrS8lyYh6xakEOLdVsVZMvHWUged4873Quawz9XZaWYs1TED9WUmkFofIxySkbWoo1D13bq3S1I8VXKvPtDSzFmCem/fJ+Ja0gvP/CEL/YUrJcm6s8ZZ0fUgmgXmYHvMxS0kLlKd1UMAUx6QfS+MTmzdybUks9V/JS5RFv//Dcet2nqLtewzAMgpaJrduFUc+sUsXlyvPnX0oQNMNWECphW1E6UdcbcyOG36yqi+MO1s8iTNs2w9ldqx2GzXY7aCvfvivKN8rduu962HB7DLF1uDhw7cZPlo85xf2H8rPfH0S/oodfg/t+Rxk2FeX7sBn2H7suE3D65fJY8Xid+Jo3zxTq345N19TQ4w+DCE7Pj/qKEg6bQbvjG2TKjG+WJnotS8lSjdvJqBjbA3tmGKghQtn96E4Jg1bY6eoTZog4vJS5tjqLUPPwhtHlrUDBXXAP1LBhuPdKEN4Nm11MRn+rnPEfsMpS8ofUtu1cp1J4lsWG3f3dCprBz7oRv5d+nvIE8ehDiuQVbZv4lU3NbN7SPN9Afr8VNpv3NpWsf0179TRLSbXlhnzGe8HkZq3BTriGBEgMv62EoUIlr+It1bhzva5eMkCLmRoSFLXbrSASrGfrfWp9E0x/Jiyz0euEQ+V34zbt1VPX96l4HvmHDalHPBdh5IFmUuUF8QxW+DeeWmgjNwlqjF3M5mYqud4KFL7YJ/wLUvPVjQk1Z5DUIGh3McK+O2cu4nT+4bGu1QJw87N4GS8qDWSIp0wNh76JnZAiImim+S+Hdq38DPj16NB66MVzTSJnssa4p7FOxn6XeJ61tLzPOohYrr9q1UBjVTAROOdjxyNO42qT+gu4/YY1erpXnwYxFAbMLNOZ6Lp4034D8PorUxinSDKZXuzj2Foj6RrV27A3769AWj8JIfajSeKIaQUHCiZyHYwfHJRFPwnS+mcoMGlS81xEHoknuK6hZdM/g7T9ApyrRxhqNnY9jLPbL4B19kck8hDqeVqW+yOwej84shEcxxTMdj8IVux/kTdNXajnZL3/jZGy34dJuqpsYb8PcjvfAHmd54Dczq9AXud1ILfzSZDXeWyMfM6fQW7n7SCv+wWQ230KyOv+COR2Xwbyuh+Mkc99KMjt/nePPfb4v+I/okZ7dNOk7DoAAAAASUVORK5CYII=",
  Espanish:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABPCAMAAADmzqp4AAABklBMVEXGCx7/xAD/zQDFAB7RSRr/xgD/yAD/ywCfOhSxjgirXxH8wgCqABqufgytbA+zngDruADboAftuiKuABKxqp6hAAC+eQ27bA/XrACiJhbAnxfyvA3tuir2vyFqd2XKpDnpuTParzq7mi6KgDy/oECmjzCfjUGblVnFpjjysQbflQbMeQisKheaAA2op2mbQRXIZRDGizGsmD22WwugUiGkMhSljwChcRy0OxXMpy2dcwGnTjmXUwyjPT6ngQChaQ2rUw+cTkmgXwqeVUHkrQWRhRiNjhqyoiiPYQCljyB3gSaSeAC+kAaCXQ2FUwuGcgqJRgp6ZhHPigyDGQ6KLSKaaFygeFyqkF/Lr2PbuF3U3d6Wl4HGy87Hu6KwfpDCurehYnjgapK+kqmts8DJhKPbeKXaZJu2pqvJZI+hdnlFSLdDV6yMOEGrj5elioCxQQCSABhxc1STFTlKRJhjHWWdVl2UIEubKSs+ZqJ7h2lzDDtIZYhHZndsNni1bTUiSa5miUhneIfBkWLBpYiUhWRslJLaVKcUAAADTklEQVRoge2Y7VfSUBjA2erezXZVJrANlq8ohUJUpCGBToOSCEFMA9qi1FxmE3oxTbKy8v/uQi+ePgAftjU/7Lezc3bul9957r3PffZch8PGxsbGxsbGxmQuWIPjojU4SGtwENZw3r3AGi9wMlZ4AfSJxkbc3QsAEC8PDg1fHsRfhsm7eYE4Mjo6Nuvz43d8dGTAKHEXLxiYEIQASTFXBIr0XRXGhg0Sd4s3wAQnA1Oh8LUIuj52I0hNGBRxFy9zM4rQrWmEZmgXuo1QLDPyX7xw9hIKxeN3ehNzybl5CU1PmD/Prd0L2fgCvZiQ5qXbdOJuYq41ZqoXMGwKG2Aqm0nfu7+UmXmQyT7EWsAIBpwh7b2Qzi3zFIAkm87nlguJxFJ2jsRzkIoUIinds93B68utOKFYLBbnC4XVR2tr649L5fIoANlcljHT29/f76NYhBAdQq6FSqUiP5FlBTjxuNNEL5j1+1MQeyO5gte1ID+tPnvu3lAIEPAH9C9wB29J3hzAXm9+KZ/A3o2tF9uqrBCEIrt1a7t5yaY3nV7G86y+3N6oVhUIzfUCsqTtcMUi8rzK777GXk3ewGJlcmpd24O6U7idFzC1KH5CdYRW8umIy6vK6ta2WtE8UizKT7N6xW29qfDd6qYQ5FAhvfsm9/bd+31N1bZkd1BUqns1njLJS5DR/Yq8KrIo7P1wEB46/HhUrVSrFYWKqrLm0Z1I7fcVWZb3wqyQiEQWV+uHjU/HCzuYdcqzL7sp8/IXiJ/rnilK6O271BOhv7zZPerjeI6LkcEDT1L38nbYV+hgB+dvy0v31I+PJImL8TxNQUVNhifN2lcEOV2q/PX2e+O1GBfFYprC54YSZU1bXxBsnVd/vD01nvvay//yus2bZ1wX/vVK0Wa83C+v/p+OTnUw4D/zZly9MS7ESRIFbgZMrQtwBtdBCOdbXo+S5Hm8s7wsbNZBwbw8go8bJyeNYRiMSz2xGe3b92SNr9WLFDhpojvg9t4fjUbjcBwCyAY0+XTodFNd63NCgmk0x83zAiccEIlmNwYpZqRcKpVF2DqmnFAwoDvsUH+J5s/j729w1pMBAhjQDZ/3ft9wr1X3OVbdX1l1X2djY2NjY2NjYzI/ATFzq0dggDl0AAAAAElFTkSuQmCC",
};
