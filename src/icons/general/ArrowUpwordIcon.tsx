import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowUpwordIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 13 13"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5.87 2.644 1.56 6.952a.59.59 0 0 1-.435.184.62.62 0 0 1-.443-.197.65.65 0 0 1-.187-.439.58.58 0 0 1 .187-.439L5.967.778a.7.7 0 0 1 .527-.214.69.69 0 0 1 .527.213l5.284 5.284a.6.6 0 0 1 .177.429.62.62 0 0 1-.177.45.61.61 0 0 1-.445.193.61.61 0 0 1-.446-.194L7.119 2.644v9.481q0 .267-.18.446a.6.6 0 0 1-.445.18.6.6 0 0 1-.445-.18.6.6 0 0 1-.18-.446z"
    />
  </svg>
);
export default ArrowUpwordIcon;
