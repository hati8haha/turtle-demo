import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-ocean px-6 py-20 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col  ">
          <div className="flex flex-col justify-between">
            <h2 className="text-3xl md:text-[40px] font-black text-t-black-700">
              Turtle Spot Taiwan
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 ">
            <div className="mt-6 text-base text-t-black-600 font-bold lg:self-end ">
              © {new Date().getFullYear()} Turtle Spot Taiwan
            </div>
            <div className="space-y-2">
              <h3 className="text-base text-t-black-700 hidden md:inline-block">
                contact us :
              </h3>
              <div className="space-y-1 textp-[18px] font-bold">
                <a
                  href="mailto:tstservice@gmail.com"
                  className="block text-t-black-700 hover:underline"
                >
                  tstservice@gmail.com
                </a>
                <a
                  href="https://facebook.com"
                  className="block text-t-black-700 hover:underline"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  className="block text-t-black-700 hover:underline"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Sponsor Section */}
            <div className="space-y-2 hidden lg:block">
              <h3 className="text-base text-t-black-700 font-bold ">
                sponsor :
              </h3>
              <div className="flex items-center space-x-2">
                <Image
                  src="/kee-walking-fund.png"
                  alt="Keep Walking Fund"
                  className="h-12 w-auto"
                  width={120}
                  height={105}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
      </div>
    </footer>
  );
};

export default Footer;
