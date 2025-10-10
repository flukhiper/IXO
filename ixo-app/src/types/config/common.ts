export interface LocalizeText {
  [local: string]: string;
}

export interface BaseConfig {
  id: string;
  name: LocalizeText;
  description?: LocalizeText;
  gameSystemId: string;
}