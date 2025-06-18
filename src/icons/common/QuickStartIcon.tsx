import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const QuickStartIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 15"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M23.645 7.63a6.83 6.83 0 1 1-13.661 0 6.83 6.83 0 0 1 13.661 0m-7.863-2.482a.427.427 0 0 0-.675.348v4.269a.428.428 0 0 0 .675.348l2.988-2.135a.427.427 0 0 0 0-.695z"
    />
    <rect
      width={9.938}
      height={1.366}
      x={2.882}
      y={4.553}
      fill="currentColor"
      rx={0.683}
    />
    <rect
      width={9.221}
      height={1.366}
      x={3.599}
      y={3.188}
      fill="none"
      rx={0.683}
    />
    <rect
      width={8.128}
      height={1.366}
      x={5.614}
      y={1.818}
      fill="currentColor"
      rx={0.683}
    />
    <rect
      width={8.128}
      height={1.366}
      x={5.614}
      y={10.012}
      fill="currentColor"
      rx={0.683}
    />
    <rect
      width={8.128}
      height={1.366}
      x={5.614}
      y={8.647}
      fill="none"
      rx={0.683}
    />
    <rect
      width={11.305}
      height={1.366}
      x={1.516}
      y={7.283}
      fill="currentColor"
      rx={0.683}
    />
    <rect
      width={13.388}
      height={1.366}
      x={0.354}
      y={5.918}
      fill="none"
      rx={0.683}
    />
  </svg>
);
export default QuickStartIcon;
