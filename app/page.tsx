import Image from "next/image";

export default function Home() {
    return (
        <div className="mx-auto max-w-7xl w-full">
            <header>
                {/* Hero Container */}
                <div className="px-5 py-16 md:py-20">
                    {/* Component */}
                    <div className="grid items-center justify-items-center gap-8 sm:gap-20 lg:grid-cols-2">
                        {/* Hero Content */}
                        <div className="flex flex-col">
                            {/* Hero Title */}
                            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                                Ask the{" "}
                                <span className="text-primary">
                                    Skyops Community
                                </span>{" "}
                                : Get Tech{" "}
                                <span className="text-primary">
                                    Answers Fast
                                </span>
                            </h1>
                            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
                                Accelerate your DevOps journey with expert
                                insights and practical advice.
                            </p>
                            {/* Hero Button */}
                            <div className="flex items-center">
                                <a
                                    href="#"
                                    className="mr-5 items-center rounded-md bg-black px-6 py-3 font-semibold text-white md:mr-6 lg:mr-8"
                                >
                                    Ask an expert
                                </a>
                                <a
                                    href="#"
                                    className="flex max-w-full items-center font-bold"
                                >
                                    <Image
                                        src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94bd85e6cf98_ArrowUpRight%20(4).svg"
                                        alt=""
                                        height={20}
                                        width={20}
                                        className="mr-2 inline-block max-h-4 w-5"
                                    />
                                    <p>Be an expert</p>
                                </a>
                            </div>
                        </div>
                        {/* Hero Image */}
                        <Image src="/svg.svg" width={500} height={500} alt="" />
                    </div>
                </div>
            </header>
            <section>
                {/* Container */}
                <div className="flex flex-col items-center px-5 py-16 md:px-10 md:py-20">
                    {/* Title */}
                    <h2 className="mb-8 text-center text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8">
                        Innovate through{" "}
                        <span className="text-primary">Collaboration</span>
                    </h2>
                    {/* Content */}
                    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
                        {/* Item */}
                        <div className="relative p-8 md:p-10">
                            <h3 className="mb-4 text-3xl font-bold md:text-5xl">
                                1.5K
                            </h3>
                            <p className="text-sm text-gray-500">
                                Questions posted
                            </p>
                            <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
                        </div>
                        {/* Item */}
                        <div className="relative p-8 md:p-10">
                            <h3 className="mb-4 text-3xl font-bold md:text-5xl">
                                81%
                            </h3>
                            <p className="text-sm text-gray-500">
                                Successfully resolved
                            </p>
                            <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
                        </div>
                        {/* Item */}
                        <div className="p-8 md:p-10">
                            <h3 className="mb-4 text-3xl font-bold md:text-5xl">
                                365+
                            </h3>
                            <p className="text-sm text-gray-500">Experts</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12">
                {/* Container */}
                <div className="flex w-full flex-col items-center justify-center px-5 pb-16 md:px-10 md:pb-20">
                    {/* HEADING TEXT */}
                    <h1 className="text-center text-3xl font-bold lg:text-4xl">
                        How it works
                    </h1>
                    <p className="font-inter mx-auto mb-12 mt-4 max-w-lg px-5 text-center text-base font-light text-gray-500">
                        Use premium tailwindcss components to ship your product
                        faster to your customers. Build better and faster with
                        Devjoy
                    </p>
                    {/* HOW IT WORKS STEPS */}
                    <div className="flex flex-col items-start justify-center lg:flex-row">
                        {/* BLOCK */}
                        <div className="relative my-8 flex w-full rounded-md lg:mx-8 lg:flex-col">
                            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200">
                                <h2 className="text-3xl font-medium">1</h2>
                            </div>
                            <div className="ml-6 lg:ml-0">
                                <h2 className="mb-5 text-xl font-medium lg:mt-8">
                                    Stuck somewhere
                                </h2>
                                <p className="font-inter max-w-md pr-5 text-base text-gray-500">
                                    Hit a roadblock in your CI/CD or automation
                                    project? Don&apos;t worry, you&apos;re not
                                    alone.
                                </p>
                            </div>
                            {/* MOBILE - HOW IT WORKS LINE */}
                            <svg
                                className="absolute -bottom-[48px] left-[28px] lg:hidden"
                                width="12"
                                height="70"
                                viewBox="0 0 12 95"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
                                    fill="black"
                                ></path>
                            </svg>
                            {/* DESKTOP - HOW IT WORKS LINE */}
                            <svg
                                className="absolute right-0 top-7 hidden lg:block"
                                width="170"
                                height="12"
                                viewBox="0 0 170 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM169.773 6L164 0.226497L158.227 6L164 11.7735L169.773 6ZM6 7H9.95V5H6V7ZM17.85 7H25.75V5H17.85V7ZM33.65 7H41.55V5H33.65V7ZM49.45 7H57.35V5H49.45V7ZM65.25 7H73.15V5H65.25V7ZM81.05 7H88.95V5H81.05V7ZM96.85 7H104.75V5H96.85V7ZM112.65 7H120.55V5H112.65V7ZM128.45 7H136.35V5H128.45V7ZM144.25 7H152.15V5H144.25V7ZM160.05 7H164V5H160.05V7Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                        {/* BLOCK */}
                        <div className="relative my-8 flex w-full rounded-md lg:mx-8 lg:flex-col">
                            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200">
                                <h2 className="text-3xl font-medium">2</h2>
                            </div>
                            <div className="ml-6 lg:ml-0">
                                <h2 className="mb-5 text-xl font-medium lg:mt-8">
                                    Ask AIP-SkyOps community
                                </h2>
                                <p className="font-inter max-w-md pr-5 text-base text-gray-500">
                                    Our vibrant community of DevOps experts is
                                    ready to help. Post your question to the
                                    relevant forum and get expert advice from
                                    fellow practitioners.
                                </p>
                            </div>
                            {/* MOBILE - HOW IT WORKS LINE */}
                            <svg
                                className="absolute -bottom-[48px] left-[28px] lg:hidden"
                                width="12"
                                height="70"
                                viewBox="0 0 12 95"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
                                    fill="black"
                                ></path>
                            </svg>
                            {/* DESKTOP - HOW IT WORKS LINE */}
                            <svg
                                className="absolute right-0 top-7 hidden lg:block"
                                width="170"
                                height="12"
                                viewBox="0 0 170 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM169.773 6L164 0.226497L158.227 6L164 11.7735L169.773 6ZM6 7H9.95V5H6V7ZM17.85 7H25.75V5H17.85V7ZM33.65 7H41.55V5H33.65V7ZM49.45 7H57.35V5H49.45V7ZM65.25 7H73.15V5H65.25V7ZM81.05 7H88.95V5H81.05V7ZM96.85 7H104.75V5H96.85V7ZM112.65 7H120.55V5H112.65V7ZM128.45 7H136.35V5H128.45V7ZM144.25 7H152.15V5H144.25V7ZM160.05 7H164V5H160.05V7Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                        {/* BLOCK */}
                        <div className="relative my-8 flex w-full rounded-md lg:mx-8 lg:flex-col">
                            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200">
                                <h2 className="text-3xl font-medium">3</h2>
                            </div>
                            <div className="ml-6 lg:ml-0">
                                <h2 className="mb-5 text-xl font-medium lg:mt-8">
                                    Get answered
                                </h2>
                                <p className="font-inter max-w-md pr-5 text-base text-gray-500">
                                    Benefit from the collective knowledge of our
                                    community. Get quick and effective solutions
                                    to your problems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {/* Container */}
                <div className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-10 md:pb-20">
                    {/* Component */}
                    <div className="bg-gray-100 p-8 text-center sm:p-10 md:p-16">
                        {/* Title */}
                        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                            Join the Skyops Community
                        </h2>
                        <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-500 sm:text-base md:mb-10 lg:mb-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet luctus venenatis,
                            lectus magna fringilla urna
                        </p>
                        <div className="mx-auto mb-4 flex max-w-lg justify-center">
                            <form
                                name="email-form"
                                method="get"
                                className="flex w-full flex-col gap-3 sm:flex-row"
                            >
                                <input
                                    type="email"
                                    className="h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-gray-500"
                                    placeholder="Enter your email"
                                />
                                <input
                                    type="submit"
                                    value="Notify me"
                                    className="cursor-pointer rounded-md bg-black px-6 py-2 font-semibold text-white"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
