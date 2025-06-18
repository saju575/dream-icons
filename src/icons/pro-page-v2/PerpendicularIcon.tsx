import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPerpendicularIcon = ({
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
      d="M10.934 9.992H6.976c-.69 0-1.25.56-1.25 1.25V15.2c0 .69.56 1.25 1.25 1.25h3.958c.69 0 1.25-.56 1.25-1.25v-3.958c0-.69-.56-1.25-1.25-1.25ZM8.95 1.508v8.484M12.184 12.525h4.358M5.725 12.525H1.51"
    />
  </svg>
);
export default SvgPerpendicularIcon;
