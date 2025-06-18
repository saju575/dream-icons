import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDuplicateComponentIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M5.817 16.517H3.983a2.497 2.497 0 0 1-2.5-2.5v-1.834M12.191 1.483h1.834c1.383 0 2.5 1.117 2.5 2.5v1.842"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M7.217 1.483H3.983a2.5 2.5 0 0 0-2.5 2.5v3.234a2.5 2.5 0 0 0 2.5 2.5h3.234a2.5 2.5 0 0 0 2.5-2.5V3.983a2.5 2.5 0 0 0-2.5-2.5Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M14.017 16.525h-3.234a2.497 2.497 0 0 1-2.5-2.5v-3.233c0-.692.284-1.317.734-1.767a2.5 2.5 0 0 1 1.766-.733h3.234c1.383 0 2.5 1.116 2.5 2.5v3.233c0 1.383-1.117 2.5-2.5 2.5Z"
    />
  </svg>
);
export default SvgDuplicateComponentIcon;
