import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LockIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 10 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M1.6 13.067q-.444 0-.755-.314a1.04 1.04 0 0 1-.312-.758v-5.99q0-.443.314-.758.315-.315.758-.314h.528v-1.6q0-1.193.838-2.03A2.77 2.77 0 0 1 5.004.467q1.194 0 2.029.836.834.837.834 2.03v1.6h.528q.443 0 .758.314.314.314.314.758v5.99q0 .443-.315.758-.315.314-.758.314zm.005-.867h6.79a.2.2 0 0 0 .147-.058.2.2 0 0 0 .058-.147v-5.99a.2.2 0 0 0-.058-.147.2.2 0 0 0-.147-.058h-6.79a.2.2 0 0 0-.147.058.2.2 0 0 0-.058.147v5.99q0 .09.058.147a.2.2 0 0 0 .147.058m3.398-2.167q.433 0 .732-.302.298-.302.298-.735t-.302-.73a1 1 0 0 0-.735-.3q-.433 0-.73.303-.3.302-.3.734 0 .433.303.732.302.298.734.298M3 4.933h4v-1.6q0-.833-.583-1.416A1.93 1.93 0 0 0 5 1.333q-.834 0-1.417.584A1.93 1.93 0 0 0 3 3.333z"
    />
  </svg>
);
export default LockIcon;
