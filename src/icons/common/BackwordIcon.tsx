import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const BackwordIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 9 10"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="m1.07 4.417 6.075-3.406c.602-.337 1.355.085 1.355.76v6.457c0 .676-.753 1.098-1.355.76L1.07 5.582zM1.07 1.272A.445.445 0 0 0 .618.833a.445.445 0 0 0-.451.439v7.456c0 .242.202.438.451.438.25 0 .452-.196.452-.438z"
    />
  </svg>
);
export default BackwordIcon;
