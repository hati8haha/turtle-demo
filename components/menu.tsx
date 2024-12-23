"use client";

import { Button, ButtonGroup } from "@nextui-org/button";
import Image from "next/image";
import { motion } from "framer-motion";

interface MenuProps {
  isOpen: boolean;
  isSoundOn: boolean;
  onPressSoundBtn: () => void;
  onPressToggleMenu: () => void;
}

const Menu = ({
  isOpen,
  isSoundOn,
  onPressSoundBtn,
  onPressToggleMenu,
}: MenuProps) => {
  return (
    <ButtonGroup className="bg-t-black-600 rounded-bl-lg gap-[1px] relative  z-30">
      <Button
        radius="none"
        className="bg-t-black-700 text-background min-w-fit px-4"
        style={{ borderRadius: "0px 0px 0px 8px" }}
      >
        <span className="font-bold text-base">EN</span>
      </Button>
      <Button
        className="bg-t-black-700 text-background min-w-fit"
        onPress={onPressSoundBtn}
      >
        <Image
          src={isSoundOn ? "mute.svg" : "/sound-on.svg"}
          width={20}
          height={20}
          alt="volume"
        />
      </Button>
      <Button
        radius="none"
        className="bg-t-black-700 text-background min-w-fit"
        onPress={onPressToggleMenu}
      >
        <Image
          src={isOpen ? "/close.svg" : "/menu.svg"}
          width={20}
          height={20}
          alt="menu"
        />
        <span className=" text-base hidden md:block">MENU</span>
      </Button>
      <motion.div
        className="bg-t-black-600 rounded-bl-lg gap-[1px] absolute top-0 right-0 "
        layoutId={"menu-layout"}
      />
    </ButtonGroup>
  );
};

export default Menu;
