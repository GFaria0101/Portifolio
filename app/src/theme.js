export const blackTheme = {
  body: "#000000",
  text: "#ffffff",
  blue: "#1179f7",
  orange: "#ffa500",
  grayText: "#6c757d",
};

export const lightTheme = {
  body: "#ffffff",
  text: "#000000",
  blue: window.getComputedStyle(document.body).getPropertyValue('--themeBlue'),
  orange: window.getComputedStyle(document.body).getPropertyValue('--themeOrange'),
  grayText: "#6c757d",
};

export const chosenTheme = lightTheme;
