import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFanOutIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 13 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M1.957 5.996H4.61L3.28 9.268h1.276l-2.99 4.392.947-3.413H1.166z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M5.348 4.117a1.808 1.808 0 1 0 0-3.617 1.808 1.808 0 0 0 0 3.617ZM6.107 3.944 7.4 6.754M5.754 7.514l3.28-1.518M10.601 15.5a1.808 1.808 0 1 0 0-3.617 1.808 1.808 0 0 0 0 3.617ZM9.84 12.055 8.55 9.245M10.187 8.493l-3.28 1.51"
    />
  </svg>
);
export default SvgFanOutIcon;
