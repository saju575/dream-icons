import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CircleQuestionFillIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 28 28"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 27.333c7.364 0 13.333-5.97 13.333-13.333S21.363.667 14 .667.667 6.637.667 14 6.637 27.333 14 27.333m-1.333-7a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0m5.259-6.824a4.67 4.67 0 0 1-2.593 1.964v.86a1.333 1.333 0 0 1-2.666 0v-2A1.333 1.333 0 0 1 14 13a2 2 0 1 0-1.448-3.38c-.43.45-1.009.889-1.62.766l-.202-.04c-.722-.145-1.206-.863-.863-1.515A4.67 4.67 0 0 1 14 6.333a4.67 4.67 0 0 1 3.925 7.176"
      clipRule="evenodd"
    />
  </svg>
);
export default CircleQuestionFillIcon;
