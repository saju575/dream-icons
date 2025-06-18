import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRevolveAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.074 9.392v7.141h-8.15V14.75M3.924 8.017v-6.55h8.15V3.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.2 11.634C1.99 11.1.507 10.125.507 9c0-1.683 3.35-3.05 7.491-3.05 4.142 0 7.492 1.367 7.492 3.05 0 1.525-2.758 2.792-6.358 3.017"
    />
    <path fill="currentColor" d="M4.008 9.875 6.566 12l-3.117 1.15z" />
  </svg>
);
export default SvgRevolveAltIcon;
