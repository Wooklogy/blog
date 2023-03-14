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
                {/* 
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Poppins:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                /> */}
                <link rel="icon" href="blog/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
