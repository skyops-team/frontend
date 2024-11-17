"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export const description =
    "A simple login form with email and password. The submit button says 'Sign in'.";

interface userInformationInterface {
    email: string;
    password: string;
}

const userInformationObject: userInformationInterface = {
    email: "",
    password: "",
};

const errorObject = {
    email: {
        error: false,
        message: "",
    },
    password: { error: false, message: "" },
};

const ErrorMessage = ({
    error,
    message,
}: {
    error: boolean;
    message: string;
}) => (
    <div
        className="aria-[invalid=true]:flex hidden text-xs text-red-500"
        aria-invalid={error}
    >
        {message}
    </div>
);

export function LoginForm() {
    const router = useRouter();
    const [userInformation, setUserInformation] = useState(
        userInformationObject
    );
    const [submittingRequest, setSubmittingRequest] = useState(false);
    const [error, setError] = useState(errorObject);

    const updateUserInformation = (
        target: keyof userInformationInterface,
        value: string
    ) => {
        setUserInformation((prev) => {
            const tmp = { ...prev };
            tmp[target] = value;
            return tmp;
        });
        setError((prev) => {
            const tmp = { ...prev };
            tmp[target] = { error: false, message: "" };
            return tmp;
        });
    };

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        let error = false;
        if (userInformation.email === "") {
            setError((prev) => {
                const tmp = { ...prev };
                tmp.email = {
                    error: true,
                    message: "Email cannot be empty",
                };
                return tmp;
            });
            error = true;
        }
        if (userInformation.password === "") {
            setError((prev) => {
                const tmp = { ...prev };
                tmp.password = {
                    error: true,
                    message: "Password cannot be empty",
                };
                return tmp;
            });
            error = true;
        }
        if (!error) {
            login();
        }
    };

    const login = () => {
        setSubmittingRequest(true);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            emailId: userInformation.email,
            password: userInformation.password,
        });

        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("https://skyopsapi.azurewebsites.net/api/login", requestOptions)
            .then(async (response) => {
                switch (response.status) {
                    case 200:
                        router.push("/");
                        break;
                    case 400:
                        setError(() => {
                            const tmp = { ...error };
                            tmp.email = {
                                error: true,
                                message: "",
                            };
                            tmp.password = {
                                error: true,
                                message: "",
                            };
                            return tmp;
                        });
                        toast({
                            title: "Invalid credentials",
                            variant: "destructive",
                        });
                        break;
                    default:
                        break;
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setSubmittingRequest(false);
            });
    };

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            aria-invalid={error.email.error}
                            onChange={(e) =>
                                updateUserInformation("email", e.target.value)
                            }
                        />
                        <ErrorMessage {...error.email} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            aria-invalid={error.password.error}
                            onChange={(e) =>
                                updateUserInformation(
                                    "password",
                                    e.target.value
                                )
                            }
                        />
                        <ErrorMessage {...error.password} />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <Button
                        className="w-full disabled:bg-opacity-20"
                        disabled={submittingRequest}
                    >
                        Sign in
                    </Button>
                    <div className="mt-4 text-center text-sm">
                        New user?{" "}
                        <Link href="/signup" className="underline">
                            Sign up
                        </Link>
                    </div>
                </CardFooter>
            </form>
        </Card>
    );
}
