import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCylinderIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 5.075c2.891 0 5.234-1.022 5.234-2.283S8.891.508 6.001.508.768 1.531.768 2.792 3.11 5.075 6 5.075M6 15.492c2.891 0 5.234-1.023 5.234-2.284s-2.343-2.283-5.233-2.283S.768 11.947.768 13.208 3.11 15.492 6 15.492"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.768 2.792v4.7L6 10.925M11.233 13.208V8.15L6 5.075M11.234 2.792V4.95M.768 13.208v-2.333"
    />
  </svg>
);
export default SvgCylinderIcon;
