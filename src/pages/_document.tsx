import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="놀고먹는 개발자 장현욱(Wooklogy)입니다. 쉽게 편하게 개발하는게 목표이자 직업정신입니다 ^^~ "
        />

        {/* <meta
                httpEquiv="Content-Security-Policy"
                content="upgrade-insecure-requests"
              ></meta> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="blog/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
