import Link from "next/link";
import Image from "next/image";

import facebookLogo from "../../public/facebook.svg";
import xLogo from "../../public/x.svg";
import instagramLogo from "../../public/instagram.svg";
import linkedinLogo from "../../public/linkedin.svg";

const Footer = () => {
    return (
        <footer className="flex flex-col gap-5 w-[90%] mx-auto py-12 md:gap-8">
            <div className="mb-4 flex flex-col gap-x-1.5 md:flex-row md:justify-between md:items-center">
                <div className="md:max-w-sm">
                    <h3 className="text-[hsl(218,43%,11%)] text-[1.75rem] font-semibold mb-2">Your Spiritual Welfare is our concern!</h3>
                    <p className="text-[hsl(219,13%,46%)] leading-5 mb-6">Let us help you on your spiritual journey as you walk with God.</p>
                </div>
                <Link
                    href="/"
                    className="max-w-fit whitespace-nowrap bg-[hsl(213,62%,23%)] text-white border border-[hsl(213,62%,23%)] transition duration-300 font-semibold rounded-md py-4 px-6 inline-block hover:bg-white hover:text-[hsl(213,62%,23%)]"
                >Contact Us</Link>
            </div>
            <div className="bg-[hsl(218,17%,91%)] h-px" />
            <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                <div className="flex gap-4">
                    <a
                        href="#"
                    >
                        <Image
                            src={facebookLogo}
                            alt="Facebook logo"
                            className=""
                        />
                    </a>
                    <a
                        href="#"
                    >
                        <Image
                            src={xLogo}
                            alt="X logo"
                            className=""
                        />
                    </a>
                    <a
                        href="#"
                    >
                        <Image
                            src={instagramLogo}
                            alt="Instagram logo"
                            className=""
                        />
                    </a>
                    <a
                        href="#"
                    >
                        <Image
                            src={linkedinLogo}
                            alt="Linkedin logo"
                            className=""
                        />
                    </a>
                </div>
                <div>
                    <p className="text-[hsl(218,15%,65%)] text-sm">&copy; 2024 Deeper Christian Life Ministry</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer