import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOptimizeIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 7"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M1.37.5h4.615M11.746.5h4.623M4.847 3.198l1.138 1.504H1.37M4.846 6.206l1.138-1.504M12.891 6.206l-1.145-1.504h4.623M12.891 3.198l-1.145 1.504"
    />
  </svg>
);
export default SvgOptimizeIcon;
