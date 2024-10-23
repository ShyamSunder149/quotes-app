"use client";

import { useRouter } from 'next/navigation'

export default function Navbar() {
    const router = useRouter();

    const handleNavigation = (path : string) => {
        console.log("hello " + path)
        router.push(path);
    };

    return (
        <div className="flex flex-row justify-center items-center p-5 gap-4">
            <button className="border border-black p-3 rounded-lg" onClick={() => handleNavigation('/')}>Quotes Home</button>
            <button className="border border-black p-3 rounded-lg" onClick={() => handleNavigation('/today')}>Get Quote for the Day</button>
            <button className="border border-black p-3 rounded-lg" onClick={() => handleNavigation('/random')}>Get a Random Quote</button>
        </div>
    );
}
