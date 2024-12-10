import React from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
    return (
        <div
            id="homepage"
            className="flex flex-col h-screen text-center justify-center items-center mx-auto gap-y-4 leading-relaxed"
        >
            {/* ANIMATION AND HEADING */}
            <div className="waving-hand mb-4 text-7xl lg:text-8xl">👋🏽</div>
            <div>
                <TypeAnimation
                    sequence={["hi! i'm avin.", 2000]}
                    wrapper="span"
                    speed={1}
                    className="font-bold text-center tracking-wide text-5xl lg:text-6xl"
                    repeat={Infinity}
                />
            </div>
            {/* TAGLINE */}
            <div className="flex flex-col">
                <span className="leading-relaxed text-2xl lg:text-4xl">I create things sometimes.</span>
                <br />
                <span className="leading-relaxed px-8 text-lg lg:text-xl">
                    I'm a software engineer based in Toronto. Aimed at positively impacting large scale products and
                    services.
                </span>
            </div>
            {/* CONNECT WITH ME */}
            <div className="my-8">
                <a href="mailto:avinlad@gmail.com">
                    <Button className="text-center p-8 text-base lg:text-lg">
                        <Send className="mr-2 h-8 w-8" />
                        Let's Connect!
                    </Button>
                </a>
            </div>
        </div>
    );
}
