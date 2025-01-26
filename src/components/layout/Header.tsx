"use client";

import Button from "../ui/Button";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="w-full h-[65px] flex items-center">
            <h1 className="flex text-xl italic cursor-pointer">Paul Jeanroy</h1>
            <Navigation />
            <Button>
                Contact
            </Button>
        </header>
    );
}