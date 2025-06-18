import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPortIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.25 1.293c-.866.161-1.503.446-2.007.95-.503.504-.788 1.141-.95 2.007m12.458-2.957c.866.161 1.503.446 2.007.95s.789 1.141.95 2.007m-6.124-3.162a203 203 0 0 0-1.583-.005q-.854 0-1.584.005m9.496 6.329q.006.73.004 1.583.002.854-.004 1.583M1.088 7.417q-.004.73-.004 1.583-.001.854.004 1.583m.205 3.167c.162.867.447 1.503.95 2.008.504.503 1.142.788 2.008.95m12.457-2.958c-.161.867-.446 1.503-.95 2.008-.504.503-1.141.788-2.007.95m-3.167.205q-.73.004-1.583.004-.854 0-1.584-.005"
    />
  </svg>
);
export default SvgPortIcon;
