import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.334 6.667c0-2.514 0-3.772.83-4.552.83-.781 2.165-.782 4.837-.782h.515c2.173 0 3.261 0 4.016.532.216.152.408.334.57.537.565.71.565 1.733.565 3.78v1.697c0 1.975 0 2.963-.312 3.752-.503 1.268-1.566 2.268-2.914 2.742-.838.294-1.886.294-3.986.294-1.199 0-1.799 0-2.278-.168a2.76 2.76 0 0 1-1.664-1.567c-.179-.45-.179-1.015-.179-2.144z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.667 8a2.22 2.22 0 0 1-2.222 2.222c-.444 0-.967-.077-1.398.038a1.11 1.11 0 0 0-.786.786c-.116.431-.038.955-.038 1.399A2.22 2.22 0 0 1 6 14.667m-1.667-10h4.667M4.334 7.333h2"
    />
  </svg>
);
export default SvgFileAltIcon;
