import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRadialPatternIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M2.041 9.528c.851 0 1.541-.684 1.541-1.528 0-.843-.69-1.527-1.54-1.527C1.19 6.473.5 7.157.5 8c0 .844.69 1.528 1.541 1.528ZM13.96 9.528c.85 0 1.54-.684 1.54-1.528 0-.843-.69-1.527-1.54-1.527-.852 0-1.542.684-1.542 1.527 0 .844.69 1.528 1.541 1.528ZM8 4.388c.851 0 1.541-.684 1.541-1.527 0-.844-.69-1.528-1.54-1.528-.852 0-1.542.684-1.542 1.528 0 .843.69 1.527 1.541 1.527ZM8 14.668c.851 0 1.541-.684 1.541-1.528s-.69-1.528-1.54-1.528c-.852 0-1.542.684-1.542 1.528 0 .843.69 1.527 1.541 1.527Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M8 11.612c2.011 0 3.641-1.617 3.641-3.611s-1.63-3.612-3.64-3.612c-2.012 0-3.642 1.617-3.642 3.612 0 1.994 1.63 3.61 3.641 3.61Z"
    />
  </svg>
);
export default SvgRadialPatternIcon;
