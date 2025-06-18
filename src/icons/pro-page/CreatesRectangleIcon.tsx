import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCreatesRectangleIcon = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.28 2.905H1.527v10.182H14.28z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.84 4.05c.742 0 1.342-.608 1.342-1.358s-.6-1.359-1.341-1.359C1.1 1.334.5 1.943.5 2.694c0 .75.6 1.358 1.34 1.358M14.16 4.05c.74 0 1.34-.608 1.34-1.358s-.6-1.359-1.34-1.359-1.342.609-1.342 1.36c0 .75.6 1.358 1.341 1.358M1.84 14.667c.742 0 1.342-.609 1.342-1.359s-.6-1.358-1.341-1.358C1.1 11.95.5 12.558.5 13.308s.6 1.359 1.34 1.359M14.16 14.667c.74 0 1.34-.609 1.34-1.359s-.6-1.358-1.34-1.358-1.342.608-1.342 1.358.6 1.359 1.341 1.359"
    />
  </svg>
);
export default SvgCreatesRectangleIcon;
