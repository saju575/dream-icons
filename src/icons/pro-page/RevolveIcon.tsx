import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRevolveIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 8 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M4 15.5c1.84 0 3.333-3.358 3.333-7.5S5.84.5 3.999.5.666 3.858.666 8s1.492 7.5 3.333 7.5Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M4.068 10.833c.59 0 1.069-1.082 1.069-2.416C5.137 7.082 4.658 6 4.068 6S3 7.082 3 8.417s.478 2.416 1.068 2.416Z"
    />
  </svg>
);
export default SvgRevolveIcon;
