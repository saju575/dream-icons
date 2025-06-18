import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const EditPenAltIcon = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.423 13.464C5.33 9.341 9.237 5.217 13.134 1.093c.64-.03 1.268-.062 1.907-.093l3.114 3.114v1.67C13.969 9.887 9.783 14 5.598 18.104c-1.536-.02-3.072-.031-4.598-.052.144-1.536.278-3.072.423-4.598zM15.989 7.917l-4.825-4.742M10.629 18.062c2.794.02 5.577.03 8.371.052"
    />
  </svg>
);
export default EditPenAltIcon;
