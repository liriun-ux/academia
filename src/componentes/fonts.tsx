import localFont from "next/font/local";

export const serifFont = localFont({
  src: [
    {
      path: "../../public/fonts/evogria/Evogria.otf",
      style: "normal",
    },
    {
      path: "../../public/fonts/evogria/Evogria Italic.otf",
      style: "italic",
    },
  ],
  variable: "--font-serif",
});

export const sansFont = localFont({
  src: [
    {
      path: "../../public/fonts/louis_george_cafe/Louis George Cafe.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/louis_george_cafe/Louis George Cafe Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/louis_george_cafe/Louis George Cafe Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/louis_george_cafe/Louis George Cafe Light Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/louis_george_cafe/Louis George Cafe Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/louis_george_cafe/Louis George Cafe Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-sans",
});


export const heroFont = localFont({
  src: [
    {
      path: "../../public/fonts/brunson/Brunson.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-hero",
});


export const gontserratFont = localFont({
  src: [
    {
      path: "../../public/fonts/gontserrat/Gontserrat-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/gontserrat/Gontserrat-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },

    {
      path: "../../public/fonts/gontserrat/Gontserrat-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/gontserrat/Gontserrat-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },

    {
      path: "../../public/fonts/gontserrat/Gontserrat-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/gontserrat/Gontserrat-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },

    {
      path: "../../public/fonts/gontserrat/Gontserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/gontserrat/Gontserrat-Italic.ttf",
      weight: "400",
      style: "italic",
    },

    {
      path: "../../public/fonts/gontserrat/Gontserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/gontserrat/Gontserrat-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },

    {
      path: "../../public/fonts/gontserrat/Gontserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/gontserrat/Gontserrat-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },

    {
      path: "../../public/fonts/gontserrat/Gontserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/gontserrat/Gontserrat-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },

    {
      path: "../../public/fonts/gontserrat/Gontserrat-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/gontserrat/Gontserrat-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },

    {
      path: "../../public/fonts/gontserrat/Gontserrat-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/gontserrat/Gontserrat-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-gontserrat",
});
