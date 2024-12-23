"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { LeftButton, RightButton } from "./navigationButtons";
import Image from "next/image";

export interface StoryData {
    date: string | null;
    title: string | null;
    description: string | null;
    link: string | null;
  }

interface StoriesProps {
  stories: StoryData[];
}

const Stories = ({ stories }: StoriesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = useCallback(() => {
    if (currentIndex < stories.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, isAnimating, stories.length]);

  const handlePrev = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSignificantSwipe = Math.abs(distance) > 50;

    if (isSignificantSwipe) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    setIsAnimating(false);
    const timeout = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => clearTimeout(timeout);
  }, [handleNext]);

  return (
    <div className="relative w-full max-w-md px-8 mx-auto  mt-10 md:mt-20 aspect-[14/17] z-10">
      <div
        ref={containerRef}
        className="relative w-full h-full bg-t-black-700 rounded-t-[40px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="pt-10 flex justify-center gap-1 px-4">
          {stories.map((_, index) => (
            <div
              key={`${_}-${index.toString()}`}
              className={`h-1 w-full  rounded-full transition-all duration-300 relative bg-t-black-500 after:w-full after:absolute  ${
                currentIndex === index
                  ? "after:h-1  after:rounded-full after:bg-t-white after:absolute after:top-0  after: after:animate-storyProgress"
                  : ""
              } `}
            />
          ))}
        </div>
        <div className="flex items-center p-4 gap-3">
          <div className="bg-t-white rounded-full p-2 ">
            <Image src="/logo.svg" alt="logo" width={22} height={22} />
          </div>
          <p className="text-t-black-500">目擊動態</p>
        </div>

        <div
          className={`h-3/4 inset-0 flex flex-col items-center  text-white p-6 transition-all duration-300 justify-around  ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center">
            {stories[currentIndex].date && (
              <div className=" mb-6 text-t-white font-bold text-xl md:text-[28px] ">
                {stories[currentIndex].date}
              </div>
            )}
            {stories[currentIndex].title && (
              <h2 className="text-xl font-bold mb-3 text-t-black-700 bg-t-white px-4 py-1">
                {stories[currentIndex].title}
              </h2>
            )}
            {stories[currentIndex].description && (
              <p className="text-center text-t-black-700 bg-t-white px-4 py-1">
                {stories[currentIndex].description}
              </p>
            )}
          </div>
          {!stories[currentIndex].link && <div />}
          {stories[currentIndex].link && (
            <a
              href={stories[currentIndex].link}
              className="z-10 px-4 py-2 bg-ocean-light text-t-black-700 rounded-full text-base font-bold transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              VIEW POST
            </a>
          )}
        </div>

        <button
          className="absolute top-0 left-0  cursor-default w-1/2 h-full opacity-0"
          type="button"
          onClick={handlePrev}
        />

        <button
          className="absolute top-0 right-0 cursor-default w-1/2 h-full  opacity-0"
          type="button"
          onClick={handleNext}
        />

        {currentIndex > 0 && (
          <LeftButton
            onPress={handlePrev}
            className="absolute -left-20 top-1/2 -translate-y-1/2 invisible md:visible "
          />
        )}
        {currentIndex < stories.length - 1 && (
          <RightButton
            onPress={handleNext}
            className="absolute -right-20 top-1/2 -translate-y-1/2 invisible md:visible"
          />
        )}
      </div>
    </div>
  );
};

export default Stories;
