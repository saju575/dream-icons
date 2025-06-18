import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSaveDisplayConfigurationIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m15.117 10.275 1.442-.425a1.216 1.216 0 0 0 .825-1.517l-.175-.583a1.217 1.217 0 0 0-1.517-.825l-.458.133a1.22 1.22 0 0 1-1.292-.408s-.008-.017-.017-.025a1.19 1.19 0 0 1-.183-1.225l.275-.683a1.224 1.224 0 0 0-.666-1.592l-.559-.233a1.214 1.214 0 0 0-1.591.666l-.192.467c-.184.45-.617.75-1.109.758h-.016a1.23 1.23 0 0 1-1.092-.625l-.367-.65a1.23 1.23 0 0 0-1.666-.475l-.525.292a1.21 1.21 0 0 0-.467 1.658L6 5.408c.242.425.192.959-.108 1.342 0 0-.008.017-.017.025a1.2 1.2 0 0 1-1.158.458L4 7.117a1.22 1.22 0 0 0-1.4 1.008l-.1.6c-.108.667.342 1.3 1.009 1.408l1.341.217"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M8.8 9.983h2.426c.917 0 1.667.75 1.667 1.667v5.858l-2.875-3.766-2.875 3.766V11.65c0-.917.75-1.667 1.666-1.667z"
    />
  </svg>
);
export default SvgSaveDisplayConfigurationIcon;
