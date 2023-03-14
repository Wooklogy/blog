import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import DefaultLayout from "@/views/default.layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Head>
                <title>놀고먹는 Wooklogy</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
        </RecoilRoot>
    );
}
