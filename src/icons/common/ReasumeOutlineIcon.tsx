import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ReasumeOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 15"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.242 8.205c-.295 1.119-1.686 1.91-4.47 3.492-2.692 1.529-4.038 2.293-5.122 1.986a2.7 2.7 0 0 1-1.187-.7c-.796-.805-.796-2.364-.796-5.483 0-3.12 0-4.678.796-5.483a2.7 2.7 0 0 1 1.187-.7c1.084-.308 2.43.457 5.122 1.986 2.783 1.582 4.176 2.373 4.47 3.492a2.75 2.75 0 0 1 0 1.41"
    />
  </svg>
);
export default ReasumeOutlineIcon;
