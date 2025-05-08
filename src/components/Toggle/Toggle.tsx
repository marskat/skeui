"use client";
import cn from "classnames";
import React from "react";
import { FaCircle } from "react-icons/fa6";
import { Card } from "../Card";
import { Aesthetic } from "../Card/card";

/**
 * Class names for overriding the appearance of the toggle component.
 *
 * @property {string} [thumb] - [Optional] Class name(s) for the thumb.
 * @property {string} [track] - [Optional] Class name(s) for the track.
 */
export type ToggleClassnames = {
  thumb?: string;
  track?: string;
};

export type ToggleProps = React.ComponentProps<"button"> & {
  aesthetic?: Aesthetic;
  isOn?: boolean;
  setIsOn?: React.Dispatch<React.SetStateAction<boolean>>;
  thumb?: React.ReactNode;
  classNames?: ToggleClassnames;
};

/**
 * A toggle component.
 *
 * @property {Aesthetic} [aesthetic] - [Optional] Skeuomorphic styling. Choices are `glassmorphic` and `neumorphic`.  Default is `glassmorphic`.
 * @property {boolean} [isOn] - [Optional] Controls the toggle's on/off position.  Default is `false`.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} [setIsOn] - [Optional] The setState function to control isOn.  No default behavior.
 * @property {React.ReactNode} [thumb] - [Optional] The thumb component.  Default is `<FaCircle />`.
 * @property {ToggleClassnames} [classNames] - [Optional] Class name overrides for parts of the toggle anatomy.  Targets available are `thumb` and `track`.
 *
 * This type extends all standard HTML `<button>` element attributes.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button
 */
export const Toggle = ({
  aesthetic = "glassmorphic",
  isOn = false,
  setIsOn,
  thumb = <FaCircle />,
  classNames,
  ...props
}: ToggleProps) => {
  return (
    <div className="skeui">
      {aesthetic == "glassmorphic" && (
        <button
          className="skeui-size-fit"
          onClick={() => setIsOn?.(!isOn)}
          {...props}
        >
          <Card
            aesthetic="glassmorphic"
            className={cn(
              "skeui-rounded-full before:skeui-rounded-full",
              classNames?.track
            )}
          >
            <div
              className={cn(
                "skeui-flex skeui-text-2xl skeui-scale-110",
                classNames?.thumb
              )}
            >
              <span
                className={cn(
                  `${!isOn && "skeui-invisible"}`,
                  "skeui-transition-hard",
                  `${isOn && "skeui-animate-toggleToRight"}`
                )}
              >
                {thumb}
              </span>
              <span
                className={cn(
                  `${isOn && "skeui-invisible"}`,
                  "skeui-transition-hard",
                  `${!isOn && "skeui-animate-toggleToLeft"}`
                )}
              >
                {thumb}
              </span>
            </div>
          </Card>
        </button>
      )}
      {aesthetic == "neumorphic" && (
        <button
          className="skeui-size-fit"
          onClick={() => setIsOn?.(!isOn)}
          {...props}
        >
          <Card
            aesthetic="neumorphic"
            inset
            fullyRounded
            className={cn(classNames?.track)}
          >
            <div
              className={cn(
                "skeui-flex skeui-text-2xl skeui-scale-110",
                classNames?.thumb
              )}
            >
              <span
                className={cn(
                  `${!isOn && "skeui-invisible"}`,
                  "skeui-transition-hard",
                  `${isOn && "skeui-animate-toggleToRight"}`
                )}
              >
                {thumb}
              </span>
              <span
                className={cn(
                  `${isOn && "skeui-invisible"}`,
                  "skeui-transition-hard",
                  `${!isOn && "skeui-animate-toggleToLeft"}`
                )}
              >
                {thumb}
              </span>
            </div>
          </Card>
        </button>
      )}
    </div>
  );
};
