import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderIcon = ({
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
      strokeWidth={1.5}
      d="M6.667 5.833h7.292c1.755 0 2.633 0 3.264.422a2.5 2.5 0 0 1 .69.69c.42.63.42 1.508.42 3.263 0 2.926 0 4.39-.702 5.44a4.2 4.2 0 0 1-1.15 1.15c-1.05.702-2.513.702-5.439.702H10c-3.928 0-5.892 0-7.113-1.22-1.22-1.22-1.22-3.185-1.22-7.113V6.62c0-1.514 0-2.27.317-2.838a2.5 2.5 0 0 1 .965-.965C3.517 2.5 4.273 2.5 5.787 2.5c.97 0 1.455 0 1.88.16.968.363 1.368 1.243 1.805 2.118L10 5.833"
    />
  </svg>
);
export default SvgFolderIcon;
