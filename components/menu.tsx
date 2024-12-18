import { Button, ButtonGroup } from "@nextui-org/button";
import Image from "next/image";

const Menu = () => {
  return (
    <ButtonGroup>
      <Button
        radius="none"
        className="bg-[#161616] text-background min-w-fit px-4"
        style={{ borderRadius: "0px 0px 0px 8px" }}
      >
        <span className="font-bold text-base">EN</span>
      </Button>
      <div className="w-[1px] h-10 bg-[#363841]" />
      <Button className="bg-[#161616] text-background min-w-fit">
        
      <Image src='/volume.svg' width={20} height={20} alt='volume'  />
        
      </Button>
      <div className="w-[1px] h-10 bg-[#363841]" />
      <Button radius="none" className="bg-[#161616] text-background">
        <div className="flex flex-col gap-2">
          <div className="w-4 h-0.5 bg-background" />
          <div className="w-4 h-0.5 bg-background" />
        </div>
        <span className=" text-base hidden md:block">MENU</span>
      </Button>
    </ButtonGroup>
  );
};

export default Menu;
