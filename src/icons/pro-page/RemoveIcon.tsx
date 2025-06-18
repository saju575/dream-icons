import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const RemoveIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 10 2"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M1 1.667a.65.65 0 0 1-.475-.192A.65.65 0 0 1 .333 1q0-.283.192-.475A.65.65 0 0 1 1 .333h8q.283 0 .475.192A.65.65 0 0 1 9.666 1a.65.65 0 0 1-.191.475.65.65 0 0 1-.475.192z"
    />
  </svg>
);
export default RemoveIcon;
