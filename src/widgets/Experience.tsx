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
                        Collaborated on the development of a new test-driven data engine to gather and display airport
                        baggage and flight information, delivering an accessible interface that improved employee
                        insights by providing real-time access to critical operational data used by 250+ users.
                    </li>
                    <li>
                        Developed a modern web application using React and Python for managing manufacturing plant data,
                        increasing application performance and reducing data fetching time by 20%.
                    </li>
                    <li>
                        Streamlined deployments using CI/CD pipeline automation in Azure DevOps, reducing deployment
                        time by 75% for a mission-critical application.
                    </li>
                    <li>
                        Integrated manufacturing execution system (MES) with Microsoft Teams and email using an
                        API-driven solution, reducing machine downtime by 50% and improving overall machine efficiency.
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
                        Enhanced stakeholder productivity by 50% by analyzing and leveraging untapped MongoDB datasets,
                        driving data-informed decision-making.
                    </li>
                    <li>
                        Designed and delivered interactive Power BI dashboards, enabling stakeholders to set informed
                        goals and track key performance metrics effectively.
                    </li>
                    <li>
                        Streamlined membership data management by consolidating data sources and automating MongoDB
                        exports, eliminating 90% of manual tasks.
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
                        Increased user engagement by 25% through the development of responsive web pages and dynamic
                        components, enhancing overall user experience.
                    </li>
                    <li>
                        Ensured 100% on-time deployments by streamlining cross-team coordination for web page
                        development and addressing bottlenecks proactively.
                    </li>
                    <li>
                        Delivered robust applications by presenting projects to cross-functional teams, integrating peer
                        feedback, and continuously refining code quality.
                    </li>
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
                    <li>
                        Decreased client support tickets by 30% by resolving critical bugs and introducing feature
                        enhancements, boosting user satisfaction and optimizing system performance.
                    </li>
                    <li>
                        Enhanced data integrity, leveraging AWS services and Elasticsearch for scalable and efficient
                        database management, removing all database anomalies.
                    </li>
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
                        Built a responsive mobile application for Clover Flex devices, streamlining restaurant
                        management workflows and enhancing operational efficiency by 40%.
                    </li>
                    <li>
                        Boosted app performance by 20% by optimizing component rendering and API calls, delivering a
                        smoother and more responsive user experience.
                    </li>
                </ul>
            </div>
        )
    }
];
