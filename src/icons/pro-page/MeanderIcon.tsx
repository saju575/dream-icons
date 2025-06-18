import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMeanderIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M1 8.903h.632c.332 0 .656.065.964.186.307.122.581.3.814.527.233.226.415.494.54.793.125.292.191.616.183.932l-.025 5.062a.7.7 0 0 0 .266.381.73.73 0 0 0 .449.154.77.77 0 0 0 .465-.122.7.7 0 0 0 .29-.372L7.69 2.455l.016-.048c.125-.438.4-.818.773-1.094A2.13 2.13 0 0 1 9.784.9h.05c.473.008.939.162 1.313.454.374.283.64.68.748 1.134l.008.032v.04l1.845 14.013a.68.68 0 0 0 .274.381c.133.09.291.146.457.146.158 0 .316-.04.44-.13a.7.7 0 0 0 .275-.356l.058-5.314c.008-.64.283-1.247.756-1.692a2.58 2.58 0 0 1 1.762-.697H19"
    />
  </svg>
);
export default SvgMeanderIcon;
