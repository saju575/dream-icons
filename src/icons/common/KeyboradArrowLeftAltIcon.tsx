import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const KeyboradArrowLeftAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 7 12"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M6.71 9.88 2.83 6l3.88-3.88A.996.996 0 1 0 5.3.71L.71 5.3a.996.996 0 0 0 0 1.41L5.3 11.3c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42"
    />
  </svg>
);
export default KeyboradArrowLeftAltIcon;
