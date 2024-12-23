const FavoriteDiveSite = () => {
  return (
    <div className="bg-t-black-700 w-full overflow-x-hidden pt-6 relative">
      <div className="animate-marquee absolute w-full top-[40%] md:top-1/3  pointer-events-none">
        <span className=" text-t-black-500 text-[80px] md:text-[120px] lg:text-[200px] font-bold whitespace-nowrap">
          Favorite dive site Favorite dive site
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2  lg:grid-rows-5 gap-12 md:gap-0 p-10">
        <div className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 row-span-1 lg:row-span-3 lg:rows-end-4">
          <SitePin subTitle={"最愛潛點"} title={"花瓶岩"} color={"ocean"} />
        </div>
        <div className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 lg:row-start-3 row-span-1 lg:row-span-3 lg:row-end-6">
          <SitePin subTitle={"最愛潛點"} title={"美人洞"} color={"white"} />
        </div>
      </div>

      <div className="bg-ocean-light w-full h-10">
        <div className="bg-t-black-700 rounded-b-[40px] h-10 w-full" />
      </div>
    </div>
  );
};

interface SitePinProps {
  subTitle: string;
  title: string;
  color: "ocean" | "white";
}
const SitePin = ({ subTitle, title, color }: SitePinProps) => {
  return (
    <section className="flex flex-col items-center justify-center relative">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-bold flex flex-col items-center gap-2">
        <p className="text-t-black-700 text-base">{subTitle}</p>
        <p className="text-t-black-700 text-[28px] lg:text-[40px]">{title}</p>
      </div>
      <div
        className={`h-[200px] lg:h-[280px] w-[200px] lg:w-[280px] ${
          color === "ocean" ? "bg-ocean-light" : "bg-t-white"
        } rounded-t-full rounded-bl-full rotate-45`}
      />
      <div
        className={` mt-14 lg:mt-20 h-6 w-20 lg:h-10 lg:w-[120px] ${
          color === "ocean" ? "bg-ocean-light" : "bg-t-white"
        } rounded-[50%]`}
      />
    </section>
  );
};

export default FavoriteDiveSite;
