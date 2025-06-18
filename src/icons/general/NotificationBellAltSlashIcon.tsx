import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const NotificationBellAltSlashIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 22"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.005 18H3.8C2.781 18 2 17.15 2 16.153c0-.726.342-1.41.922-1.845 1.248-.935 1.163-2.421 1.237-3.817C4.247 8.816 4.931 7.141 6 6m2.5-1.5a6.5 6.5 0 0 1 2.502-.5 6.85 6.85 0 0 1 6.844 6.491c.074 1.396-.01 2.882 1.237 3.817.54.405.873 1.024.917 1.692"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 18a3 3 0 0 1-6 0m13 3L1 1m8.5 1.125C9.5 2.953 10.172 4 11 4s1.5-1.047 1.5-1.875S11.828 1 11 1s-1.5.297-1.5 1.125"
    />
  </svg>
);
export default NotificationBellAltSlashIcon;
