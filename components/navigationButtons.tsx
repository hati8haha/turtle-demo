import { Button, type ButtonProps } from "@nextui-org/button";
import Image from "next/image";

const LeftButton = ({ className, ...buttonProps }: ButtonProps) => (
  <Button
    {...buttonProps}
    className={`py-2 px-2 lg:py-3 lg:px-3 h-fit min-w-0 rounded-full bg-t-black-700 text-white hover:bg-t-black-700/75 transition-colors ${className}`}
    aria-label="Previous slide"
  >
    <Image
      src="/arrow-left-s.svg"
      width={40}
      height={40}
      alt="arrow-left"
      className="rotate-180 w-6 h-6 lg:w-10 lg:h-10"
    />
  </Button>
);

const RightButton = ({ className, ...buttonProps }: ButtonProps) => (
  <Button
    {...buttonProps}
    className={`py-2 px-2 lg:py-3 lg:px-3 h-fit min-w-0 rounded-full bg-t-black-700 text-white hover:bg-t-black-700/75 transition-colors ${className}`}
    aria-label="Next slide"
  >
    <Image
      src="/arrow-left-s.svg"
      width={40}
      height={40}
      alt="arrow-right"
      className="w-6 h-6 lg:w-10 lg:h-10 "
    />
  </Button>
);

export { LeftButton, RightButton };
