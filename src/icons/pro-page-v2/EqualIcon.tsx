import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEqualIcon = ({
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
      d="M3.991 4.708V3.183c0-.916.75-1.666 1.667-1.666h6.692c.916 0 1.666.75 1.666 1.666v1.525M14.008 13.375V14.9c0 .917-.75 1.667-1.667 1.667H5.658c-.917 0-1.667-.75-1.667-1.667v-1.525M4.866 4.708H3.108c-.92 0-1.667.746-1.667 1.667v5.242c0 .92.747 1.666 1.667 1.666h1.758c.92 0 1.667-.746 1.667-1.666V6.375c0-.92-.746-1.667-1.667-1.667ZM14.892 4.708h-1.758c-.921 0-1.667.746-1.667 1.667v5.242c0 .92.746 1.666 1.666 1.666h1.759c.92 0 1.666-.746 1.666-1.666V6.375c0-.92-.746-1.667-1.666-1.667ZM1.441 7.567h5.092M1.441 10.467h5.092M11.467 7.567h5.091M11.467 10.467h5.091"
    />
  </svg>
);
export default SvgEqualIcon;
