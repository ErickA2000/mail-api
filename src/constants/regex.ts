export const matchKey = (key: string): RegExp => {
  return new RegExp(`{${key}}`, "g");
};
