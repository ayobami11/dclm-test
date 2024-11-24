const Metrics = () => {
  return (
    <div className="bg-[hsl(209,83%,20%)] text-white py-8 px-[5%] flex flex-col gap-y-7 gap-x-4 md:flex-row md:justify-between md:py-12">
        <div className="flex flex-col items-center gap-y-3">
            <span className="text-[2.5rem] md:text-6xl">180+</span>
            <span className="text-xl">Nations</span>
        </div>
        <div className="flex flex-col items-center gap-y-3">
            <span className="text-[2.5rem] md:text-6xl">600,000+</span>
            <span className="text-xl">Conversions</span>
        </div>
        <div className="flex flex-col items-center gap-y-3">
            <span className="text-[2.5rem] md:text-6xl">200,000</span>
            <span className="text-xl">Healing & Miracles</span>
        </div>
    </div>
  )
}

export default Metrics