import type { SVGProps } from "react";
import React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const MenuDotOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.25 10.5a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5M18 9.357V10.5m0-1.143a2.93 2.93 0 0 1-2.427-1.272M18 9.357a2.93 2.93 0 0 0 2.427-1.272m-4.854 0-1.073.7m1.073-.7a2.8 2.8 0 0 1 0-3.17m4.854 3.17 1.073.7m-1.073-.7a2.8 2.8 0 0 0 0-3.17M18 3.643a2.93 2.93 0 0 1 2.427 1.272M18 3.643a2.93 2.93 0 0 0-2.427 1.272M18 3.643V2.5m2.427 2.415 1.073-.701m-5.927.701-1.073-.7M17.75 22a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5M6.25 22a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5"
    />
  </svg>
);
export default MenuDotOutlineIcon;
