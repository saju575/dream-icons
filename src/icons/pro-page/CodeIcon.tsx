import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CodeIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 12"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="m2.473 6.214 4.058 4.058q.207.207.212.522a.7.7 0 0 1-.212.532.72.72 0 0 1-.527.217.72.72 0 0 1-.527-.217L.982 6.83A.83.83 0 0 1 .727 6.2q0-.18.057-.337a.8.8 0 0 1 .198-.296l4.495-4.494a.74.74 0 0 1 1.069 0 .74.74 0 0 1 .233.534q0 .303-.233.535zm15.061-.03-4.057-4.058a.73.73 0 0 1-.213-.523.7.7 0 0 1 .213-.531.72.72 0 0 1 .527-.218q.31 0 .527.218l4.494 4.494a.83.83 0 0 1 .256.633.832.832 0 0 1-.256.633l-4.494 4.494a.7.7 0 0 1-.523.22.74.74 0 0 1-.531-.236.74.74 0 0 1-.233-.534q0-.303.233-.535z"
    />
  </svg>
);
export default CodeIcon;
