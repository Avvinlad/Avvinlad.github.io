import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "About | Avin Lad"
};

export default function Experience() {
    return (
        <div id="experience" className="flex flex-col px-8 justify-center mx-auto">
            <div>
                <h2 className="text-3xl mb-1 font-extrabold">Work</h2>
                <h3 className="text-lg">What I Do Best.</h3>
            </div>
            <div className="flex flex-row my-6 mx-auto lg:w-11/12">
                <Accordion className="w-full" type="single" defaultValue="item-1">
                    {EXPERIENCE.map((exp, index) => {
                        return (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger>
                                    <div className="flex items-center">
                                        <Image
                                            src={require(`/public/images/${exp.imagePath}`)}
                                            alt={exp.name}
                                            width={50}
                                            className="rounded-full"
                                        />
                                        <span className="ml-4 text-xl">{exp.name}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>{exp.description}</AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </div>
    );
}

const EXPERIENCE = [
    {
        name: "Brock Solutions",
        imagePath: "brock_solutions.png",
        description: (
            <div className="lg:mx-16">
                <p className="text-lg lg:text-xl">Software Developer</p>
                <p className="text-md">September 2022 - Present</p>
                <ul className="grid gap-y-2 my-3 list-disc mx-4">
                    <li>
                        Created a modern web application to production for efficiently modifying, managing, and
                        monitoring manufacturing plant and data.
                    </li>
                    <li>
                        Streamlined deployments through automation, reducing total deployment time by 25% for mission
                        critical application.
                    </li>
                    <li>
                        Connected MES application and business communication platform using an API for MES information
                        transmission between applications.
                    </li>
                </ul>
            </div>
        )
    },
    {
        name: "NGen Canada",
        imagePath: "ngen_canada.png",
        description: (
            <div className="lg:mx-16">
                <p className="text-lg lg:text-xl">Data Analyst</p>
                <p className="text-md ">January 2022 - April 2022</p>
                <ul className="grid gap-y-2 my-3 list-disc mx-4">
                    <li>
                        Boosted stakeholder productivity through the utilization of previously untapped data for
                        stakeholders by 50%.
                    </li>
                    <li>
                        Leveraged Microsoft Power BI to present data-driven reports and support goal setting to various
                        stakeholders.
                    </li>
                    <li>
                        Consolidated data sources and automated data export from MongoDB for improved membership
                        management.
                    </li>
                </ul>
            </div>
        )
    },
    {
        name: "LogiSense",
        imagePath: "logisense.png",
        description: (
            <div className="lg:mx-16">
                <p className="text-lg lg:text-xl">Software Developer</p>
                <p className="text-md ">May 2021 - August 2021</p>
                <ul className="grid gap-y-2 my-3 list-disc mx-4">
                    <li>
                        Constructed responsive pages and components using JavaScript for modern UI and user engagement.
                    </li>
                    <li>Coordinated cross-team development of large web pages to meet deadlines.</li>
                    <li>Presented projects to colleagues, incorporating feedback for excellence.</li>
                </ul>
            </div>
        )
    },
    {
        name: "SoCast Digital",
        imagePath: "socast.png",
        description: (
            <div className="lg:mx-16">
                <p className="text-lg lg:text-xl">Junior Developer</p>
                <p className="text-md ">September 2020 - December 2020</p>
                <ul className="grid gap-y-2 my-3 list-disc mx-4">
                    <li>Reduced reported client tickets by 30% from fixing bugs and making enhancements using PHP.</li>
                    <li>Debugged issues using AWS and Elasticsearch, ensuring long-term success of adjustments.</li>
                </ul>
            </div>
        )
    },
    {
        name: "Hippos Software",
        imagePath: "hippos_software.png",
        description: (
            <div className="lg:mx-16">
                <p className="text-lg lg:text-xl">Junior Software Developer</p>
                <p className="text-md ">May 2019 - August 2020</p>
                <ul className="grid gap-y-2 my-3 list-disc mx-4">
                    <li>
                        Developed a mobile application using React Native for Clover Flex devices, improving restaurant
                        table service.
                    </li>
                    <li>
                        Improved app performance by 20% through component render optimizations and API call
                        optimizations.
                    </li>
                </ul>
            </div>
        )
    }
];
