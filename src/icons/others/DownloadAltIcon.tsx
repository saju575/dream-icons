import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DownloadAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 22"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1.5 13.334.273.773c1.062 3.008 1.593 4.513 2.804 5.37 1.21.855 2.807.857 5.996.857h2.853c3.19 0 4.785 0 5.996-.858 1.212-.856 1.743-2.361 2.805-5.369l.273-.773m-10.5 0V1.667m0 11.667c-.817 0-2.343-2.327-2.917-2.917M12 13.334c.817 0 2.343-2.327 2.917-2.917"
    />
  </svg>
);
export default DownloadAltIcon;
