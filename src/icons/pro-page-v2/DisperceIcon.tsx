import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDisperceIcon = ({
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
      d="M10.733 5.9H7.875c-.92 0-1.667.746-1.667 1.667v2.858c0 .92.746 1.667 1.667 1.667h2.858c.92 0 1.667-.747 1.667-1.667V7.567c0-.92-.747-1.667-1.667-1.667ZM16.492 4.45V3.167c0-.917-.75-1.667-1.667-1.667h-1.033M14.108 3.892 16 2M4.45 1.508H3.167c-.917 0-1.667.75-1.667 1.667v1.033M3.892 3.892 2 2M1.509 13.55v1.283c0 .917.75 1.667 1.666 1.667H4.21M3.892 14.108 2 16M13.55 16.492h1.283c.917 0 1.667-.75 1.667-1.667v-1.033M14.108 14.108 16 16"
    />
  </svg>
);
export default SvgDisperceIcon;
