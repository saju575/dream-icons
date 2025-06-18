import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSphereIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M8 10.98c4.142 0 7.5-1.334 7.5-2.98S12.142 5.019 8 5.019.5 6.354.5 7.999c0 1.647 3.358 2.982 7.5 2.982Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M8 15.5c2.122 0 3.842-3.358 3.842-7.5S10.122.5 8 .5 4.16 3.858 4.16 8 5.88 15.5 8 15.5Z"
    />
  </svg>
);
export default SvgSphereIcon;
