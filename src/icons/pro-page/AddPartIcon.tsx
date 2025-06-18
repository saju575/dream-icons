import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAddPartIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 15"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M10.163 1.333H8.58a1 1 0 0 0-1 1v6.878a1 1 0 0 0 1 1h1.583a1 1 0 0 0 1-1V2.333a1 1 0 0 0-1-1M15.1 5.772h-3.938M7.58 3.98H4.652M7.58 7.25H4.652"
    />
    <path
      stroke="#FE2AD4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M2.506 9.489v4.439M.5 11.708h4.151"
    />
  </svg>
);
export default SvgAddPartIcon;
