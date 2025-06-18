import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCleanSketchIcon = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M15.142 3.642H13.55a.833.833 0 0 0-.833.833v1.592c0 .46.373.833.833.833h1.592c.46 0 .833-.373.833-.833V4.475a.833.833 0 0 0-.833-.833ZM6.174 12.717H4.383a.733.733 0 0 0-.734.733v1.792c0 .405.329.733.734.733h1.791a.733.733 0 0 0 .734-.733V13.45a.733.733 0 0 0-.734-.733Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M3.65 14.342a2.373 2.373 0 0 1-2.192-2.367V3.833a2.374 2.374 0 0 1 2.375-2.375h8.133c1.25 0 2.275.959 2.367 2.184"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M12.566 15.033 6.141 8.608 4.916 4.925 8.599 6.15l7.942 7.942-2.458 2.458zM8.599 6.158l-2.458 2.45M14.383 11.941l-2.458 2.45"
    />
  </svg>
);
export default SvgCleanSketchIcon;
