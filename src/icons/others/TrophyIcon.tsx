import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrophyIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 23"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 3.64a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5a7 7 0 0 1-14 0zm4 18h6l-3-5z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 3.64H3a2 2 0 0 0-2 2v1.24a4 4 0 0 0 2.128 3.535l1.372.726M18 3.64h1a2 2 0 0 1 2 2v.637a5 5 0 0 1-2.66 4.419l-.84.444"
    />
  </svg>
);
export default SvgTrophyIcon;
