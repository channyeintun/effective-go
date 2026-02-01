import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="my">
      <Head>
        <link rel="icon" href="/favicon-gopher.png" sizes="any" />
        <link rel="icon" href="/favicon-gopher.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-gopher-plain.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
