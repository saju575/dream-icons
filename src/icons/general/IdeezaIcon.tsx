import type { SVGProps } from "react";
import React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IdeezaIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 15"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="m1.555 4.258.007-.01C2.867 2.56 5.94 1 9.904 1c2.638 0 4.978.644 6.624 1.633C18.195 3.633 19 4.876 19 6.06c0 1.584-1.053 2.915-3.345 3.601l-.014.004-.013.005a12.3 12.3 0 0 0-4.523 2.678l-.04.037-.036.042a4.4 4.4 0 0 1-3.011 1.516c-1.63-.017-2.707-.463-3.217-1.543a13.9 13.9 0 0 0-2.952-4.64l-.018-.019-.02-.018a2.57 2.57 0 0 1-.256-3.466Z"
    />
    <path
      fill="currentColor"
      d="M12.682 6.924a.65.65 0 0 1 .233.243.69.69 0 0 1 0 .666.65.65 0 0 1-.233.243L7.949 10.91a.61.61 0 0 1-.633 0 .65.65 0 0 1-.232-.243.7.7 0 0 1-.084-.333v-5.67c0-.117.029-.232.084-.333a.65.65 0 0 1 .232-.243.61.61 0 0 1 .633 0z"
    />
  </svg>
);
export default IdeezaIcon;
