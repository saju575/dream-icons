import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const EditSquareIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M1.667 17.5q-.688 0-1.177-.49A1.6 1.6 0 0 1 0 15.833V4.167q0-.688.49-1.177.489-.49 1.177-.49h7.437L7.438 4.167H1.667v11.666h11.666v-5.791L15 8.375v7.458q0 .688-.49 1.177-.489.49-1.177.49zM5 11.667V9.646a1.65 1.65 0 0 1 .48-1.167l7.166-7.166q.25-.25.562-.375t.625-.125a1.65 1.65 0 0 1 1.188.5L16.187 2.5q.23.25.355.552.125.301.125.615 0 .312-.115.614a1.6 1.6 0 0 1-.364.552L9.02 12q-.23.229-.531.365-.303.135-.636.135h-2.02a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593m1.667-.834h1.166L12.667 6l-.584-.583-.604-.584-4.812 4.813z"
    />
  </svg>
);
export default EditSquareIcon;
