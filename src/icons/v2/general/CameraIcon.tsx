import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCameraIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.226 7.125c2.619.384 4.635 2.637 4.635 5.356v5.866a2.517 2.517 0 0 1-2.518 2.518H6.337a2.517 2.517 0 0 1-2.518-2.518v-5.866c0-2.719 2.016-4.972 4.634-5.356"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.34 17.098a3.138 3.138 0 1 0 0-6.277 3.138 3.138 0 0 0 0 6.277M8.444 9.032V6.76a3.894 3.894 0 0 1 3.896-3.895 3.894 3.894 0 0 1 3.895 3.895V8.65"
    />
    <path
      fill="currentColor"
      d="M12.3 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    />
  </svg>
);
export default SvgCameraIcon;
