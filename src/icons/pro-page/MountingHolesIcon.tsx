import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMountingHolesIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7.999 12.167a4.167 4.167 0 1 0 0-8.334 4.167 4.167 0 0 0 0 8.334M15.695.675l-2.638 2.638M.695.675l2.638 2.638M.695 15.375l2.638-2.645M15.695 15.375l-2.638-2.645"
    />
  </svg>
);
export default SvgMountingHolesIcon;
