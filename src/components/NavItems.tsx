import React from "react";
import { Button } from "@/components/ui/button";
import { ThemeModeToggle } from "@/components/theme-selection";
import { Home, SquareUserRound, FolderGit2, AtSign } from "lucide-react";

const BUTTON_CLASS = "mx-1 text-xs";
const ICON_CLASS = "mr-2 h-3 w-3";

export default function NavItems() {
    return (
        <>
            <a href="#">
                <Button className={BUTTON_CLASS}>
                    <Home className={ICON_CLASS} />
                    Home
                </Button>
            </a>
            <a href="#about">
                <Button className={BUTTON_CLASS}>
                    <SquareUserRound className={ICON_CLASS} />
                    About
                </Button>
            </a>
            <a href="#projects">
                <Button className={BUTTON_CLASS}>
                    <FolderGit2 className={ICON_CLASS} />
                    Projects
                </Button>
            </a>
            <a>
                <ThemeModeToggle />
            </a>
        </>
    );
}
