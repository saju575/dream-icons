import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CardIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 13h1.5m3 0H17M1 6h20M1 9c0-3.537 0-5.306 1.053-6.487q.253-.284.554-.522C3.862 1 5.741 1 9.5 1h3c3.759 0 5.638 0 6.892.99q.302.24.555.523C21 3.693 21 5.463 21 9s0 5.306-1.053 6.487q-.255.285-.555.522C18.138 17 16.26 17 12.5 17h-3c-3.759 0-5.638 0-6.893-.99a4.4 4.4 0 0 1-.554-.523C1 14.307 1 12.537 1 9"
    />
  </svg>
);
export default CardIcon;
