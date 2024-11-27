import Link from "next/link";

import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HamburgerMenuProps {
    isOpen: boolean
    closeMenu: () => void
}

const HamburgerMenu = ({ isOpen, closeMenu }: HamburgerMenuProps) => {
    return (
        <div className={cn("transition duration-500 fixed bg-white z-20 left-0 top-0 w-screen h-full overflow-y-hidden", isOpen ? "max-h-screen py-3 px-5" : "max-h-0")}>
            <Button
                variant="ghost"
                onClick={closeMenu}
                className="block ml-auto"
            >
                <X />
            </Button>

            <nav>
                <ul className="space-y-6 text-[hsl(218,43%,11%)]">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Contact Us</Link>
                    </li>
                    <li>
                        <Link href="/">Watch Live</Link>
                    </li>
                    <li>
                        <Link href="/">Testimonies</Link>
                    </li>
                    <li>
                        <Link
                            className="text-[hsl(209,83%,20%)] border-[1.5px] border-current rounded-md py-4 px-6 whitespace-nowrap inline-block transition duration-300 hover:bg-[hsl(209,83%,20%)] hover:text-white"
                            href="/">Log In</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default HamburgerMenu