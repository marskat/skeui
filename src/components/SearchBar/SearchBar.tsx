import cn from "classnames";
import { Card } from "../Card";

/**
 * Class names for overriding the appearance of the search bar component.
 *
 * @property {string} [thumb] - [Optional] Class name(s) for the input.
 * @property {string} [track] - [Optional] Class name(s) for the icon.
 */
export type SearchBarClassnames = {
  input?: string;
  icon?: string;
};

export type SearchBarProps = React.ComponentProps<"div"> & {
  aesthetic?: "glassmorphic" | "neumorphic";
  isDarkMode?: boolean;
  inset?: boolean;
  icon?: React.ReactNode;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  classNames?: {
    input?: string;
    icon?: string;
  };
};

/**
 * A skeuomorphic search bar.
 *
 * @property {Aesthetic} [aesthetic] - [Optional] Skeuomorphic styling. Choices are `glassmorphic` and `neumorphic`.  Default is `glassmorphic`.
 * @property {boolean} [isDarkMode] - [Optional] Adjust the shadow blending to lower the contrast for dark modes.  Default is `false`.
 * @property {boolean} [inset] - [Optional] Apply neumorphic inset.  Default is `false`.
 * @property {React.ReactNode} [icon] - [Optional] The icon which appears on the search bar.  Default is `"🔍"`.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} [setSearch] - [Optional] The setState function to control the search result.  No default behavior.
 * @property {string} [placeholder] - [Optional] The placeholder text which appears in the search bar.  Default is `"Search..."`.
 * @property {SearchBarClassnames} [classNames] - [Optional] Class name overrides for parts of the search bar anatomy.  Targets available are `input` and `icon`.
 *
 * This type extends all standard HTML `<div>` element attributes.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div
 */
export const SearchBar = ({
  aesthetic = "glassmorphic",
  inset,
  isDarkMode = false,
  icon = "🔍",
  placeholder = "Search...",
  setSearch,
  classNames,
  className,
  ...props
}: SearchBarProps) => {
  return (
    <div className="skeui">
      {aesthetic === "glassmorphic" && (
        <div
          className={cn(
            "skeui-backdrop-blur-2xl skeui-soft-transition skeui-gp-inside-shadow skeui-size-full",
            className
          )}
          {...props}
        >
          <div className="skeui-flex skeui-gap-2 skeui-items-center skeui-p-2">
            <div className={cn(classNames?.icon)}>{icon}</div>
            <input
              placeholder={placeholder}
              className={cn(
                "skeui-size-full skeui-bg-transparent skeui-p-1 skeui-outline-none skeui-pointer-events-auto z-50",
                classNames?.input
              )}
              onInput={(e) => setSearch?.(e.currentTarget.value)}
            />
          </div>
        </div>
      )}
      {aesthetic === "neumorphic" && (
        <Card
          aesthetic={aesthetic}
          isDarkMode={isDarkMode}
          inset={inset}
          {...props}
        >
          <div className="skeui-flex skeui-gap-2 skeui-items-center skeui-p-1">
            <div
              className={cn(
                `${inset === true ? "skeui-pl-2" : ""}`,
                classNames?.icon
              )}
            >
              {icon}
            </div>
            <input
              placeholder={placeholder}
              className={cn(
                "skeui-size-full skeui-bg-transparent skeui-outline-none skeui-pointer-events-auto z-50",
                `${inset === true ? "skeui-p-2" : "skeui-p-1"}`,
                classNames?.input
              )}
              onInput={(e) => setSearch?.(e.currentTarget.value)}
            />
          </div>
        </Card>
      )}
    </div>
  );
};
