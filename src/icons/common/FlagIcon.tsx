import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const FlagIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 11 15"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M.85 13.5c.013-1.157.012-2.297.008-3.386zm.008-3.386C.842 6.474.775 3.408.963 2.195c.244-1.575 2.799-.142 5.85 1.037l1.376.593c1.012.436 2.457 1.21 1.822 2.116-.262.372-.804.799-1.806 1.27z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.85 13.5c.013-1.157.012-2.297.008-3.386m0 0C.842 6.474.775 3.408.963 2.195c.244-1.575 2.799-.142 5.85 1.037l1.376.593c1.012.436 2.457 1.21 1.822 2.116-.262.372-.804.799-1.806 1.27z"
    />
  </svg>
);
export default FlagIcon;
