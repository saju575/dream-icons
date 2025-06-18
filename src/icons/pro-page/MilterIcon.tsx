import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMilterIcon = ({
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
      strokeMiterlimit={10}
      d="M1.763 1a.92.92 0 0 0-.921.92V17.97c0 .508.412.92.92.92h2.79a.92.92 0 0 0 .921-.92V16.38c0-.26.11-.509.304-.683L15.66 6.78a.92.92 0 0 1 .617-.237h1.644a.92.92 0 0 0 .92-.921V1.921a.92.92 0 0 0-.92-.921z"
    />
  </svg>
);
export default SvgMilterIcon;
