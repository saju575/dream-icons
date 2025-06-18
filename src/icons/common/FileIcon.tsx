import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const FileIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5 15.75h6a.73.73 0 0 0 .534-.216.73.73 0 0 0 .216-.534.73.73 0 0 0-.216-.534.73.73 0 0 0-.534-.216H5a.73.73 0 0 0-.535.216.73.73 0 0 0-.215.534q0 .32.215.534A.73.73 0 0 0 5 15.75m0-4h6a.73.73 0 0 0 .534-.216.73.73 0 0 0 .216-.534.73.73 0 0 0-.216-.534.73.73 0 0 0-.534-.216H5a.73.73 0 0 0-.535.216.73.73 0 0 0-.215.534q0 .32.215.534A.73.73 0 0 0 5 11.75M2.308 19.5q-.758 0-1.283-.525A1.75 1.75 0 0 1 .5 17.692V2.308q0-.758.525-1.283T2.308.5h7.194q.362 0 .695.14.334.141.58.387l4.196 4.196q.246.246.386.58t.141.695v11.194q0 .758-.525 1.283t-1.283.525zM9.5 5.596V2H2.308a.3.3 0 0 0-.212.096.3.3 0 0 0-.096.212v15.384q0 .116.096.212a.3.3 0 0 0 .212.096h11.384a.3.3 0 0 0 .212-.096.3.3 0 0 0 .096-.212V6.5h-3.596a.88.88 0 0 1-.645-.259.88.88 0 0 1-.259-.645"
    />
  </svg>
);
export default FileIcon;
