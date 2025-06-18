import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPatternAltIcon = ({
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
      d="M4.859 1.525H3.192c-.92 0-1.667.746-1.667 1.667v1.666c0 .92.747 1.667 1.667 1.667H4.86c.92 0 1.666-.746 1.666-1.667V3.192c0-.92-.746-1.667-1.666-1.667ZM14.792 11.508h-1.666c-.92 0-1.667.747-1.667 1.667v1.667c0 .92.746 1.666 1.667 1.666h1.666c.92 0 1.667-.746 1.667-1.666v-1.667c0-.92-.746-1.667-1.667-1.667ZM4.025 6.525v7.483M13.959 4.025v7.483M11.459 4.025H6.525M11.459 14.842H6.525M1.5 13.175v1.667c0 .916.75 1.666 1.667 1.666h1.666c.917 0 1.667-.75 1.667-1.666v-2.909c0-.916.75-1.666 1.667-1.666h1.866M16.508 4.842V3.175c0-.917-.75-1.667-1.667-1.667h-1.666c-.917 0-1.667.75-1.667 1.667v2.908c0 .917-.75 1.667-1.667 1.667H7.975"
    />
  </svg>
);
export default SvgPatternAltIcon;
