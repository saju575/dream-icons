import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const UserOutlineIcon = ({
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
      strokeWidth={1.5}
      d="M6.578 15.482c-1.415.842-5.125 2.562-2.865 4.715C4.816 21.248 6.045 22 7.59 22h8.818c1.546 0 2.775-.752 3.878-1.803 2.26-2.153-1.45-3.873-2.865-4.715a10.66 10.66 0 0 0-10.843 0M16.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
    />
  </svg>
);
export default UserOutlineIcon;
