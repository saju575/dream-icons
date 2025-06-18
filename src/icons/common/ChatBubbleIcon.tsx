import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ChatBubbleIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 19"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="m4 16-2.3 2.3q-.476.475-1.087.212Q0 18.25 0 17.575V2Q0 1.176.588.588A1.93 1.93 0 0 1 2 0h16q.824 0 1.413.588Q20 1.175 20 2v12q0 .825-.587 1.412A1.93 1.93 0 0 1 18 16zm-.85-2H18V2H2v13.125z"
    />
  </svg>
);
export default ChatBubbleIcon;
