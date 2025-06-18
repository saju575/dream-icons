import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGearAltIcon = ({
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
      strokeWidth={2}
      d="M11.39 2.787C9.986 2.537 9.94.774 8.537 1.024c-1.406.25-.842 1.916-2.086 2.632-1.244.715-2.407-.61-3.32.483s.59 2.013.098 3.356S1 8.578 1 10s1.745 1.163 2.228 2.506-1.02 2.264-.098 3.356 2.085-.224 3.32.483.672 2.39 2.086 2.631c1.414.242 1.45-1.512 2.855-1.763s2.049 1.396 3.284.68.134-2.094 1.056-3.186 2.47-.25 2.953-1.593c.484-1.342-1.244-1.691-1.244-3.123s1.728-1.781 1.244-3.124c-.483-1.342-2.04-.5-2.953-1.593-.913-1.091.17-2.622-1.128-3.221s-1.807.966-3.213.715z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.12 12.918a2.918 2.918 0 1 0 0-5.835 2.918 2.918 0 0 0 0 5.835"
    />
  </svg>
);
export default SvgGearAltIcon;
