import React from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
    return (
        <div
            id="homepage"
            className="flex flex-col h-screen text-center justify-center items-center mx-auto leading-relaxed"
        >
            <div className="waving-hand text-8xl mb-4">👋🏽</div>
            <div className="text-6xl">
                <TypeAnimation
                    sequence={["hi! i'm avin.", 2000]}
                    wrapper="span"
                    speed={1}
                    className="text-6xl font-bold tracking-wide"
                    repeat={Infinity}
                />
            </div>
            <div>
                <span className="text-4xl leading-relaxed">I create things sometimes.</span>
                <br />
                <span className="text-xl leading-relaxed">
                    I'm a software engineer based in Toronto. Aimed at positively impacting large scale products and
                    services.
                </span>
            </div>
            <div className="my-4">
                <a href="mailto:avinlad@gmail.com">
                    <Button className="p-8 text-lg text-center">
                        <Send className="mr-2 h-8 w-8" />
                        Let's Connect!
                    </Button>
                </a>
            </div>
        </div>
    );
}
