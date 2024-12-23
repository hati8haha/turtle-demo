"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const menuItems = [
    { title: "海龜地圖", subtitle: "Map", href: "/map" },
    { title: "文章分享", subtitle: "Article", href: "/article" },
    { title: "關於我們", subtitle: "About", href: "/about" },
    { title: "教育資源", subtitle: "Resources", href: "/resources" },
    { title: "目擊回報", subtitle: "Report Sightings", href: "/report" },
  ];

  const contactInfo = {
    email: "info@gmail.com",
    social: "facebook / instagram",
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {});

  return (
    <div className="w-full text-t-white">
      <nav className={"relative"}>
        <div className="flex items-start justify-between ">
          <div className="flex gap-4 p-2 lg:py-4 lg:px-6 font-black  z-30">
            <Image
              src={isOpen ? "/logo-white.svg" : "/logo.svg"}
              width={22}
              height={22}
              alt="logo"
            />
            <span
              className={`font-blacks text-base transition-colors duration-300 ${
                isOpen ? "text-t-white" : "text-t-black-700"
              }`}
            >
              Turtle Spot Taiwan
            </span>
          </div>
          <Menu
            isOpen={isOpen}
            isSoundOn={isSoundOn}
            onPressSoundBtn={() => {
              if (isSoundOn) {
                audioRef.current?.pause();
                setIsSoundOn(false);
              } else {
                audioRef.current?.play();
                setIsSoundOn(true);
              }
            }}
            onPressToggleMenu={() => setIsOpen(!isOpen)}
          />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              layoutId={"menu-layout"}
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="bg-t-black-700  z-20 rounded-b-[40px] pt-6 absolute top-0 right-0 w-full "
            >
              <div className=" space-y-4 flex flex-col items-end p-10 font-bold gap-10 lg:items-start lg:px-[200px] lg:py-[120px]">
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-10 justyify-between ">
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="block py-2  hover:text-ocean-light transition-colors duration-200"
                      >
                        <span className="text-[18px]">{item.title}</span>
                        <span className="text-[32px] hidden lg:block">
                          {item.subtitle}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-col gap-2 items-end lg:items-start">
                  <span className="font-light text-[14px]">聯絡我們 — </span>
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex flex-col gap-2 items-end lg:items-start">
                  <span className="font-light text-[14px]">社群連結 — </span>
                  <span>{contactInfo.social}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <audio
          className="hidden"
          ref={audioRef}
          id="ocean-waves-audio"
          src="/ocean-waves.mp3"
          controls
          loop
        >
          <track
            kind="captions"
            srcLang="en"
            src="/captions/ocean-waves.vtt"
            label="English"
            default
          />
        </audio>
      </nav>
    </div>
  );
};

export default NavBar;
