"use client";

import Header from "@/components/layout/Header";
import HeroCTA from "@/components/home/HeroCTA";
import HeroTestimonials from "@/components/home/HeroTestimonials";

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto pt-10 mb-[100px]">
            <Header />
            <HeroTestimonials />
            <HeroCTA />
        </div>
    );
}
