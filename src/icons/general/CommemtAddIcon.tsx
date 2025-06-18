import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CommemtAddIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 22"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.5 1.012A11 11 0 0 0 11 1C5.478 1 1 5.284 1 10.567c0 2.538 1.033 4.845 2.719 6.556.371.377.619.892.519 1.422a5.3 5.3 0 0 1-1.087 2.348 6.5 6.5 0 0 0 4.224-.657c.454-.241.681-.362.842-.386s.39.018.848.104c.638.12 1.286.18 1.935.18 5.522 0 10-4.284 10-9.567q0-.286-.017-.567M14 4.5h7M17.5 1v7m-6.504 3h.008m3.987 0H15m-8 0h.009"
    />
  </svg>
);
export default CommemtAddIcon;
