import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Projects() {
    return (
        <div id="projects" className="my-4 mb-16">
            <div>
                <h2 className="text-3xl mb-1 font-extrabold">Projects</h2>
                <h3 className="text-lg">On My Spare Time.</h3>
            </div>
            <div className="flex my-6">
                <div className="flex max-w-full">
                    <Carousel className="">
                        <CarouselContent>
                            {PROJECTS.map((project, _) => (
                                <CarouselItem key={project.name}>
                                    <div className="p-2">
                                        <Card className="">
                                            <CardContent className="flex h-80 items-center justify-center p-6">
                                                {project.description}
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
        </div>
    );
}

const PROJECTS = [
    {
        name: "Spotify Analyzer",
        description: (
            <div className="">
                <p className="text-3xl mb-3 font-bold">Spotify Analyzer</p>
                <p className="text-lg font-semibold">
                    An application for in-depth analysis into your Spotify playlists.
                </p>
                <ul className="grid gap-y-2 my-3 list-disc mx-12">
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
        description: (
            <div className="">
                <p className="text-3xl mb-3 font-bold">EDGAR Search</p>
                <p className="text-lg font-semibold">Tracking insider stock trades at your favourite companies.</p>
                <ul className="grid gap-y-2 my-3 list-disc mx-12">
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
        description: (
            <div className="">
                <p className="text-3xl mb-3 font-bold">FindPI</p>
                <p className="text-lg font-semibold">How is it we came up with the value of π ?</p>
                <ul className="grid gap-y-2 my-3 list-disc mx-12">
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
