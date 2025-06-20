export interface MultiLangText {
  th: string;
  en: string;
  [langCode: string]: string; // Support additional languages
}