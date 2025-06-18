import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserOutlineIcon = ({
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
      strokeWidth={1.667}
      d="M10.024 9.429a3.677 3.677 0 1 0 0-7.354 3.677 3.677 0 0 0 0 7.354M4.02 16.49c-.657-.53-.813-1.469-.238-2.086 1.06-1.137 3.026-2.702 5.893-2.827 3.121-.144 5.34 1.507 6.505 2.671.585.586.486 1.511-.12 2.076l-1.222 1.137a1.67 1.67 0 0 1-1.135.447H6.37c-.38 0-.749-.13-1.045-.368z"
    />
  </svg>
);
export default SvgUserOutlineIcon;
