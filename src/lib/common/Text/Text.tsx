import enContent from "src/public/i18n/en.json";
import ptContent from "src/public/i18n/pt.json";

type ContentType = typeof enContent;

type IText = {
  path: keyof ContentType;
};

const getDefaultLanguage = () => {
  return navigator.language.startsWith("pt") ? "pt" : "en";
};

export const Text = (props: IText) => {
  const { path } = props;
  const language = getDefaultLanguage();
  const content = (language === "pt" ? ptContent : enContent) as ContentType;
  return content[path] || `NO_TEXT_${path}`;
};

export default Text;
