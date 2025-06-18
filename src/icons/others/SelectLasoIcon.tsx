import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SelectLasoIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 22"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 1v6M1 4h6m4 0h3m-3 17h3m3-17h.5A3.5 3.5 0 0 1 21 7.5V8m0 9v.5a3.5 3.5 0 0 1-3.5 3.5H17m-9 0h-.5A3.5 3.5 0 0 1 4 17.5V17m17-6v3M4 11v3"
    />
  </svg>
);
export default SelectLasoIcon;
