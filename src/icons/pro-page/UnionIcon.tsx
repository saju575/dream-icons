import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnionIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.694 6.845c.279-.06.572-.087.871-.087C9.011 6.758 11 8.712 11 11.129S9.011 15.5 6.565 15.5s-4.434-1.96-4.434-4.37M2.13 11.129H1V.5h4.693v6.345"
    />
  </svg>
);
export default SvgUnionIcon;
