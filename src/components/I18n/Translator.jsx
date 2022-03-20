import { useTranslation } from "react-i18next";
const Translator = ({ path }) => {
  const { t } = useTranslation(); // Função que traduz
  return t(path);
};
export default Translator;
