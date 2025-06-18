import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronDownIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 10 6"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M1.766.742 5 3.975 8.233.742a.83.83 0 1 1 1.175 1.175L5.583 5.742a.83.83 0 0 1-1.175 0L.583 1.917a.83.83 0 0 1 0-1.175.85.85 0 0 1 1.183 0"
    />
  </svg>
);
export default SvgChevronDownIcon;
