import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAiPromtIcon = ({
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
      d="m8.333 5.833-.43 1.162c-.563 1.523-.845 2.285-1.4 2.84-.556.556-1.318.838-2.841 1.401l-1.162.43 1.162.43c1.523.564 2.285.846 2.84 1.401.556.556.838 1.318 1.401 2.84l.43 1.163.43-1.162c.564-1.523.846-2.285 1.401-2.84.556-.556 1.318-.838 2.84-1.402l1.163-.43-1.162-.43c-1.523-.563-2.285-.845-2.84-1.4-.556-.556-.838-1.318-1.402-2.841zM15 2.5l-.184.498c-.242.653-.363.98-.6 1.217-.239.238-.565.36-1.218.6L12.5 5l.498.184c.653.242.98.363 1.217.6.238.239.36.565.6 1.218L15 7.5l.184-.498c.242-.653.363-.98.6-1.217.239-.238.565-.36 1.218-.6L17.5 5l-.498-.184c-.653-.242-.98-.363-1.217-.6-.238-.239-.36-.565-.6-1.218z"
    />
  </svg>
);
export default SvgAiPromtIcon;
