import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const GridCompactIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 12"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M.8 11.295V.705h14.398v10.59zm.667-7.282h2.766V1.372H1.467zm3.433 0h2.766V1.372H4.9zm3.433 0h2.766V1.372H8.333zm3.433 0h2.766V1.372h-2.766zm0 3.307h2.766V4.68h-2.766zm-3.433 0h2.766V4.68H8.333zm-3.433 0h2.766V4.68H4.9zm-.667-2.64H1.467v2.64h2.766zm7.533 5.948h2.766V7.987h-2.766zm-3.433 0h2.766V7.987H8.333zm-3.433 0h2.766V7.987H4.9zm-3.433 0h2.766V7.987H1.467z"
    />
  </svg>
);
export default GridCompactIcon;
