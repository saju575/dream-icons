import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const QuestionMarkIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 9 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M6.458 4.675q0-1.032-.69-1.658t-1.82-.625q-.718 0-1.27.292-.555.293-.957.88a.92.92 0 0 1-.634.396.82.82 0 0 1-.693-.193.72.72 0 0 1-.25-.479.82.82 0 0 1 .133-.545q.635-.96 1.57-1.46.936-.5 2.1-.5 1.86 0 3.03 1.065 1.167 1.066 1.167 2.776 0 .906-.387 1.66-.389.753-1.323 1.622-.874.793-1.193 1.288t-.37 1.111a1 1 0 0 1-.295.593.8.8 0 0 1-.587.237.81.81 0 0 1-.587-.235.77.77 0 0 1-.243-.577q0-.837.382-1.53t1.28-1.491q.958-.84 1.298-1.404.34-.563.34-1.223m-2.51 11.236q-.513 0-.881-.37a1.2 1.2 0 0 1-.37-.88q0-.511.37-.88.37-.37.88-.37.512 0 .88.37.37.368.37.88 0 .51-.37.88-.368.37-.88.37"
    />
  </svg>
);
export default QuestionMarkIcon;
