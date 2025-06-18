import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSignalIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M1.972 15.05c.792 0 1.434-3.07 1.434-6.858s-.642-6.859-1.434-6.859S.54 4.403.54 8.192c0 3.787.642 6.858 1.433 6.858ZM13.422 15.05c.791 0 1.433-3.07 1.433-6.858s-.642-6.859-1.433-6.859c-.792 0-1.434 3.07-1.434 6.859 0 3.787.642 6.858 1.434 6.858ZM3.414 8.192h8.575"
    />
  </svg>
);
export default SvgSignalIcon;
