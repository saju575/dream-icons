import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDistanceBetween2PointVerticalIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 4 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.955 14.543A.955.955 0 0 0 2 13.587a.955.955 0 0 0-.954.956c0 .529.427.957.954.957a.955.955 0 0 0 .954-.957M2.955 1.456A.955.955 0 0 0 2 .5a.955.955 0 0 0-.954.956c0 .529.427.957.954.957a.955.955 0 0 0 .954-.957M2 12.645l.745-1.287H1.262zM2 3.375l-.738 1.292h1.483zM2 10.406V5.618"
    />
  </svg>
);
export default SvgDistanceBetween2PointVerticalIcon;
