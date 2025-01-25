import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import * as Icons from "../lib/DevIcons";

export const metadata: Metadata = {
    title: "About | Avin Lad"
};

const ICON_SIZE: number = 24;

export default function About() {
    return (
        <div id="about" className="flex flex-col px-8 justify-center mx-auto">
            <div>
                <h2 className="text-3xl mb-1 font-extrabold">About</h2>
                <h3 className="text-lg">A quick glimpse of me.</h3>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="py-6 lg:mr-16">
                    <p>
                        Currently a Software Developer at{" "}
                        <a className="underline font-semibold" href="https://www.brocksolutions.com/" target="_blank">
                            Brock Solutions
                        </a>
                        , working with large scale systems that spans both frontend and backend development. Experienced
                        with software development from all aspects, whether it's an initial design or deploying to
                        production, I'm always interested in the processes of how we improve the world with technology
                        and the different ways to do so. <br />
                        Some technologies I have been using:
                    </p>
                    <div className="flex justify-center items-center">
                        <ul className="grid grid-cols-2 my-4 list-none gap-x-32 xl:gap-x-48 ">
                            <li className="flex items-center gap-x-2">{Icons.GetReactIcon(ICON_SIZE)}React</li>
                            <li className="flex items-center gap-x-2">
                                {Icons.GetTypeScriptIcon(ICON_SIZE)}Typescript
                            </li>
                            <li className="flex items-center gap-x-2">{Icons.GetNextJSIcon(ICON_SIZE)}Next.js</li>
                            <li className="flex items-center gap-x-2">{Icons.GetDockerIcon(ICON_SIZE)}Docker</li>
                            <li className="flex items-center gap-x-2">{Icons.GetCSharpIcon(ICON_SIZE)}C#</li>
                            <li className="flex items-center gap-x-2">{Icons.GetDotNetCoreIcon(ICON_SIZE)}.NET</li>
                            <li className="flex items-center gap-x-2">{Icons.GetPythonIcon(ICON_SIZE)}Python</li>
                            <li className="flex items-center gap-x-2">{Icons.GetJavaIcon(ICON_SIZE)}Java</li>
                        </ul>
                    </div>
                    <p>
                        I'm always interested in learning new things and travelling to new places! No matter the place I
                        love to explore. I enjoy playing video games, travelling, and sports! I'm an avid badminton
                        player and lately I've been taking up golf.
                    </p>
                </div>
                <div className="min-w-fit self-center drop-shadow-2xl">
                    <Image
                        src={require("/public/images/me.jpg")}
                        alt="avinlad"
                        width={200}
                        className="rounded-3xl md:w-64 xl:w-80"
                    />
                </div>
            </div>
        </div>
    );
}
