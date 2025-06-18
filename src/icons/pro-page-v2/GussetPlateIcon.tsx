import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGussetPlateIcon = ({
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
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M9.502 12.6H7.91a2.497 2.497 0 0 1-2.5-2.5V8.508M8.502 5.4h1.592c1.383 0 2.5 1.117 2.5 2.5v.992"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="m4.576 4.575 2.192 2.192M13.468 13.467l-2.234-2.234"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M3.693 1.517h-.925c-.69 0-1.25.56-1.25 1.25v.925c0 .69.56 1.25 1.25 1.25h.925c.69 0 1.25-.56 1.25-1.25v-.925c0-.69-.56-1.25-1.25-1.25ZM15.277 13.1h-.925c-.69 0-1.25.56-1.25 1.25v.925c0 .69.56 1.25 1.25 1.25h.925c.69 0 1.25-.56 1.25-1.25v-.925c0-.69-.56-1.25-1.25-1.25ZM15.277 1.517h-.925c-.69 0-1.25.56-1.25 1.25v.925c0 .69.56 1.25 1.25 1.25h.925c.69 0 1.25-.56 1.25-1.25v-.925c0-.69-.56-1.25-1.25-1.25ZM3.693 13.1h-.925c-.69 0-1.25.56-1.25 1.25v.925c0 .69.56 1.25 1.25 1.25h.925c.69 0 1.25-.56 1.25-1.25v-.925c0-.69-.56-1.25-1.25-1.25Z"
    />
  </svg>
);
export default SvgGussetPlateIcon;
