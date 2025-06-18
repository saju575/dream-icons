import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ShareAltIcon = ({
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 9.333a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M7 17.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M21 25.667a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M10.022 15.762l7.968 4.643M17.978 7.595l-7.957 4.643"
    />
  </svg>
);
export default ShareAltIcon;
