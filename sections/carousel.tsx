import Carousel from "@/components/carousel";

const CarouselSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-t-black-100 ">
      <Carousel images={["/turtle.jpg", "/turtle2.jpg", "/turtle3.jpg"]} />
      <div className="bg-t-black-700 w-full h-10">
        <div className="bg-t-black-100 rounded-b-[40px] h-10 w-full" />
      </div>
    </div>
  );
};

export default CarouselSection;
