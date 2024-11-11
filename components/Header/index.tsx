"use client";

import Image from "next/image";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { User } from "lucide-react";
import { userStore } from "@/stores/user";
import { useRouter } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const user = userStore();

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
                <Link href={"/forums"}>
                    <Button
                        variant={pathname === "/forums" ? "default" : "outline"}
                    >
                        Forums
                    </Button>
                </Link>
                <div
                    className="relative flex h-10 w-10 shrink-0 overflow-hidden border cursor-pointer rounded-lg"
                    onClick={() => {
                        console.log(user.isLoggedIn);
                        if (user.isLoggedIn) {
                            router.push("/profile");
                        } else {
                            router.push("/login");
                        }
                    }}
                >
                    <div className="flex items-center justify-center size-full">
                        <User
                            className="size-7 text-gray-600"
                            strokeWidth={1}
                        />
                    </div>
                </div>
                <DarkModeToggle />
            </div>
        </div>
    );
}
