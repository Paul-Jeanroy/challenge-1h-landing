"use client";

import Header from "@/components/layout/Header";
import HeroCTA from "@/components/home/HeroCTA";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { StarRating } from "@/components/ui/StarRating";
import { tooltipItems } from "@/data/tooltipItems";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Home() {
    return (
        <div className="relative max-w-7xl mx-auto pt-10 mb-[100px]">
            <Spotlight />
            <Header />
            <div className="flex justify-center items-center mt-[100px]">
                <div className="flex">
                    <AnimatedTooltip items={tooltipItems} />
                    <div className="ml-10 flex flex-col justify-center items-start">
                        <StarRating count={5} color="orange" />
                        <span className="text-white font-medium text-lg">50+ professionnels accompagnés</span>
                    </div>
                </div>
            </div>
            <HeroCTA />
        </div>
    );
}
