import Image from "next/image";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="row-start-1 flex gap-6 flex-wrap items-start justify-between bg-ocean-light">
      <div className="flex gap-4 p-2 lg:py-4 lg:px-6 font-black">
        <Image src="/logo.svg" width={22} height={22} alt="logo" />
        <span className="font-blacks text-2xl">Turtle Spot Taiwan</span>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
