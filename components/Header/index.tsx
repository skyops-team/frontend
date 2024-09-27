"use client";

import Image from "next/image";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
    const pathname = usePathname();

    return (
        <div className="h-24 w-full flex flex-row items-center justify-between">
            <div>
                <Image
                    src="/logo.png"
                    className="h-full"
                    alt="logo"
                    width={100}
                    height={50}
                />
            </div>
            <div className="flex justify-center gap-4">
                {pathname === "/login" ? (
                    <Button variant={"outline"} asChild>
                        <Link href={"/signup"}>Signup</Link>
                    </Button>
                ) : (
                    <Button variant={"outline"} asChild>
                        <Link href={"/login"}>Login</Link>
                    </Button>
                )}
                <DarkModeToggle />
            </div>
        </div>
    );
}
