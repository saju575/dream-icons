import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ForwordIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 10 9"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M8.263 4.084 2.19.678C1.586.341.833.763.833 1.438v6.457c0 .676.753 1.098 1.356.76l6.074-3.406zM8.263.939c0-.243.203-.439.452-.439.25 0 .452.196.452.439v7.456a.445.445 0 0 1-.452.438.445.445 0 0 1-.452-.438z"
    />
  </svg>
);
export default ForwordIcon;
