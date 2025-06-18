import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CheckBoxCheckedIcon = ({
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
      fill="currentColor"
      d="M6.833 9.167 5.042 7.375a.8.8 0 0 0-.584-.23.8.8 0 0 0-.583.23.8.8 0 0 0-.23.583q0 .354.23.584l2.375 2.375a.8.8 0 0 0 .583.25.8.8 0 0 0 .584-.25l4.708-4.709a.8.8 0 0 0 .23-.583.8.8 0 0 0-.23-.583.8.8 0 0 0-.583-.23.8.8 0 0 0-.584.23zM2.167 15.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V2.167Q.5 1.479.99.99 1.479.5 2.167.5h11.666q.688 0 1.177.49.49.489.49 1.177v11.666q0 .688-.49 1.177-.489.49-1.177.49zm0-1.667h11.666V2.167H2.167z"
    />
  </svg>
);
export default CheckBoxCheckedIcon;
