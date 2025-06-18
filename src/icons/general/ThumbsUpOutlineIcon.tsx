import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ThumbsUpOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 10.5a2 2 0 0 1 2-2 3 3 0 0 1 3 3v4a3 3 0 0 1-3 3 2 2 0 0 1-2-2zm13.479-4.694-.267.86c-.218.705-.327 1.057-.243 1.336a1 1 0 0 0 .42.547c.251.158.63.158 1.39.158h.404c2.57 0 3.855 0 4.462.76q.105.131.185.277c.467.848-.064 1.991-1.126 4.277-.974 2.098-1.462 3.147-2.366 3.764q-.132.09-.27.17c-.952.545-2.132.545-4.492.545h-.511c-2.86 0-4.289 0-5.177-.86C6 16.779 6 15.394 6 12.624v-.974c0-1.455 0-2.183.258-2.85.259-.666.753-1.213 1.743-2.309l4.091-4.53c.103-.114.154-.17.2-.21a1.033 1.033 0 0 1 1.442.091c.04.045.083.108.17.234.135.196.202.294.261.392.528.871.687 1.906.446 2.89a9 9 0 0 1-.132.448"
    />
  </svg>
);
export default ThumbsUpOutlineIcon;
