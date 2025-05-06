"use client";
import cn from "classnames";
import { Dispatch, SetStateAction, useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { VscCircle, VscCircleFilled } from "react-icons/vsc";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { Aesthetic, Card } from "../Card/card";

/**
 * Image used in a carousel slide.
 *
 * This type extends all standard HTML <img> element attributes.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img
 */
export type SlideImage = React.ComponentProps<"img">;

/**
 * Custom indicators to be used in the bottom navigation of the carousel component.
 * It is optional to override the indicators, but both types must be overridden if any overriding is done.
 *
 * @property {React.ReactNode} on - What is rendered for an active page.
 * @property {React.ReactNode} off - What is rendered for an inactive page.
 */
export type SlideIndicators = {
  on: React.ReactNode;
  off: React.ReactNode;
};

/**
 * Custom navigation buttons to be used for the previous and next buttons of the carousel component.
 * It is optional to override the navigation buttons, but both types must be overridden if any overriding is done.
 *
 * @property {React.ReactNode} prev - What is rendered for the previous button.
 * @property {React.ReactNode} next - What is rendered for the next button.
 */
export type SlideNavButtons = {
  prev: React.ReactNode;
  next: React.ReactNode;
};

/**
 * Class names for overriding the appearance of the carousel component.
 *
 * @property {string} [card] - [Optional] Class name(s) for the carousel card, which is the container for the slide.
 * @property {string} [indicator] - [Optional] Class name(s) for the individual indicators.
 * @property {string} [indicators] - [Optional] Class name(s) for the indicators container.
 * @property {string} [navButtons] - [Optional] Class name(s) for the navigation buttons.
 */
export type CarouselClassnames = {
  card?: string;
  indicator?: string;
  indicators?: string;
  navButtons?: string;
};

/**
 * A slide to be rendered as part of a carousel component.
 *
 * @property {SlideImage} desktopImage - Image to be rendered in the carousel for desktop resolutions (i.e. for larger breakpoints).
 * @property {SlideImage} [mobileImage] - [Optional] Image to be rendered in the carousel for mobile resolutions (i.e. for smaller breakpoints).
 * @property {React.ReactNode} [slideContent] - [Optional] What is to be rendered under the image, such as a title or description.
 */
export type Slide = {
  desktopImage: SlideImage;
  mobileImage?: SlideImage;
  slideContent?: React.ReactNode;
};

export type CarouselProps = React.ComponentProps<"div"> & {
  slides: Slide[];
  aesthetic?: Aesthetic;
  size?: {
    h?: string;
    w?: string;
  };
  indicators?: SlideIndicators;
  navButtons?: SlideNavButtons;
  classNames?: CarouselClassnames;
};
/**
 * A carousel component.
 *
 * @property {Slide[]} slides - The slides to display.
 * @property {Aesthetic} [aesthetic] - [Optional] Skeuomorphic styling. Choices are `glassmorphic` and `neumorphic`.  Default is `glassmorphic`.
 * @property {{h:string, w:string}} [size] - [Optional] Size of the card in any CSS-acceptable string.  This must be a static size to ensure the navigation buttons don't move when cycling through slides.  Default is `{ h: '28rem', w:'24rem' }`.
 * @property {SlideIndicators} [indicators] - [Optional] Indicators for the pages of the carousel.  Default is `{ on: <VscCircleFilled />, off: <VscCircle /> }`.
 * @property {SlideNavButtons} [navButtons] - [Optional] Previous and next buttons for slide navigation.  Default is `{prev: <HiOutlineChevronLeft title="previous slide" />, next: <HiOutlineChevronRight title="next slide" />}`.
 * @property {CarouselClassnames} [classNames] - [Optional] Class name overrides for various parts of the carousel anatomy.  Targets available are `card`, `indicator`, `indicators`, and `navButtons`.
 */
export const Carousel = ({
  slides,
  size = { h: "28rem", w: "24rem" },
  indicators = { on: <VscCircleFilled />, off: <VscCircle /> },
  navButtons = {
    prev: <HiOutlineChevronLeft title="previous slide" />,
    next: <HiOutlineChevronRight title="next slide" />,
  },
  classNames,
  ...props
}: CarouselProps) => {
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
    <div className="skeui">
      <div className="skeui-flex skeui-justify-center skeui-place-items-center skeui-size-fit">
        <button
          onClick={() => {
            setIsRightSwipe(true);
            handleSlideChange(
              visibleProject === 0 ? slides.length - 1 : visibleProject - 1
            );
          }}
          className={cn(
            "skeui-p-2 hover:skeui-scale-110",
            classNames?.navButtons
          )}
        >
          {navButtons.prev}
        </button>
        <div className="skeui-w-fit">
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
            size={size}
            {...props}
          />
        </div>
        <button
          onClick={() => {
            setIsRightSwipe(false);
            handleSlideChange((visibleProject + 1) % slides.length);
          }}
          className={cn(
            "skeui-p-2 hover:skeui-scale-110",
            classNames?.navButtons
          )}
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
  size?: {
    h?: string;
    w?: string;
  };
  indicators: SlideIndicators;
  classNames?: CarouselClassnames;
  aesthetic?: Aesthetic;
};

const CarouselSlide = ({
  handleSlideChange,
  visibleProject,
  playExitAnimation,
  setPlayExitAnimation,
  isRightSwipe,
  setIsRightSwipe,
  isDesktop,
  slides,
  size,
  classNames,
  indicators,
  aesthetic,
  ...props
}: CarouselSlideProps) => {
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
    <div className="skeui">
      <div className="skeui-flex skeui-flex-col skeui-justify-center">
        <div className="skeui-flex skeui-justify-center">
          <Card
            className={cn("skeui-rounded", classNames?.card)}
            aesthetic={aesthetic}
            {...props}
          >
            <div className="skeui-size-fit">
              <div
                className="skeui-p-3 skeui-rounded-lg skeui-overflow-clip skeui-relative skeui-h-[80svh] skeui-w-[80svw] sm:skeui-size-fit"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className="skeui-size-full skeui-place-content-start sm:skeui-place-content-end skeui-grid skeui-grid-cols-1 skeui-gap-2"
                  onAnimationEnd={() => setPlayExitAnimation(false)}
                >
                  <div
                    className="skeui-flex skeui-flex-col skeui-items-center skeui-w-full"
                    style={{ height: size?.h }}
                  >
                    <div
                      className={`skeui-w-full skeui-overflow-clip  sm:skeui-place-content-end skeui-relative ${getAnimationClasses(
                        playExitAnimation,
                        isRightSwipe
                      )}`}
                      style={{ maxWidth: size?.w }}
                      onAnimationEnd={() => setPlayExitAnimation(false)}
                    >
                      <img
                        src={
                          isDesktop
                            ? slides[visibleProject].desktopImage.src
                            : slides[visibleProject].mobileImage?.src ??
                              slides[visibleProject].desktopImage.src
                        }
                        className="skeui-soft-transition skeui-w-full skeui-h-auto skeui-hover:scale-110"
                      />
                    </div>
                    <div
                      className="skeui-w-full skeui-text-pretty skeui-h-full"
                      style={{ maxWidth: size?.w }}
                    >
                      {slides[visibleProject].slideContent}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div
          className={cn(
            "skeui-flex skeui-gap-1 skeui-justify-center skeui-p-2",
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
    ? " skeui-animate-rightSwipeExit"
    : playExitAnimation && !isRightSwipe
    ? " skeui-animate-leftSwipeExit"
    : !playExitAnimation && isRightSwipe
    ? " skeui-animate-rightSwipeEnter skeui-opacity-0"
    : !playExitAnimation && !isRightSwipe
    ? " skeui-animate-leftSwipeEnter skeui-opacity-0"
    : "";
};
