import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGateSwapIcon = ({
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
      d="M13.532 3.794a1.272 1.272 0 1 0 0-2.544 1.272 1.272 0 0 0 0 2.544"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12.26 2.522H4.93V.5L1.2 4.228l3.555 3.547V5.697h5.71M2.473 14.75a1.272 1.272 0 1 0 0-2.544 1.272 1.272 0 0 0 0 2.544"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M3.744 13.478h7.33V15.5l3.729-3.728-3.555-3.547v2.078H5.53"
    />
  </svg>
);
export default SvgGateSwapIcon;
