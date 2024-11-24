"use client"

import Image from "next/image";

import { useRef } from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import heroImg1 from "../../public/hero-img-1.png";
import heroImg2 from "../../public/hero-img-2.png";
import heroImg3 from "../../public/hero-img-3.png";

const Hero = () => {

    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

    return (
        <section className="w-[90%] mx-auto bg-[url('/hero-bg-pattern.svg')] bg-no-repeat bg-cover bg-center py-8 md:py-16">
            <header className="text-[hsl(221,43%,8%)] flex flex-col items-center text-center">
                <h1 className="font-semibold leading-[3.125rem] text-[2.5rem] mb-2.5 md:text-[4.5rem] md:leading-[4.4375rem]">
                    Got a Testimony? <br />
                    Share it with Us
                </h1>
                <p className="text-xl mb-7 md:text-3xl">Testify of what God has done for you.</p>

                <button className="bg-[hsl(209,83%,20%)] text-white text-sm font-semibold rounded-md py-2 px-4 w-fit">Share your Testimony</button>
            </header>

            <div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true
                    }}
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    className="w-full"
                >
                    <CarouselContent>
                        <CarouselItem key="testifier-1" className="md:basis-1/2 lg:basis-1/3">
                            <div className="flex aspect-square items-center justify-center p-6">
                                <Image
                                    src={heroImg1}
                                    alt=""
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem key="testifier-2" className="md:basis-1/2 lg:basis-1/3">
                            <div className="flex aspect-square items-center justify-center p-6">
                                <Image
                                    src={heroImg2}
                                    alt=""
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem key="testifier-3" className="md:basis-1/2 lg:basis-1/3">
                            <div className="flex aspect-square items-center justify-center p-6">
                                <Image
                                    src={heroImg3}
                                    alt=""
                                />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}

export default Hero;