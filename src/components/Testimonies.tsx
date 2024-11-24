import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import testifier1 from "../../public/testifier-1.png";
import testifier2 from "../../public/testifier-2.png";
import testifier3 from "../../public/testifier-3.png";

const Testimonies = () => {
    return (
        <section className="bg-[hsl(210,21%,75%)] py-6">

            <div>
                <Carousel className="w-full">
                    <div className="flex items-center justify-center">
                        <CarouselPrevious className="bg-transparent border-none text-[hsl(0,0%,32%)] static" />
                        <h2 className="font-bold text-xl text-center leading-[2.8125rem] text-[hsl(215,32%,17%)] md:text-4xl">What the Testifiers says</h2>
                        <CarouselNext className="bg-transparent border-none text-[hsl(0,0%,32%)] static" />
                    </div>
                    <CarouselContent>
                        <CarouselItem
                            key="testifier-1"
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="bg-white flex flex-col items-center">
                                <Image
                                    src={testifier1}
                                    alt="Adedigba Omolaso"
                                />
                                <div className="p-6 text-center">
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
                        </CarouselItem>
                        <CarouselItem
                            key="testifier-2"
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <div className=" bg-[url('/mid-testifier-blue-bg.png')] bg-no-repeat bg-cover">
                                <div className="bg-[url('/mid-testifier-white-bg.png')] bg-no-repeat bg-cover max-w-[415px] p-8 flex flex-col items-center">
                                    <Image
                                        src={testifier2}
                                        alt="Adedigba Omolaso"
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
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="bg-white flex flex-col items-center">
                                <Image
                                    src={testifier3}
                                    alt="Adedigba Omolaso"
                                />
                                <div className="p-6 text-center">
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
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}

export default Testimonies;
