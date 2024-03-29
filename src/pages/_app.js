import "@/styles/globals.css";
import localFont from "next/font/local";
import "../styles/globals.css";
const arame = localFont({
  src: [
    {
      path: "../../public/fonts/arame/Arame-Stencil.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/arame/Arame-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/arame/Arame-Mono.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/arame/Arame-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/arame/Arame-Regular.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
const moderat = localFont({
  src: [
    {
      path: "../../public/fonts/moderat/Moderat-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/moderat/Moderat-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/moderat/Moderat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/moderat/Moderat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/moderat/Moderat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`min-h-screen   ${arame?.className} `}
    >
      <Component {...pageProps} />
    </main>
  );
}
