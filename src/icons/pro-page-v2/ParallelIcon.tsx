import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgParallelIcon = ({
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
      d="M14.85 1.517H3.15c-.893 0-1.617.722-1.617 1.612s.724 1.613 1.617 1.613h11.7c.893 0 1.617-.722 1.617-1.613 0-.89-.724-1.612-1.617-1.612ZM14.85 4.742H3.15c-.893 0-1.617.722-1.617 1.612s.724 1.613 1.617 1.613h11.7c.893 0 1.617-.722 1.617-1.613 0-.89-.724-1.612-1.617-1.612Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M3.15 11.2a1.62 1.62 0 0 1-1.617-1.617c0-.891.725-1.616 1.617-1.616h11.708c.892 0 1.617.725 1.617 1.616S15.75 11.2 14.858 11.2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M6.024 11.092v3.666c0 .917.75 1.667 1.667 1.667h2.617c.916 0 1.666-.75 1.666-1.667v-3.666"
      opacity={0.96}
    />
  </svg>
);
export default SvgParallelIcon;
