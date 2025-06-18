import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStrechIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M8.821 6.7 6.7 8.821c-.65.651-.65 1.707 0 2.358l2.121 2.12c.651.652 1.707.652 2.357 0l2.122-2.12c.65-.651.65-1.707 0-2.358l-2.122-2.12a1.667 1.667 0 0 0-2.357 0M17.55 17.55l-2.716-2.717M17.55 2.45l-2.716 2.717M2.45 2.45l2.716 2.717M2.45 17.55l2.716-2.717"
    />
  </svg>
);
export default SvgStrechIcon;
