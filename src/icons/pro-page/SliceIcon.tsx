import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSliceIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 13"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16.368 3.153H7.94M3.476 3.153H1.37M16.369 5.26h-6.314M5.584 5.26H1.369M16.369 7.36h-4.215M7.683 7.36H1.37M16.37 9.474h-2.1M9.798 9.474H1.37M3.559 1l10.619 10.62"
    />
  </svg>
);
export default SvgSliceIcon;
