import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ThumbDownAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M2 13q-.8 0-1.4-.6T0 11V9q0-.176.05-.375.05-.2.1-.375l3-7.05q.225-.5.75-.85T5 0h11v13l-6 5.95q-.375.375-.887.438-.513.062-.988-.188a1.58 1.58 0 0 1-.7-.7q-.225-.45-.1-.925L8.45 13zm12-.85V2H5L2 9v2h9l-1.35 5.5zM19 0q.824 0 1.413.588Q21 1.175 21 2v9q0 .825-.587 1.412A1.93 1.93 0 0 1 19 13h-3v-2h3V2h-3V0z"
    />
  </svg>
);
export default ThumbDownAltIcon;
