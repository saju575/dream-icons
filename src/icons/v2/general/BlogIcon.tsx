import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBlogIcon = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.083 10c0-3.732 0-5.598 1.16-6.757 1.159-1.16 3.025-1.16 6.757-1.16s5.598 0 6.757 1.16c1.16 1.16 1.16 3.025 1.16 6.757s0 5.598-1.16 6.757c-1.16 1.16-3.025 1.16-6.757 1.16s-5.598 0-6.758-1.16C2.083 15.597 2.083 13.732 2.083 10Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.333 8.333h.833M8.333 12.5h3.333"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.465 9.552v-.795c0-1.56 0-2.34-.396-2.887-.75-1.037-2.208-.858-3.337-.858-1.128 0-2.586-.179-3.336.858C5 6.417 5 7.197 5 8.757v2.081c0 1.962 0 2.943.607 3.553.608.609 1.585.609 3.54.609h3.092c2.165 0 3.03-1.523 2.688-3.693-.203-1.29-1.317-1.755-2.462-1.755Z"
    />
  </svg>
);
export default SvgBlogIcon;
