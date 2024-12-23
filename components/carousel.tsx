"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import Image from "next/image";
import { LeftButton, RightButton } from "./navigationButtons";

const throttle = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  let isWaiting = false;

  return (...args: T) => {
    if (isWaiting) {
      return;
    }

    callback(...args);
    isWaiting = true;

    setTimeout(() => {
      isWaiting = false;
    }, delay);
  };
};

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

interface AnimationProps {
  initial: {
    opacity: number;
    translateX: number;
  };
  animate: {
    opacity: number;
    translateX: number;
  };
  exit: {
    opacity: number;
    translateX: number;
  };
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlayInterval = 30000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[currDirection, prevDirection], setDirection] = useState([1, 1]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const prevIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1;

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, autoPlayInterval);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length, autoPlayInterval]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleNext = () => {
    handleInteraction();
    console.log(prevDirection, currDirection, "go next");

    setCurrentIndex((prev) => (prev + 1) % images.length);
    setDirection((prev) => [prev[1], 1]);
  };

  const handlePrev = () => {
    console.log(prevDirection, currDirection, "go prev");

    handleInteraction();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setDirection((prev) => [prev[1], -1]);
  };

  const handleDotClick = (index: number) => {
    handleInteraction();
    setCurrentIndex(index);
  };

  const throttledNext = useCallback(throttle(handleNext, 500), []);
  const throttledPrev = useCallback(throttle(handlePrev, 500), []);
  const throttledDotClick = useCallback(throttle(handleDotClick, 500), []);

  // Swipe gesture handling
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  const handleOnDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      handleNext();
    } else if (swipe > swipeConfidenceThreshold) {
      handlePrev();
    }
  };

  const animationProps = {
    prev: {
      initial: {
        opacity: 0,
        translateX: currDirection < 0 ? -1600 : 0,
      },
      animate: {
        opacity: 0.5,
        translateX: -910,
      },
      exit: {
        opacity: 1,
        translateX: currDirection > 0 ? -1600 : 0,
      },
    },
    curr: {
      initial: {
        opacity: 0,
        translateX: 910 * currDirection,
      },
      animate: {
        opacity: 1,
        translateX: 0,
      },
      exit: {
        opacity: 0,
        translateX: -910 * currDirection,
      },
    },
    next: {
      initial: {
        opacity: 0,
        translateX: currDirection > 0 ? 1600 : 0,
      },
      animate: {
        opacity: 0.5,
        translateX: 910,
      },
      exit: {
        opacity: 1,
        translateX: currDirection < 0 ? 1600 : 0,
      },
    },
  };

  return (
    <div className="w-full overflow-x-hidden pt-16 pb-12 lg:pb-14 lg:pt-28 ">
      <div className="relative w-full px-6 max-w-[720px] mx-auto  ">
        <div className="relative aspect-video ">
          <Slide
            animationProps={animationProps.prev}
            imgIndex={prevIndex}
            images={images}
            onDragEnd={handleOnDragEnd}
          />

          <Slide
            animationProps={animationProps.curr}
            imgIndex={currentIndex}
            images={images}
            onDragEnd={handleOnDragEnd}
          />
          <Slide
            animationProps={animationProps.next}
            imgIndex={nextIndex}
            images={images}
            onDragEnd={handleOnDragEnd}
          />
        </div>

        {/* Navigation Buttons */}
        <LeftButton
          onPress={throttledPrev}
          aria-label="Previous slide"
          className="absolute left-1/4 lg:-left-[120px] top-[98%]  lg:top-1/2 -translate-y-1/2 "
        />
        <RightButton
          onPress={throttledNext}
          aria-label="Previous slide"
          className="absolute right-1/4 lg:-right-[120px] top-[98%] lg:top-1/2 -translate-y-1/2 "
        />

        <div className="w-full flex justify-center pt-8 lg:py-8">
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={_}
                onClick={() => throttledDotClick(index)}
                className={`h-[6px] lg:h-[10px] rounded-full transition-all  ${
                  index === currentIndex
                    ? "bg-t-black-700 w-3 lg:w-6"
                    : "bg-t-white w-[6px] lg:w-[10px] "
                }`}
                aria-label={`Go to slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface SlideProps {
  images: string[];
  imgIndex: number;
  onDragEnd: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => void;
  animationProps: AnimationProps;
}
const Slide = ({
  images,
  imgIndex,
  animationProps,
  onDragEnd: handleOnDragEnd,
}: SlideProps) => {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={imgIndex}
        className="absolute w-full h-full "
        {...animationProps}
        transition={{ duration: 0.5 }}
        drag="x"
        dragConstraints={{ left: 200, right: 200 }}
        dragElastic={1}
        onDragEnd={handleOnDragEnd}
      >
        <Image
          src={images[imgIndex]}
          alt={`Slide ${imgIndex + 1}`}
          className="w-full h-full object-cover rounded-2xl"
          width={720}
          height={540}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Carousel;
