"use client"

import { usePathname } from "next/navigation";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import HamburgerMenu from "@/components/HamburgerMenu";

const Header = () => {

    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openHamburgerMenu = () => setIsMenuOpen(true);
    const closeHamburgerMenu = () => setIsMenuOpen(false);

    return (
        <header className="max-w-[1216px] w-[90%] py-4 mx-auto flex justify-between items-center gap-10">
            <Image
                src="/logo.svg"
                alt=""
                width="64"
                height="64"
                priority
                className="shrink-0"
            />
            <nav className="hidden md:block">
                <ul className="flex gap-16">
                    <li>
                        <Link
                            className={`${pathname === "/" ? "active" : ""} [&.active]:underline text-[hsl(213,62%,23%)] font-semibold`}
                            href="/">Home</Link>
                    </li>
                    <li>
                        <Link
                            className={`${pathname === "/contact" ? "active" : ""} [&.active]:underline text-[hsl(213,62%,23%)] font-semibold`}
                            href="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link
                            className={`${pathname === "/live" ? "active" : ""} [&.active]:underline text-[hsl(213,62%,23%)] font-semibold`}
                            href="/live">Watch Live</Link>
                    </li>
                    <li>
                        <Link
                            className={`${pathname === "/testimonies" ? "active" : ""} [&.active]:underline text-[hsl(213,62%,23%)] font-semibold`}
                            href="/testimonies">Testimonies</Link>
                    </li>
                </ul>
            </nav>

            <Link
                className="text-[hsl(209,83%,20%)] border-[1.5px] border-current rounded-md py-4 px-6 whitespace-nowrap hidden md:block"
                href="/">Log In</Link>

            <Button
                variant="ghost"
                onClick={openHamburgerMenu}
                className="md:hidden"
            >
                <Menu />
            </Button>

            <HamburgerMenu
                isOpen={isMenuOpen}
                closeMenu={closeHamburgerMenu}
            />
        </header>
    )
}

export default Header