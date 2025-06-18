import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PlayArrowIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M.667 15.9V2.1q0-.566.4-.95A1.31 1.31 0 0 1 2.35.817q.183.05.35.15l10.867 6.9q.3.2.45.5t.15.633-.15.633-.45.5L2.7 17.033a1.4 1.4 0 0 1-.7.2q-.534 0-.933-.383a1.26 1.26 0 0 1-.4-.95"
    />
  </svg>
);
export default PlayArrowIcon;
