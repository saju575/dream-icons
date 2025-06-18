import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemLibraryIcon = ({
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
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M5.059 1.525H3.192c-.92 0-1.667.746-1.667 1.667v1.866c0 .92.747 1.667 1.667 1.667H5.06c.92 0 1.666-.746 1.666-1.667V3.192c0-.92-.746-1.667-1.666-1.667ZM14.817 1.525H12.95c-.92 0-1.667.746-1.667 1.667v1.866c0 .92.746 1.667 1.667 1.667h1.867c.92 0 1.666-.746 1.666-1.667V3.192c0-.92-.746-1.667-1.667-1.667ZM5.059 11.3H3.192c-.92 0-1.667.746-1.667 1.666v1.867c0 .92.747 1.667 1.667 1.667H5.06c.92 0 1.666-.746 1.666-1.667v-1.867c0-.92-.746-1.666-1.666-1.666ZM14.817 11.3H12.95c-.92 0-1.667.746-1.667 1.666v1.867c0 .92.746 1.667 1.667 1.667h1.867c.92 0 1.666-.746 1.666-1.667v-1.867c0-.92-.746-1.666-1.667-1.666Z"
    />
  </svg>
);
export default SvgSystemLibraryIcon;
