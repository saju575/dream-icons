import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileDownloadIcon = ({
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
      d="M7.334 1.334h.182c2.173 0 3.261 0 4.016.531q.325.231.57.537c.565.71.565 1.734.565 3.78V7.88c0 1.975 0 2.963-.312 3.752-.503 1.268-1.566 2.268-2.914 2.742-.838.294-1.886.294-3.986.294-1.199 0-1.799 0-2.278-.168a2.76 2.76 0 0 1-1.664-1.567c-.179-.45-.179-1.015-.179-2.144V8"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.667 8a2.22 2.22 0 0 1-2.222 2.222c-.444 0-.968-.077-1.399.038a1.11 1.11 0 0 0-.786.786c-.115.431-.038.955-.038 1.399A2.22 2.22 0 0 1 6 14.667M2 5c.328.338 1.2 1.667 1.667 1.667m0 0c.466 0 1.338-1.33 1.666-1.667M3.667 6.667V1.334"
    />
  </svg>
);
export default SvgFileDownloadIcon;
