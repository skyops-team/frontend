"use client";

import Image from "next/image";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
    const pathname = usePathname();

    return (
        <div className="h-24 w-full px-4 flex flex-row items-center justify-between">
            <Link href={"/"}>
                <Image
                    src="/logo.png"
                    className="h-full"
                    alt="logo"
                    width={100}
                    height={50}
                />
            </Link>
            <div className="flex justify-center gap-4">
                <Button variant={"outline"} asChild>
                    <Link href={"/forums"}>Forums</Link>
                </Button>
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
