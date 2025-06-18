import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SearchIcon = ({
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
      fill="currentColor"
      d="M7.501 14.602q-2.977 0-5.039-2.062T.4 7.501t2.062-5.039T7.501.4t5.039 2.062 2.062 5.039a6.66 6.66 0 0 1-1.42 4.151L19.3 17.77q.3.3.3.765 0 .464-.3.765-.3.3-.765.3t-.765-.3l-6.118-6.118a6.659 6.659 0 0 1-4.151 1.42m0-2.185q2.048 0 3.482-1.434t1.434-3.482-1.434-3.482-3.482-1.434-3.482 1.434T2.585 7.5t1.434 3.482q1.433 1.434 3.482 1.434"
    />
  </svg>
);
export default SearchIcon;
