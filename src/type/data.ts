export enum MenuKey {
  SUMMARY = "SUMMARY",
  CAREER = "CAREER",
  EDUCATION = "EDUCATION",
  CAREER_DESCRIPTION = "CAREER_DESCRIPTION",
  CERTIFICATE = "CERTIFICATE",
  TRAINING = "TRAINING"
}

export interface Menu {
  name: string;
  key: MenuKey;
}

export interface JeYeonjuData {
  title: string;
  description: string;
  menus: Menu[];
}