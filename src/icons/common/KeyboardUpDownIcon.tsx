import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const KeyboardUpDownIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 8 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="m4 2.858 2.05 2.05a.83.83 0 1 0 1.175-1.175l-2.642-2.65a.83.83 0 0 0-1.175 0L.767 3.733a.83.83 0 1 0 1.175 1.175zm0 10.284-2.05-2.05a.83.83 0 1 0-1.175 1.175l2.642 2.65a.83.83 0 0 0 1.175 0l2.641-2.642A.83.83 0 1 0 6.058 11.1z"
    />
  </svg>
);
export default KeyboardUpDownIcon;
