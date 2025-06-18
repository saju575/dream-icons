import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRerouteIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 17"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7.056 4.172a1.676 1.676 0 1 0 0-3.351 1.676 1.676 0 0 0 0 3.35M7.056 15.178a1.675 1.675 0 1 0 0-3.35 1.675 1.675 0 0 0 0 3.35M7.057 5.833v4.333M.506 11.314 1.445 6.7h2.968l-1.394 3.893h1.51L.974 15.821l1.127-4.066zM13.577 5.349l-.938 4.615H9.67l1.394-3.893h-1.51L13.109.843 11.98 4.908z"
    />
  </svg>
);
export default SvgRerouteIcon;
