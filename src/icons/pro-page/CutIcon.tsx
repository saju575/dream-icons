import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCutIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.506 12.655-2.23.936-5.76-2.464L.5 3.75l5.735 2.393 6.025-2.409-.009 3.556M6.234 6.145l.042 7.446"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m.5 3.75 5.917-2.416 5.843 2.401M12.408 11.75l3.091 2.917M10.361 9.864l.87 3.056 2.37-2.237z"
    />
  </svg>
);
export default SvgCutIcon;
