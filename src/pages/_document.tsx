import { Html, Head, Main, NextScript } from "next/document";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "About | Avin Lad"
};

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
