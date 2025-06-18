import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEpilepsyInfinityIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.625 7.337c1.99-3.668 1.083-6.16-2.321-6.337-2.475.047-5.027 1.38-7.064 3.443-1.71 1.731-3.393 4.21-2.775 6.569.136.52.402.876.822 1.21 1.13.897 2.238.977 4.374.452 2.162-.657 3.503-1.647 4.633-2.66m0 0 .004-.003q.002-.003-.003-.005l-.002.004zm0 0c.247.73.09 1.382-.335 2.66"
    />
  </svg>
);
export default SvgEpilepsyInfinityIcon;
