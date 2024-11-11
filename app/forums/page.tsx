import Forum from "./Forum";

export default function Forums() {
    return (
        <div className="space-y-5">
            <h1 className="text-3xl font-bold mb-4">Forums</h1>
            <div className="grid grid-cols-8 w-full gap-5">
                <div className="col-span-5">
                    <Forum />
                </div>
                <div className="col-span-3 border border-border rounded"></div>
            </div>
        </div>
    );
}
