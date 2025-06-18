import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArVrIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 12"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.277 10.549h3.494a2.856 2.856 0 0 0 2.858-2.858V3.828h-15v3.863a2.856 2.856 0 0 0 2.858 2.858H7.98M4.587 1.18c.278-.25.638-.387 1.012-.387h7.308c.397 0 .779.156 1.063.434v0c.97.952.296 2.601-1.063 2.601H5.599c-1.393 0-2.05-1.719-1.012-2.648M3.83 5.793h2.201"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.98 10.549 1.145-1.98 1.152 1.98"
    />
  </svg>
);
export default SvgArVrIcon;
