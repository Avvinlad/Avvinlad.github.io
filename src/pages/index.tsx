import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import { Separator } from "@/components/ui/separator";

import { ThemeProvider } from "@/components/theme-provider";

import Header from "@/widgets/Header";
import Hero from "@/widgets/Hero";
import About from "@/widgets/About";
import Experience from "@/widgets/Experience";
import Projects from "@/widgets/Projects";

export const fontSans = FontSans({
    subsets: ["latin-ext"],
    variable: "--font-sans"
});

export default function Home() {
    return (
        <div className={cn("font-sans", fontSans.variable)}>
            <ThemeProvider attribute="class" defaultTheme="system">
                <Header />
                <Hero />
                <Separator className="h-[5px]" />
                <About />
                <Separator className="h-[5px]" />
                <Experience />
                <Separator className="h-[5px]" />
                <Projects />
            </ThemeProvider>
        </div>
    );
}
