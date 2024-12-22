import CarouselSection from "@/sections/carousel";
import FavoriteDiveSite from "@/sections/favoriteDiveSite";
import Information from "@/sections/information";

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			<Information />
			<CarouselSection />
			<FavoriteDiveSite />
		</main>
	);
}
