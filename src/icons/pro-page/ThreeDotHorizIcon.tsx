import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThreeDotHorizIcon = ({
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
      d="M1.55 1.867a.83.83 0 0 1-.61-.256.84.84 0 0 1-.252-.615q0-.359.255-.61a.84.84 0 0 1 .615-.253q.359 0 .61.256.253.255.253.614 0 .36-.256.611a.84.84 0 0 1-.614.253m3.447 0a.83.83 0 0 1-.611-.256.84.84 0 0 1-.252-.615q0-.359.255-.61a.84.84 0 0 1 .615-.253q.36 0 .61.256.253.255.253.614 0 .36-.256.611a.84.84 0 0 1-.614.253m3.446 0a.83.83 0 0 1-.611-.256.84.84 0 0 1-.252-.615q0-.359.255-.61A.84.84 0 0 1 8.45.132q.36 0 .611.256.252.255.252.614 0 .36-.256.611a.84.84 0 0 1-.614.253"
    />
  </svg>
);
export default SvgThreeDotHorizIcon;
