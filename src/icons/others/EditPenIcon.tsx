import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const EditPenIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 22"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 14H2.75a1.75 1.75 0 0 0 0 3.5h9.5a1.75 1.75 0 0 1 0 3.5H10m5.946-18.827c.587-.587.88-.88 1.206-1.021.469-.203 1-.203 1.469 0 .325.14.619.434 1.206 1.021s.88.881 1.021 1.206c.203.469.203 1 0 1.469-.14.325-.434.619-1.021 1.206l-5.022 5.022c-1.237 1.237-1.855 1.855-2.63 2.222s-1.646.452-3.387.624L8 14l.078-.788c.172-1.741.257-2.612.624-3.387s.985-1.393 2.222-2.63z"
    />
  </svg>
);
export default EditPenIcon;
