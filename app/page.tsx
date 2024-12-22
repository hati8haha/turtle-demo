import CarouselSection from "@/sections/carousel";
import Information from "@/sections/information";

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			<Information />
			<CarouselSection />
		</main>
	);
}
