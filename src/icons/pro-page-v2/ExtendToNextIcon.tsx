import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExtendToNextIcon = ({
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
      d="M8.999 1.525v14.95M12.049 1.525V9M5.95 9v7.475M12.999 13.917h3.525"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.2}
      d="M12.816 13.54v.748l-.649-.373z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M5 4.083H1.475"
    />
    <path fill="currentColor" d="m4.583 2.675 2.45 1.408L4.583 5.5z" />
  </svg>
);
export default SvgExtendToNextIcon;
