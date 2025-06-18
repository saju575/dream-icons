import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const RedoIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 13 11"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M11.237 4.06H4.785q-1.295 0-2.21.882-.911.882-.912 2.164 0 1.282.913 2.171.912.89 2.21.89h5.627q.178 0 .298.12.12.119.12.296 0 .178-.12.298a.4.4 0 0 1-.298.12H4.785Q3.15 11 1.99 9.863.831 8.727.83 7.106q0-1.622 1.16-2.75 1.158-1.128 2.795-1.128h6.452L9.061 1.05a.42.42 0 0 1-.125-.287.4.4 0 0 1 .125-.302.4.4 0 0 1 .295-.133q.162 0 .294.133l2.712 2.711a.7.7 0 0 1 .153.223q.044.114.044.248 0 .135-.044.249a.7.7 0 0 1-.153.222L9.65 6.827a.42.42 0 0 1-.286.125.4.4 0 0 1-.303-.125.4.4 0 0 1-.133-.295.4.4 0 0 1 .133-.295z"
    />
  </svg>
);
export default RedoIcon;
