"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function DarkModeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const updateTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Button
            variant={"outline"}
            size={"icon"}
            onClick={updateTheme}
            className="p-0"
        >
            <div>
                {mounted ? (
                    theme === "light" ? (
                        <Sun className="size-4" />
                    ) : (
                        <Moon className="size-4" />
                    )
                ) : (
                    <div className="size-4"></div>
                )}
            </div>
        </Button>
    );
}
