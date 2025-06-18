import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const RunnerIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 21"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M14.667 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13 18-.553-2.18a4.1 4.1 0 0 0-1.096-1.905l-1.268-1.248m0 0c-.84-.662-1.26-.993-1.422-1.435a1.7 1.7 0 0 1-.102-.616c.011-.47.302-.92.883-1.816L10.5 7.168m-.417 5.498L13 8.232M5.5 9.794c.833-1.641 2.115-2.592 5-2.626m0 0c.182-.002.454-.003.725-.003.42 0 .63 0 .799.078.167.079.339.284.683.695.098.118.2.223.293.293m0 0c.962.722 2.469 1.012 4.167-.898M3.833 15.275l.566.134c1.44.343 2.937-.312 3.601-1.576"
    />
  </svg>
);
export default RunnerIcon;
