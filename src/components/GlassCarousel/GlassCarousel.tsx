"use client";
import { Dispatch, SetStateAction, useState } from "react";
import {
  HiArrowTopRightOnSquare,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi2";
import { VscCircle, VscCircleFilled } from "react-icons/vsc";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { GlassButton } from "../Button";
import { GlassPanel } from "../GlassPanel";

export type Slide = {
  title: string;
  tags: string[];
  link: string;
  desktopPreviewImage: string;
  mobilePreviewImage?: string;
};

export type GlassCarouselProps = {
  slides: Slide[];
  neumorphic?: boolean;
};

export const GlassCarousel = ({
  slides,
  neumorphic = false,
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
        <GlassButton
          title="previous slide"
          className="ui-p-3"
          onClick={() => {
            setIsRightSwipe(true);
            handleSlideChange(
              visibleProject === 0 ? slides.length - 1 : visibleProject - 1
            );
          }}
        >
          <HiOutlineChevronLeft />
        </GlassButton>
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
            neumorphic={neumorphic}
          />
        </div>
        <GlassButton
          title="next slide"
          className="ui-p-3"
          onClick={() => {
            setIsRightSwipe(false);
            handleSlideChange((visibleProject + 1) % slides.length);
          }}
        >
          <HiOutlineChevronRight />
        </GlassButton>
      </div>
    </div>
  );
};

type CarouselSlideProps = {
  handleSlideChange: (slide: number) => Promise<void>;
  visibleProject: number;
  playExitAnimation: boolean;
  setPlayExitAnimation: Dispatch<SetStateAction<boolean>>;
  isRightSwipe: boolean;
  setIsRightSwipe: Dispatch<SetStateAction<boolean>>;
  isDesktop: boolean;
  slides: Slide[];
  neumorphic?: boolean;
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
  neumorphic = false,
}: CarouselSlideProps) => {
  const handleClick = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

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
    <div className="ui-flex ui-flex-col ui-justify-center">
      <div className="ui-flex ui-justify-center">
        <GlassPanel
          rounded={["t-lg", "b-lg"]}
          overallClassName="ui-size-fit"
          neumorphic={neumorphic}
        >
          <div className="ui-size-fit">
            <div
              className="ui-p-3 ui-rounded-lg ui-overflow-clip ui-relative ui-h-[80svh] ui-w-[80svw] sm:ui-size-fit"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className={`ui-size-full ui-place-content-start sm:ui-place-content-end ${getAnimationClasses(
                  playExitAnimation,
                  isRightSwipe
                )}`}
                onAnimationEnd={() => setPlayExitAnimation(false)}
              >
                <div
                  className={`ui-size-full sm:ui-h-[200px] ui-overflow-clip sm:ui-place-content-end ui-relative ${getAnimationClasses(
                    playExitAnimation,
                    isRightSwipe
                  )}`}
                  onAnimationEnd={() => setPlayExitAnimation(false)}
                >
                  <img
                    src={
                      isDesktop
                        ? slides[visibleProject].desktopPreviewImage
                        : slides[visibleProject].mobilePreviewImage ??
                          slides[visibleProject].desktopPreviewImage
                    }
                    className="ui-soft-transition ui-size-full ui-hover:scale-110"
                  />
                </div>
                <span className="ui-h-full ui-absolute sm:ui-static ui-w-full ui-top-0 ui-bg-gradient-to-b ui-from-orange-600 ui-to-transparent">
                  <div className="ui-grid ui-gap-5 ui-p-2">
                    <div className="ui-grid ui-gap-2">
                      <h4>{slides[visibleProject].title}</h4>
                      <div className="ui-flex ui-gap-2">
                        {slides[visibleProject].tags.map((tag, i) => {
                          return (
                            <div
                              className="ui-border ui-border-slate-800 ui-text-slate-800 ui-rounded-full ui-px-1 ui-text-sm ui-pointer-events-none ui-select-none"
                              key={i}
                            >
                              {"#" + tag}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <button
                      className="ui-p-2"
                      title={`visit ${slides[visibleProject].link}`}
                      onClick={() => handleClick(slides[visibleProject].link)}
                    >
                      <HiArrowTopRightOnSquare />
                    </button>
                    {/* <button
                      className="ui-btn ui-w-fit"
                      title={`visit ${slides[visibleProject].link}`}
                      onClick={() => handleClick(slides[visibleProject].link)}
                    >
                      <span className="ui-flex ui-gap-2">
                        check it out{" "}
                        <HiArrowTopRightOnSquare className="ui-self-center" />
                      </span>
                    </button> */}
                  </div>
                </span>
              </div>
            </div>
          </div>
        </GlassPanel>
        {/* <div className="glass-panel-wrapper before:rounded-lg relative w-fit">
        </div> */}
      </div>
      <div className="ui-flex ui-justify-center ui-p-2">
        {slides.map((_, i) => {
          return (
            <button
              className="ui-text-slate-800"
              onClick={() => handleSlideChange(i)}
              key={i}
            >
              {visibleProject === i && <VscCircleFilled />}
              {visibleProject !== i && <VscCircle />}
            </button>
          );
        })}
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
