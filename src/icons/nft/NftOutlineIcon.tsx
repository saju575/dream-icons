import type { SVGProps } from "react";
import React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const NftOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 13 22"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.2}
      d="M11.339 12.15h-.005a.83.83 0 0 0-.477.182l-4.36 3.412-4.362-3.416a.83.83 0 0 0-1.101.068.891.891 0 0 0-.108 1.124l4.878 7.206c.078.115.181.21.303.275a.83.83 0 0 0 1.089-.275l4.868-7.193a.89.89 0 0 0-.237-1.25.83.83 0 0 0-.442-.133h-.046Zm-.403 1.343L6.498 20.05l-4.439-6.556 4.377 3.426.062.048.061-.048z"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.2}
      d="m1.128 9.94 4.824 3.485c.158.114.35.175.548.175s.39-.061.548-.175l-.059-.081.059.08 4.824-3.485a.84.84 0 0 0 .337-.516.8.8 0 0 0-.114-.599L7.27 1.31a.9.9 0 0 0-.329-.3.94.94 0 0 0-.882 0 .9.9 0 0 0-.33.3L.907 8.824a.8.8 0 0 0-.115.6c.041.206.162.39.337.516Zm5.165-3.157L2.296 8.48 6.5 1.935l4.201 6.545-3.996-1.697a.52.52 0 0 0-.412 0ZM2.237 9.547 6.5 7.737l4.263 1.81-4.263 3.08z"
    />
  </svg>
);
export default NftOutlineIcon;
