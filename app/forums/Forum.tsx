import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Forum() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-800">
                    Forum Title
                </h2>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-600">123</span>
                    <Heart
                        className="fill-primary stroke-primary"
                        strokeWidth={0}
                    />
                </div>
            </div>
            <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                eros euismod, commodo odio sit amet, ultricies nunc.
            </p>
            <div className="flex items-center justify-between">
                <span className="text-gray-500">5 Responses</span>
                <Button>View Forum</Button>
            </div>
        </div>
    );
}
