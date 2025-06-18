import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SearchAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5.033 9.359q-1.811 0-3.085-1.274T.674 5q0-1.81 1.274-3.085T5.033.641q1.81 0 3.085 1.274t1.274 3.086q0 .793-.277 1.539-.276.746-.735 1.322l4.715 4.715q.117.117.125.224.009.108-.125.24-.133.135-.243.134-.11 0-.242-.133L7.895 8.348a4.7 4.7 0 0 1-1.37.75q-.747.261-1.492.261m0-.667q1.554 0 2.623-1.069T8.726 5t-1.07-2.623q-1.07-1.07-2.623-1.07-1.555 0-2.624 1.07Q1.341 3.445 1.34 5q0 1.554 1.07 2.623 1.068 1.07 2.623 1.07"
    />
  </svg>
);
export default SearchAltIcon;
