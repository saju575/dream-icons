import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const NftPolygonOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M4.588 14.68v-4.394h.732l1.83 4.394h.733v-4.394m2.562 4.394v-4.394h2.93m-2.93 2.563h2.197m2.563-2.563h2.929m-1.465 0v4.394"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m11.179 1.5 9.511 5.492v10.983l-9.511 5.491-9.512-5.491V6.992z"
    />
  </svg>
);
export default NftPolygonOutlineIcon;
