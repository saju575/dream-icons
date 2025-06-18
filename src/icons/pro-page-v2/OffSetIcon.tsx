import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOffSetIcon = ({
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
      d="M5.283 3.133h-2.15c-.92 0-1.666.746-1.666 1.667v2.15c0 .92.746 1.667 1.666 1.667h2.15c.92 0 1.667-.747 1.667-1.667V4.8c0-.92-.746-1.667-1.667-1.667ZM6.95 5.883h9.542M11.726 1.5v4.383M12.676 14.867h2.15c.92 0 1.666-.747 1.666-1.667v-2.15c0-.92-.746-1.667-1.667-1.667h-2.15c-.92 0-1.666.747-1.666 1.667v2.15c0 .92.746 1.667 1.666 1.667ZM11.009 12.117H1.467M5.658 12.117v4.475"
    />
  </svg>
);
export default SvgOffSetIcon;
