import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNewsFeedIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 12.5v-5c0-2.357 0-3.536-.732-4.268S12.358 2.5 10 2.5H6.667c-2.357 0-3.536 0-4.268.732S1.667 5.143 1.667 7.5v5c0 2.357 0 3.535.732 4.268s1.911.732 4.268.732h10M5 6.667h6.667M5 10h6.667M5 13.333h3.333"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 6.667h.833c1.179 0 1.768 0 2.134.366s.366.955.366 2.134v6.666a1.667 1.667 0 1 1-3.333 0z"
    />
  </svg>
);
export default SvgNewsFeedIcon;
