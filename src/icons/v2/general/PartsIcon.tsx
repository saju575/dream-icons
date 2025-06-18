import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPartsIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.162 3.333H10.58a1 1 0 0 0-1 1v6.878a1 1 0 0 0 1 1h1.583a1 1 0 0 0 1-1V4.333a1 1 0 0 0-1-1M17.1 7.772h-3.938M9.58 5.98H6.65M9.58 9.25H6.65M4.506 11.49v4.438M2.5 13.708h4.151"
    />
  </svg>
);
export default SvgPartsIcon;
