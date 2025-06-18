import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ZoomInThinIcon = ({
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
      d="M4.704 5.333H3.631a.33.33 0 0 1-.239-.096A.32.32 0 0 1 3.295 5a.327.327 0 0 1 .336-.333h1.073v-1.07q0-.141.097-.237a.32.32 0 0 1 .237-.096q.14 0 .234.096a.33.33 0 0 1 .094.237v1.07h1.066a.333.333 0 0 1 .242.566.32.32 0 0 1-.237.097h-1.07v1.073a.33.33 0 0 1-.097.239.32.32 0 0 1-.238.096.32.32 0 0 1-.231-.096.32.32 0 0 1-.097-.237zm.33 4.026q-1.815 0-3.088-1.271Q.674 6.816.674 5.003q0-1.814 1.271-3.088Q3.217.64 5.03.641q1.814 0 3.088 1.272t1.274 3.088q0 .793-.277 1.539-.276.746-.735 1.322l4.715 4.715q.117.117.125.224.009.108-.125.24-.133.135-.243.134-.11 0-.242-.133L7.895 8.348a4.7 4.7 0 0 1-1.37.75q-.747.261-1.492.261m-.001-.667q1.554 0 2.623-1.069T8.726 5t-1.07-2.623q-1.07-1.07-2.623-1.07-1.555 0-2.624 1.07Q1.341 3.445 1.34 5q0 1.554 1.07 2.623 1.068 1.07 2.623 1.07"
    />
  </svg>
);
export default ZoomInThinIcon;
