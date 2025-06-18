import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const QuickReorderIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M1.414 17.3a.73.73 0 0 1-.534-.216.73.73 0 0 1-.216-.534q0-.319.216-.534a.73.73 0 0 1 .534-.216h3.923v-2.25H2.414a.73.73 0 0 1-.534-.216.73.73 0 0 1-.216-.534q0-.319.216-.534a.73.73 0 0 1 .534-.216h2.923V9.8H3.464a.73.73 0 0 1-.534-.216.73.73 0 0 1-.216-.534q0-.319.216-.534a.73.73 0 0 1 .534-.216h1.873V5.37L3.803 2.02a.75.75 0 0 1-.024-.575.7.7 0 0 1 .383-.423A.75.75 0 0 1 4.737 1a.7.7 0 0 1 .423.383L6.98 5.3h11.715l-1.592-3.375a.75.75 0 0 1-.024-.575.7.7 0 0 1 .383-.423.74.74 0 0 1 .575-.023q.297.105.423.383l1.696 3.652a1.7 1.7 0 0 1 .181.763v10.079q0 .633-.443 1.076a1.47 1.47 0 0 1-1.076.443zm9.423-6.75h4q.319 0 .535-.216a.73.73 0 0 0 .215-.534.73.73 0 0 0-.215-.534.73.73 0 0 0-.535-.216h-4a.73.73 0 0 0-.534.216.73.73 0 0 0-.216.534q0 .32.216.535a.73.73 0 0 0 .534.215m-4 5.25h12v-9h-12z"
    />
  </svg>
);
export default QuickReorderIcon;
