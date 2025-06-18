import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CoinDoubleIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 30 30"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.21 13.667A9.481 9.481 0 0 0 16.332 26.79M17.667 23a10.667 10.667 0 1 0 0-21.334 10.667 10.667 0 0 0 0 21.334"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.028 9.94c-.288-1.216-1.755-2.313-3.516-1.493s-2.041 3.464.623 3.744c1.204.126 1.989-.147 2.706.628.72.774.854 2.93-.984 3.512-1.837.581-3.656-.327-3.854-1.616m2.645-7.71v1.16m0 8.344v1.163"
    />
  </svg>
);
export default CoinDoubleIcon;
