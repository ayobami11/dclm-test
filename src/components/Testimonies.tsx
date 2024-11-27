"use client"

import Image from "next/image";

import { useRef } from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import testifier1 from "../../public/testifier-1.png";
import testifier2 from "../../public/testifier-2.png";
import testifier3 from "../../public/testifier-3.png";

const Testimonies = () => {

    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

    return (
        <section className="bg-[hsl(210,21%,75%)] py-10 px-[5%]">

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
                    <div className="flex items-center justify-between max-w-[780px] mx-auto mb-4 gap-x-4">
                        <CarouselPrevious
                            variant="ghost"
                            className="contents bg-[hsl(210,21%,75%)] hover:bg-[hsl(210,21%,75%)] focus-visible:ring-0 static"
                        />
                        <h2 className="font-bold text-xl text-center leading-[1.5625rem] text-[hsl(215,32%,17%)] md:text-4xl md:leading-[2.8125rem]">What the Testifiers says</h2>
                        <CarouselNext
                            variant="ghost"
                            className="contents bg-[hsl(210,21%,75%)] hover:bg-[hsl(210,21%,75%)] focus-visible:ring-0 static"
                        />
                    </div>
                    <CarouselDots />
                    <CarouselContent className="mt-16">
                        <CarouselItem
                            key="testifier-1"
                            className="md:basis-1/2 lg:basis-1/3 pt-5"
                        >
                            <div className="p-5 relative bg-[url('/mid-testifier-blue-bg.png')] bg-no-repeat bg-cover">
                                <div className="p-8 bg-[url('/mid-testifier-white-bg.png')] bg-no-repeat bg-cover max-w-[415px] flex flex-col items-center">
                                    <Image
                                        src={testifier1}
                                        alt="Adedigba Omolaso"
                                        className="absolute -top-7 left-1/2 -translate-x-1/2"
                                    />
                                    <div className="p-6 text-center text-sm w-[346px]">
                                        <h3 className="text-[hsl(217,23%,27%)] font-bold text-2xl">Healed of Sharp Pain</h3>
                                        <span className="text-lg text-[hsl(0,0%,32%)]">Adedigba Omolaso</span>
                                        <p>
                                            On the 1st of April, she experienced a sharp pain after trying to put a baby down. She got home and
                                            felt the pain again. Someone researched online and told her that this kind of pain is associated with
                                            kidney disease. She ignored it and believed in God for her healing. During the Easter Retreat, after
                                            the message on Jesus, Our Passover, The man of God prayed specifically for people experiencing internal
                                            problems. She received her healing and was made whole. The pain has not returned since then. Praise the
                                            Lord!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem
                            key="testifier-2"
                            className="md:basis-1/2 lg:basis-1/3 pt-5"
                        >
                            <div className="p-5 relative bg-[url('/mid-testifier-blue-bg.png')] bg-no-repeat bg-cover">
                                <div className="p-8 bg-[url('/mid-testifier-white-bg.png')] bg-no-repeat bg-cover max-w-[415px] flex flex-col items-center">
                                    <Image
                                        src={testifier2}
                                        alt="Adedigba Omolaso"
                                        className="absolute -top-12 left-1/2 -translate-x-1/2"
                                    />
                                    <div className="p-6 text-center text-sm w-[346px]">
                                        <h3 className="text-[hsl(217,23%,27%)] font-bold text-2xl">Healed of Sharp Pain</h3>
                                        <span className="text-lg text-[hsl(0,0%,32%)]">Adedigba Omolaso</span>
                                        <p>
                                            On the 1st of April, she experienced a sharp pain after trying to put a baby down. She got home and
                                            felt the pain again. Someone researched online and told her that this kind of pain is associated with
                                            kidney disease. She ignored it and believed in God for her healing. During the Easter Retreat, after
                                            the message on Jesus, Our Passover, The man of God prayed specifically for people experiencing internal
                                            problems. She received her healing and was made whole. The pain has not returned since then. Praise the
                                            Lord!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem
                            key="testifier-3"
                            className="md:basis-1/2 lg:basis-1/3 pt-5"
                        >
                            <div className="p-5 relative bg-[url('/mid-testifier-blue-bg.png')] bg-no-repeat bg-cover">
                                <div className="p-8 bg-[url('/mid-testifier-white-bg.png')] bg-no-repeat bg-cover max-w-[415px] flex flex-col items-center">
                                    <Image
                                        src={testifier3}
                                        alt="Adedigba Omolaso"
                                        className="absolute -top-7 left-1/2 -translate-x-1/2"
                                    />
                                    <div className="p-6 text-center text-sm w-[346px]">
                                        <h3 className="text-[hsl(217,23%,27%)] font-bold text-2xl">Healed of Sharp Pain</h3>
                                        <span className="text-lg text-[hsl(0,0%,32%)]">Adedigba Omolaso</span>
                                        <p>
                                            On the 1st of April, she experienced a sharp pain after trying to put a baby down. She got home and
                                            felt the pain again. Someone researched online and told her that this kind of pain is associated with
                                            kidney disease. She ignored it and believed in God for her healing. During the Easter Retreat, after
                                            the message on Jesus, Our Passover, The man of God prayed specifically for people experiencing internal
                                            problems. She received her healing and was made whole. The pain has not returned since then. Praise the
                                            Lord!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem
                            key="testifier-4"
                            className="md:basis-1/2 lg:basis-1/3 pt-5"
                        >
                            <div className="p-5 relative bg-[url('/mid-testifier-blue-bg.png')] bg-no-repeat bg-cover">
                                <div className="p-8 bg-[url('/mid-testifier-white-bg.png')] bg-no-repeat bg-cover max-w-[415px] flex flex-col items-center">
                                    <Image
                                        src={testifier1}
                                        alt="Adedigba Omolaso"
                                        className="absolute -top-7 left-1/2 -translate-x-1/2"
                                    />
                                    <div className="p-6 text-center text-sm w-[346px]">
                                        <h3 className="text-[hsl(217,23%,27%)] font-bold text-2xl">Healed of Sharp Pain</h3>
                                        <span className="text-lg text-[hsl(0,0%,32%)]">Adedigba Omolaso</span>
                                        <p>
                                            On the 1st of April, she experienced a sharp pain after trying to put a baby down. She got home and
                                            felt the pain again. Someone researched online and told her that this kind of pain is associated with
                                            kidney disease. She ignored it and believed in God for her healing. During the Easter Retreat, after
                                            the message on Jesus, Our Passover, The man of God prayed specifically for people experiencing internal
                                            problems. She received her healing and was made whole. The pain has not returned since then. Praise the
                                            Lord!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem
                            key="testifier-5"
                            className="md:basis-1/2 lg:basis-1/3 pt-5"
                        >
                            <div className="p-5 relative bg-[url('/mid-testifier-blue-bg.png')] bg-no-repeat bg-cover">
                                <div className="p-8 bg-[url('/mid-testifier-white-bg.png')] bg-no-repeat bg-cover max-w-[415px] flex flex-col items-center">
                                    <Image
                                        src={testifier2}
                                        alt="Adedigba Omolaso"
                                        className="absolute -top-12 left-1/2 -translate-x-1/2"
                                    />
                                    <div className="p-6 text-center text-sm w-[346px]">
                                        <h3 className="text-[hsl(217,23%,27%)] font-bold text-2xl">Healed of Sharp Pain</h3>
                                        <span className="text-lg text-[hsl(0,0%,32%)]">Adedigba Omolaso</span>
                                        <p>
                                            On the 1st of April, she experienced a sharp pain after trying to put a baby down. She got home and
                                            felt the pain again. Someone researched online and told her that this kind of pain is associated with
                                            kidney disease. She ignored it and believed in God for her healing. During the Easter Retreat, after
                                            the message on Jesus, Our Passover, The man of God prayed specifically for people experiencing internal
                                            problems. She received her healing and was made whole. The pain has not returned since then. Praise the
                                            Lord!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </section >
    )
}

export default Testimonies;
