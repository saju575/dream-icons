import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrimIcon = ({
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
      d="M9.184 16.508v-.833M9.184 12.175v-8.05M9.184 2.375v-.833M3.017 7.492V5.7a2.664 2.664 0 0 1 2.666-2.667M5.683 14.967A2.664 2.664 0 0 1 3.017 12.3v-1.85"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M3.675 10.45H2.383a.836.836 0 0 1-.833-.833V8.325c0-.458.375-.833.833-.833h1.292c.458 0 .833.375.833.833v1.292a.836.836 0 0 1-.833.833ZM14.983 7.492V5.7a2.664 2.664 0 0 0-2.667-2.667M12.316 14.967a2.664 2.664 0 0 0 2.667-2.667v-1.85"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M14.325 10.45h1.292a.836.836 0 0 0 .833-.833V8.325a.836.836 0 0 0-.833-.833h-1.284a.836.836 0 0 0-.833.833v1.292c0 .458.375.833.833.833z"
    />
  </svg>
);
export default SvgTrimIcon;
