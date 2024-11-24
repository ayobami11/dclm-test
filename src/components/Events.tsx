import Link from "next/link";
import Image from "next/image";

import ongoingEventImg from "../../public/ongoing-event.png";
import playIcon from "../../public/play.svg"

const Events = () => {
  return (
    <section className="w-[90%] my-10 mx-auto">
      <h2 className="font-bold text-2xl text-[hsl(215,32%,17%)] flex gap-6 before:content-[''] before:flex-1 before:border-b before:border-[hsl(218,15%,65%)] before:m-auto after:content-[''] after:flex-1 after:border-b after:border-[hsl(218,15%,65%)] after:m-auto md:text-4xl">Ongoing Events</h2>
      <figure className="flex flex-col gap-4 md:flex-row-reverse md:items-center">
        <div className="bg-[url('/ongoing-event-bg.svg')] bg-no-repeat bg-center bg-cover py-8 px-4 md:py-20 md:px-10">
          <Image
            src={ongoingEventImg}
            alt=""
          />
        </div>
        <figcaption className="md:max-w-[488px]">
          <header>
            <span className="text-[hsl(209,83%,20%)] border-[1.5px] border-current py-2 px-4 mb-6 rounded-md inline-block"><abbr title="Global Crusade with Kumuyi">GCK</abbr> in Kumasi</span>
            <h3 className="font-medium text-4xl leading-[2.8125rem] mb-8 md:text-[2.5rem]">Full Salvation and Healing Through Christ</h3>
          </header>

          <dl className="text-xl space-y-4 mb-6">
            <div className="flex gap-0.5">
              <dt className="font-medium text-[hsl(209,83%,20%)] after:content-[':']">Venue</dt>
              <dd className="text-[hsl(217,23%,27%)]">Kumasi, Ghana</dd>
            </div>
            <div className="flex gap-0.5">
              <dt className="font-medium text-[hsl(209,83%,20%)] after:content-[':']">Date</dt>
              <dd className="text-[hsl(217,23%,27%)]">July 25th - July 30th, 2024</dd>
            </div>
            <div className="flex gap-0.5">
              <dt className="font-medium text-[hsl(209,83%,20%)] after:content-[':']">Time</dt>
              <dd className="text-[hsl(217,23%,27%)]">16:00 <abbr title="Greenwich Mean Time">GMT</abbr> daily</dd>
            </div>
          </dl>

          <Link
            href="/live"
            className="bg-[hsl(209,83%,20%)] text-white rounded-md py-2 px-3 flex gap-3 w-fit"
          >Connect Live
            <Image
              src={playIcon}
              alt=""
            />
          </Link>
        </figcaption>
      </figure>
    </section>
  )
}

export default Events