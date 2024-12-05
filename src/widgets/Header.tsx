import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeModeToggle } from "@/components/theme-selection";
import { Home, SquareUserRound, FolderGit2, AtSign } from "lucide-react";

export default function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const SCROLL_THRESHOLD = 40;

    const handleScrollEvent = () => {
        const currentScroll = window.scrollY;

        if (Math.abs(currentScroll - lastScroll) > SCROLL_THRESHOLD) {
            if (currentScroll < lastScroll) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
        }

        setLastScroll(currentScroll);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, [lastScroll]);

    return (
        <nav
            id="header"
            className={`flex sticky ${showHeader ? "visible" : "hidden"} lg:w-fit mx-auto border-4 rounded-full`}
        >
            <div className="py-4">
                <div className="flex gap-4 text-center justify-center">
                    <a href="#">
                        <Button className="mx-1 text-xs">
                            <Home className="mr-2 h-3 w-3" />
                            Home
                        </Button>
                    </a>
                    <a href="#about">
                        <Button className="mx-1 text-xs">
                            <SquareUserRound className="mr-2 h-3 w-3" />
                            About
                        </Button>
                    </a>
                    <a href="#projects">
                        <Button className="mx-1 text-xs">
                            <FolderGit2 className="mr-2 h-3 w-3" />
                            Projects
                        </Button>
                    </a>
                    <Button className="mx-1 text-xs">
                        <AtSign className="mr-2 h-3 w-3" />
                        Connect
                    </Button>
                    <ThemeModeToggle />
                </div>
            </div>
        </nav>
    );
}
