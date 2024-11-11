"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export const description =
    "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account";

interface userInformationInterface {
    username: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const userInformationObject: userInformationInterface = {
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const errorObject = {
    username: {
        error: false,
        message: "",
    },
    name: {
        error: false,
        message: "",
    },
    email: {
        error: false,
        message: "",
    },
    password: { error: false, message: "" },
    confirmPassword: { error: false, message: "" },
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

export default function SignupForm() {
    const router = useRouter();
    const { toast } = useToast();

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

    const handleSignUp = (e: FormEvent) => {
        e.preventDefault();
        setError((prev) => {
            const tmp = { ...prev };
            tmp.confirmPassword = {
                error: false,
                message: "",
            };
            return tmp;
        });
        let error = false;
        if (userInformation.username === "") {
            setError((prev) => {
                const tmp = { ...prev };
                tmp.username = {
                    error: true,
                    message: "Username cannot be empty",
                };
                return tmp;
            });
            error = true;
        }
        if (userInformation.name === "") {
            setError((prev) => {
                const tmp = { ...prev };
                tmp.name = {
                    error: true,
                    message: "Name cannot be empty",
                };
                return tmp;
            });
            error = true;
        }
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
        if (userInformation.confirmPassword !== userInformation.password) {
            setError((prev) => {
                const tmp = { ...prev };
                tmp.confirmPassword = {
                    error: true,
                    message: "Password doesn't match",
                };
                return tmp;
            });
            error = true;
        }
        if (!error) {
            signUp();
        }
    };

    const signUp = () => {
        setSubmittingRequest(true);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            userName: userInformation.username,
            name: userInformation.name,
            emailId: userInformation.email,
            password: userInformation.password,
        });

        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("https://skyops-demo.azurewebsites.net/api/users", requestOptions)
            .then((response) => {
                switch (response.status) {
                    case 200:
                        toast({
                            title: "Account created successfully",
                        });
                        setTimeout(() => router.push("/login"), 2500);
                        break;
                    case 400:
                        toast({
                            title: "User already exists!",
                            description:
                                "Use a different username or email address",
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
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-xl">Sign Up</CardTitle>
                <CardDescription>
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSignUp}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                placeholder="Robinson"
                                aria-invalid={error.username.error}
                                onChange={(e) =>
                                    updateUserInformation(
                                        "username",
                                        e.target.value
                                    )
                                }
                            />
                            <ErrorMessage {...error.username} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="Robinson"
                                aria-invalid={error.name.error}
                                onChange={(e) =>
                                    updateUserInformation(
                                        "name",
                                        e.target.value
                                    )
                                }
                            />
                            <ErrorMessage {...error.name} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                aria-invalid={error.email.error}
                                onChange={(e) =>
                                    updateUserInformation(
                                        "email",
                                        e.target.value
                                    )
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
                        <div className="grid gap-2">
                            <Label htmlFor="password">Confirm password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                aria-invalid={error.confirmPassword.error}
                                onChange={(e) =>
                                    updateUserInformation(
                                        "confirmPassword",
                                        e.target.value
                                    )
                                }
                                value={userInformation.confirmPassword}
                                className={`${
                                    error.confirmPassword.error
                                        ? "border-red-500"
                                        : ""
                                }`}
                            />
                            <ErrorMessage {...error.confirmPassword} />
                        </div>
                        <Button
                            type="submit"
                            className="w-full disabled:bg-opacity-20"
                            disabled={submittingRequest}
                        >
                            Create an account
                        </Button>
                    </div>
                </form>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/login" className="underline">
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
