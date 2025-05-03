"use client";
import cn from "classnames";
import { Dispatch, SetStateAction, useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { VscCircle, VscCircleFilled } from "react-icons/vsc";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { GlassCard } from "../GlassCard";

export type SlideImage = React.ComponentProps<"img">;

export type SlideIndicators = {
  on: React.ReactNode;
  off: React.ReactNode;
};

export type SlideNavButtons = {
  prev: React.ReactNode;
  next: React.ReactNode;
};

export type CarouselClassnames = {
  card?: string;
  indicator?: string;
  indicators?: string;
  navButtons?: string;
};

export type Slide = {
  slideContent?: React.ReactNode;
  desktopImage: SlideImage;
  mobileImage?: SlideImage;
};

export type GlassCarouselProps = React.ComponentProps<"div"> & {
  slides: Slide[];
  indicators?: SlideIndicators;
  navButtons?: SlideNavButtons;
  classNames?: CarouselClassnames;
};

export const GlassCarousel = ({
  slides,
  indicators = { on: <VscCircleFilled />, off: <VscCircle /> },
  navButtons = {
    prev: <HiOutlineChevronLeft title="previous slide" />,
    next: <HiOutlineChevronRight title="next slide" />,
  },
  classNames,
  ...props
}: GlassCarouselProps) => {
  const [visibleProject, setVisibleProject] = useState(0);
  const [playExitAnimation, setPlayExitAnimation] = useState(false);
  const [isRightSwipe, setIsRightSwipe] = useState(false);

  const handleSlideChange = async (slide: number) => {
    setPlayExitAnimation(true);
    setTimeout(() => {
      setVisibleProject(slide);
    }, 200);
  };

  return (
    <div className="ui">
      <div className="ui-flex ui-justify-center ui-place-items-center ui-size-fit">
        <button
          onClick={() => {
            setIsRightSwipe(true);
            handleSlideChange(
              visibleProject === 0 ? slides.length - 1 : visibleProject - 1
            );
          }}
          className={cn("ui-p-2 hover:ui-scale-110", classNames?.navButtons)}
        >
          {navButtons.prev}
        </button>
        <div className="ui-w-fit">
          <CarouselSlide
            slides={slides}
            handleSlideChange={handleSlideChange}
            visibleProject={visibleProject}
            playExitAnimation={playExitAnimation}
            setPlayExitAnimation={setPlayExitAnimation}
            isRightSwipe={isRightSwipe}
            setIsRightSwipe={setIsRightSwipe}
            isDesktop={useIsDesktop()}
            indicators={indicators}
            classNames={classNames}
            {...props}
          />
        </div>
        <button
          onClick={() => {
            setIsRightSwipe(false);
            handleSlideChange((visibleProject + 1) % slides.length);
          }}
          className={cn("ui-p-2 hover:ui-scale-110", classNames?.navButtons)}
        >
          {navButtons.next}
        </button>
      </div>
    </div>
  );
};

type CarouselSlideProps = React.ComponentProps<"div"> & {
  handleSlideChange: (slide: number) => Promise<void>;
  visibleProject: number;
  playExitAnimation: boolean;
  setPlayExitAnimation: Dispatch<SetStateAction<boolean>>;
  isRightSwipe: boolean;
  setIsRightSwipe: Dispatch<SetStateAction<boolean>>;
  isDesktop: boolean;
  slides: Slide[];
  indicators: SlideIndicators;
  classNames?: CarouselClassnames;
};

export const CarouselSlide = ({
  handleSlideChange,
  visibleProject,
  playExitAnimation,
  setPlayExitAnimation,
  isRightSwipe,
  setIsRightSwipe,
  isDesktop,
  slides,
  classNames,
  indicators,
  ...props
}: CarouselSlideProps) => {
  // const handleClick = (url: string) => {
  //   window.open(url, "_blank")?.focus();
  // };

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(0); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setIsRightSwipe(false);
      handleSlideChange((visibleProject + 1) % slides.length);
    }
    if (distance < -minSwipeDistance) {
      setIsRightSwipe(true);
      handleSlideChange(
        visibleProject === 0 ? slides.length - 1 : visibleProject - 1
      );
    }
  };

  return (
    <div className="ui">
      <div className="ui-flex ui-flex-col ui-justify-center">
        <div className="ui-flex ui-justify-center">
          <GlassCard className={cn("ui-rounded", classNames?.card)} {...props}>
            <div className="ui-size-fit">
              <div
                className="ui-p-3 ui-rounded-lg ui-overflow-clip ui-relative ui-h-[80svh] ui-w-[80svw] sm:ui-size-fit"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className="ui-size-full ui-place-content-start sm:ui-place-content-end ui-grid ui-grid-cols-1 ui-gap-2"
                  onAnimationEnd={() => setPlayExitAnimation(false)}
                >
                  <div className="ui-flex ui-flex-col ui-items-center ui-w-full ui-h-[400px]">
                    {/* // TODO: make all the static sizes props or dynamic */}
                    <div
                      className={`ui-w-full ui-max-w-[400px] ui-overflow-clip sm:ui-h-[200px] sm:ui-place-content-end ui-relative ${getAnimationClasses(
                        playExitAnimation,
                        isRightSwipe
                      )}`}
                      onAnimationEnd={() => setPlayExitAnimation(false)}
                    >
                      <img
                        src={
                          isDesktop
                            ? slides[visibleProject].desktopImage.src
                            : slides[visibleProject].mobileImage?.src ??
                              slides[visibleProject].desktopImage.src
                        }
                        className="ui-soft-transition ui-w-full ui-h-auto ui-hover:scale-110"
                      />
                    </div>
                    <div className="ui-w-full ui-max-w-[400px] ui-text-pretty">
                      {slides[visibleProject].slideContent}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
        <div
          className={cn(
            "ui-flex ui-gap-1 ui-justify-center ui-p-2",
            classNames?.indicators
          )}
        >
          {slides.map((_, i) => {
            return (
              <button
                className={cn(classNames?.indicator)}
                onClick={() => handleSlideChange(i)}
                key={i}
              >
                {visibleProject === i && indicators.on}
                {visibleProject !== i && indicators.off}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const getAnimationClasses = (
  playExitAnimation: boolean,
  isRightSwipe: boolean
) => {
  return playExitAnimation && isRightSwipe
    ? " ui-animate-rightSwipeExit"
    : playExitAnimation && !isRightSwipe
    ? " ui-animate-leftSwipeExit"
    : !playExitAnimation && isRightSwipe
    ? " ui-animate-rightSwipeEnter ui-opacity-0"
    : !playExitAnimation && !isRightSwipe
    ? " ui-animate-leftSwipeEnter ui-opacity-0"
    : "";
};
