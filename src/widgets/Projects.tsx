import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Music, CandlestickChart, Pi, Github } from "lucide-react";

const ICON_SIZE = 20;

export default function Projects() {
    return (
        <div id="projects" className="flex flex-col px-8 justify-center mx-auto">
            <div>
                <h2 className="text-3xl mb-1 font-extrabold">Projects</h2>
                <h3 className="text-lg">On My Spare Time.</h3>
            </div>
            {/* DESKTOP */}
            <div className="hidden lg:flex justify-center mx-auto my-6 w-2/3 xl:w-full">
                <div className="flex">
                    <Carousel className="flex mx-auto">
                        <CarouselContent>
                            {PROJECTS.map((project) => (
                                <CarouselItem key={project.name}>
                                    <div className="p-2">
                                        <Card>
                                            <CardContent className="flex items-center justify-center">
                                                <div className="w-full p-8">
                                                    <div className="flex flex-row justify-between text-center mb-4">
                                                        <p className="text-3xl mb-3 font-bold">{project.name}</p>
                                                        <button className="flex border rounded-2xl px-4 py-2 justify-center items-center text-center">
                                                            <Github size={ICON_SIZE} />
                                                            <a
                                                                href={project.link}
                                                                target="_blank"
                                                                className="ml-2 underline"
                                                            >
                                                                Github
                                                            </a>
                                                        </button>
                                                    </div>
                                                    <div>{project.description}</div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
            {/* MOBILE */}
            <div className="flex flex-row my-6 mx-auto w-full lg:hidden">
                <Accordion className="w-full" type="single" defaultValue="item-1">
                    {PROJECTS.map((project, index) => {
                        return (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger>
                                    <div className="flex items-center gap-x-4">
                                        <span className="p-2 border-2 rounded-xl">{project.icon}</span>
                                        <span className="text-center text-xl font-bold">{project.name}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col justify-between w-full">
                                        {/* Text content */}
                                        <div className="">{project.description}</div>

                                        {/* Button */}
                                        <div className="flex flex-row justify-end p-4 mr-4">
                                            <button className="flex border rounded-2xl px-4 py-2 justify-center items-center text-center">
                                                <Github size={ICON_SIZE} />
                                                <a href={project.link} target="_blank" className="ml-2 underline">
                                                    Github
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </div>
    );
}

const PROJECTS = [
    {
        name: "Spotify Analyzer",
        icon: <Music size={ICON_SIZE} />,
        link: "https://github.com/avvinlad/spotify_analyzer",
        description: (
            <div className="">
                <p className="text-lg">An application for in-depth analysis into your Spotify playlists.</p>
                <ul className="grid gap-y-2 my-3 list-disc mx-8 lg:mx-12">
                    <li>Uses OAuth 2.0 and Spotify API to retrieve account and music information.</li>
                    <li>
                        Extracts information such as song popularity, audio features (tempo, energy, danceability), and
                        artist information.
                    </li>
                    <li>Ability to extract the data into a CSV for further data manipulation.</li>
                </ul>
            </div>
        )
    },
    {
        name: "Edgar Search",
        icon: <CandlestickChart size={ICON_SIZE} />,
        link: "https://github.com/avvinlad/edgar_search",
        description: (
            <div className="">
                <p className="text-lg font-semibold">Tracking insider stock trades at your favourite companies.</p>
                <ul className="grid gap-y-2 my-3 list-disc mx-8 lg:mx-12">
                    <li>
                        Leverages the EDGAR Search and Access for publicly traded companies, showing who bought and sold
                        stock.
                    </li>
                    <li>Provides a history of data for any recent or old trades which occurred.</li>
                </ul>
            </div>
        )
    },
    {
        name: "FindPi",
        icon: <Pi size={ICON_SIZE} />,
        link: "https://github.com/avvinlad/FindPi",
        description: (
            <div className="">
                <p className="text-lg font-semibold">How is it we came up with the value of π ?</p>
                <ul className="grid gap-y-2 my-3 list-disc mx-8 lg:mx-12">
                    <li>
                        There are several ways to solve for π, this creative method is by using a certain number of data
                        points from (0, 1) and a circle.
                    </li>
                    <li>
                        Then find the amount of data points within a quarter circle and the total amount of data points
                        which gives an approximation.
                    </li>
                </ul>
            </div>
        )
    }
];
