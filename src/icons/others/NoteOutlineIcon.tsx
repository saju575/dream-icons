import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const NoteOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.53 10.01h7.06M19.47 10.01h-7.06M1.53 5.52h17.94M1.53 14.51h17.94M1.53 1.02h8.97M10.5 19.01h8.97"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M8.6 9.11v1.81a1 1 0 0 0 1 1h1.81a1 1 0 0 0 1-1V9.11a1 1 0 0 0-1-1H9.6a1 1 0 0 0-1 1Z"
    />
  </svg>
);
export default NoteOutlineIcon;
