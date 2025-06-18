import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDifferentialRoutingIcon = ({
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
      strokeMiterlimit={10}
      d="M.5 9.534V5.64a4.59 4.59 0 0 1 4.59-4.59h2.73"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M3.299 9.534V5.679c0-1.014.822-1.836 1.836-1.836H8.17M7.697 1.05V.5l.475.275.474.276-.474.267-.475.276z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7.697 3.843V3.3l.475.267.474.276-.474.275-.475.275zM3.781 12.501l8.116-8.108M13.114 4.875a1.706 1.706 0 1 0 0-3.411 1.706 1.706 0 0 0 0 3.411M2.489 15.5a1.706 1.706 0 1 0 0-3.412 1.706 1.706 0 0 0 0 3.412"
    />
  </svg>
);
export default SvgDifferentialRoutingIcon;
