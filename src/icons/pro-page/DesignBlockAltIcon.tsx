import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDesignBlockIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 15"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M5.728 6.267a2 2 0 0 0 .985-1.724V3.18a2 2 0 0 0-.988-1.725L4.62.805a2 2 0 0 0-2.025 0l-1.106.65A2 2 0 0 0 .5 3.18v1.363a2 2 0 0 0 .985 1.724l1.106.652a2 2 0 0 0 2.03 0zM13.948 6.267a2 2 0 0 0 .987-1.725v-1.36a2 2 0 0 0-.99-1.727L12.833.804a2 2 0 0 0-2.023.001l-1.107.65a2 2 0 0 0-.988 1.725v1.363A2 2 0 0 0 9.7 6.268l1.108.652a2 2 0 0 0 2.028.001zM9.848 13.372a2 2 0 0 0 .985-1.723v-1.364a2 2 0 0 0-.988-1.725l-1.107-.65a2 2 0 0 0-2.023-.001l-1.112.651a2 2 0 0 0-.99 1.726v1.361a2 2 0 0 0 .987 1.724l1.112.654a2 2 0 0 0 2.029 0zM6.713 3.864h2M9.379 8.264l.798-1.602M6.279 8.022l-.875-1.339"
    />
  </svg>
);
export default SvgDesignBlockIcon;
