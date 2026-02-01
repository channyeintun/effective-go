import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_Myanmar } from "next/font/google";

const notoMyanmar = Noto_Sans_Myanmar({
  weight: ["400", "500", "600", "700"],
  subsets: ["myanmar"],
  variable: "--font-noto-myanmar",
  display: 'block',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={notoMyanmar.className}>
      <Component {...pageProps} />
    </div>
  );
}
