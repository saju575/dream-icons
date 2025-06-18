import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const KeyIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 23 12"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M6 8q-.824 0-1.412-.588A1.93 1.93 0 0 1 4 6q0-.824.588-1.412A1.93 1.93 0 0 1 6 4q.824 0 1.412.588Q8 5.175 8 6q0 .824-.588 1.412A1.93 1.93 0 0 1 6 8m0 4q-2.5 0-4.25-1.75T0 6t1.75-4.25T6 0q1.676 0 3.037.825A6.2 6.2 0 0 1 11.2 3h8.375q.2 0 .387.075.188.075.338.225l2 2q.15.15.212.325.063.175.063.375t-.062.375a.9.9 0 0 1-.213.325l-3.175 3.175a1 1 0 0 1-.3.2q-.175.075-.35.1a.8.8 0 0 1-.35-.025.9.9 0 0 1-.325-.175L16.5 9l-1.425 1.075a.945.945 0 0 1-.887.15.9.9 0 0 1-.288-.15L12.375 9H11.2a6.2 6.2 0 0 1-2.162 2.175Q7.675 12 6 12m0-2q1.4 0 2.463-.85A4.03 4.03 0 0 0 9.875 7H13l1.45 1.025L16.5 6.5l1.775 1.375L20.15 6l-1-1H9.875a4.03 4.03 0 0 0-1.412-2.15Q7.399 2 6 2 4.35 2 3.175 3.175T2 6t1.175 2.825T6 10"
    />
  </svg>
);
export default KeyIcon;
