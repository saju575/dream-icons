import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRectangleBy3XPIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M2.783 5.608v6.275a2.577 2.577 0 0 0 2.575 2.575h.459M14.367 6.833V5.45a2.577 2.577 0 0 0-2.575-2.575H5.801M14.366 11.167a2.167 2.167 0 1 0 0-4.334 2.167 2.167 0 0 0 0 4.334Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M7.967 16.625a2.167 2.167 0 1 0 0-4.333 2.167 2.167 0 0 0 0 4.333ZM5.8 3.542c0 1.2-.967 2.166-2.167 2.166-.3 0-.583-.058-.841-.166a2.17 2.17 0 0 1-1.325-2c0-1.2.966-2.167 2.166-2.167.967 0 1.784.625 2.059 1.5.066.208.108.433.108.667Z"
    />
  </svg>
);
export default SvgRectangleBy3XPIcon;
