import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SendIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 13"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M14.5 7.353 1.667 12.77a.82.82 0 0 1-.792-.073.78.78 0 0 1-.375-.698V1.165Q.5.707.875.467a.83.83 0 0 1 .792-.072L14.5 5.81q.52.23.52.771 0 .542-.52.77M2.167 10.749l9.875-4.167-9.875-4.167v2.917l5 1.25-5 1.25z"
    />
  </svg>
);
export default SendIcon;
