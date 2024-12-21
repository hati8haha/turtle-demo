import Image from "next/image";

const turtleData: InfoCardProps = {
	title: "淡定哥 #TW01H0064",
	details: [
		"名字：淡定哥",
		"品種：綠蠵龜",
		"體型：成年龜",
		"背甲花紋：迷彩",
		"右臉鰭片：眼下四片",
		"左臉鰭片：眼下三片",
		"命名者：Chun-Ting Jeffery Liu",
		"回報者：陳坤田",
		"外型特徵：背甲中間受傷，2017/03/24記錄到時已經有受傷了，目前看起來還沒好。",
	],
	pics: [
		{
			src: "/turtle2.jpg",
			caption: "左臉：",
		},
		{
			src: "/turtle3.jpg",
			caption: "右臉：",
		},
	],
};

const Information = () => {
	return (
		<section className="w-full bg-[#AAF5FA] flex flex-col items-center justify-center overflow-x-hidden">
			<div className="relative z-10 overflow-hidden mt-10 rounded-full h-60 w-60 md:h-80 md:w-80 lg:h-[400px] lg:w-[400px] border-[#F5FDFF] border-solid border-[6px]">
				<Image
					src="/turtle.jpg"
					className="object-cover rounded-full w-full h-full"
					width={400}
					height={400}
					alt="turtle"
				/>
			</div>
			<div className="w-screen relative  h-0">
				<div className="animate-marquee absolute w-full bottom-20">
					<span className="text-[#F5FDFF] text-[80px] md:text-[120px] lg:text-[200px] font-bold whitespace-nowrap">
						information information information
					</span>
				</div>
			</div>

			<InfoCard {...turtleData} />
		</section>
	);
};

interface PicsWithCaption {
	src: string;
	caption: string;
}

interface InfoCardProps {
	title: string;
	details: string[];
	pics: PicsWithCaption[];
}
const InfoCard = ({ title, details, pics }: InfoCardProps) => {
	return (
		<div className="mt-10 md:mt-20 mx-0 md:mx-10">
			<h3 className=" font-bold  bg-t-black-100 w-full lg:w-fit font-700 text-lg lg:text-[22px] py-3 rounded-t-[20px] px-6 lg:px-10">
				{title}
			</h3>
			<div className="bg-white px-10 py-9 w-full lg:max-w-[922px]">
				<div className="w-full  flex flex-wrap gap-6">
					{details.map((detail, index) => (
						<p
							key={detail}
							className={`font-normal md:font-bold border-b-1 border-ocean-light pb-4 w-full pt-2 ${
								index === details.length - 1 && index % 2 === 0
									? "md:w-full"
									: "md:w-[calc(50%-12px)] "
							}`}
						>
							{detail}
						</p>
					))}
				</div>
				<div className="flex flex-col md:flex-row  gap-6 mt-4 ">
					{pics.map((pic) => (
						<figure
							key={pic.caption}
							className="flex flex-col items-start w-full md:w-[calc(50%-12px)] gap-4 border-b-0 md:border-b-1 border-ocean-light pb-0 md:pb-4  "
						>
							<figcaption className="font-normal md:font-bold ">
								{pic.caption}
							</figcaption>
							<Image
								src={pic.src}
								width={409}
								height={262}
								className="object-cover w-full aspect-[109/80] "
								alt={pic.caption}
							/>
						</figure>
					))}
				</div>
			</div>
		</div>
	);
};

export default Information;
