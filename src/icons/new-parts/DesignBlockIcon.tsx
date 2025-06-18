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
    viewBox="0 0 20 19"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M7.47 8.004a2 2 0 0 0 .986-1.723V4.187a2 2 0 0 0-.988-1.725L5.74 1.448a2 2 0 0 0-2.024 0L1.988 2.462A2 2 0 0 0 1 4.187v2.094a2 2 0 0 0 .985 1.723l1.728 1.018a2 2 0 0 0 2.03 0zM17.334 8.004a2 2 0 0 0 .986-1.724V4.188a2 2 0 0 0-.99-1.726l-1.734-1.015a2 2 0 0 0-2.023 0l-1.729 1.015a2 2 0 0 0-.988 1.725v2.094a2 2 0 0 0 .986 1.723l1.728 1.019a2 2 0 0 0 2.029 0zM12.416 16.53a2 2 0 0 0 .984-1.723v-2.094a2 2 0 0 0-.987-1.725l-1.73-1.015a2 2 0 0 0-2.022 0l-1.735 1.015a2 2 0 0 0-.99 1.726v2.092a2 2 0 0 0 .987 1.724l1.735 1.02a2 2 0 0 0 2.029-.002zM8.456 5.237h2.401M11.654 10.517l.957-1.922M7.935 10.226 6.885 8.62"
    />
  </svg>
);
export default SvgDesignBlockIcon;
