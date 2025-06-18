import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AlignSpaceAroundIcon = ({
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
      d="M5.007 12.584a.57.57 0 0 1-.42-.17.57.57 0 0 1-.17-.42v.013a.57.57 0 0 1 .17-.42.57.57 0 0 1 .42-.17h5.987a.57.57 0 0 1 .42.17.57.57 0 0 1 .17.42v-.013a.57.57 0 0 1-.17.42.57.57 0 0 1-.42.17zm0-8a.57.57 0 0 1-.42-.17.57.57 0 0 1-.17-.42v.013a.57.57 0 0 1 .17-.42.57.57 0 0 1 .42-.17h5.987a.57.57 0 0 1 .42.17.57.57 0 0 1 .17.42v-.013a.57.57 0 0 1-.17.42.57.57 0 0 1-.42.17zm-3.84 10.583a.324.324 0 0 1-.333-.33.33.33 0 0 1 .096-.238.32.32 0 0 1 .237-.099h13.667a.324.324 0 0 1 .333.33.33.33 0 0 1-.095.238.32.32 0 0 1-.238.099zm0-13.667a.324.324 0 0 1-.333-.33A.33.33 0 0 1 .93.933a.32.32 0 0 1 .237-.099h13.667a.324.324 0 0 1 .333.33.33.33 0 0 1-.095.239.32.32 0 0 1-.238.098z"
    />
  </svg>
);
export default AlignSpaceAroundIcon;
