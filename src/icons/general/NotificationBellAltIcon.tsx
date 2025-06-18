import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const NotificationBellAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 22"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.158 10.49c-.073 1.397.011 2.883-1.236 3.818A2.3 2.3 0 0 0 1 16.153C1 17.15 1.782 18 2.8 18h14.4c1.018 0 1.8-.85 1.8-1.847 0-.726-.342-1.41-.922-1.845-1.247-.935-1.163-2.421-1.236-3.817a6.85 6.85 0 0 0-13.684 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 18a3 3 0 0 1-6 0M8.5 2.125C8.5 2.953 9.172 4 10 4s1.5-1.047 1.5-1.875S10.828 1 10 1s-1.5.297-1.5 1.125"
    />
  </svg>
);
export default NotificationBellAltIcon;
