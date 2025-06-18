import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const BrushIcon = ({
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
      strokeWidth={1.5}
      d="M5.495 11.753c3.088-3.59 10.084-10.598 13.044-10.75 1.83-.174-1.817 6.322-10.46 13.43m1.38-6.39 2.257 2.28M1 18.856c.71-2.507.262-1.275.504-4.162.13-.428.389-1.754 2.01-2.415 1.842-.752 3.193.384 3.542.918 1.029 1.115 1.148 2.5 0 4.082S2.504 19.253 1 18.855"
    />
  </svg>
);
export default BrushIcon;
