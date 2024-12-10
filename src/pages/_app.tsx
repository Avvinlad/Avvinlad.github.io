import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import type { AppProps } from "next/app";

export const fontSans = FontSans({
    subsets: ["latin-ext"],
    variable: "--font-sans"
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div
            className={`flex-col mx-auto w-full lg:w-2/3 min-h-screen leading-loose ${cn(
                "font-sans",
                fontSans.variable
            )}`}
        >
            <Component {...pageProps} />
        </div>
    );
}
