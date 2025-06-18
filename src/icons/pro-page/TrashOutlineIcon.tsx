import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrashOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 3.667-.413 6.683c-.106 1.707-.158 2.562-.587 3.175-.212.304-.484.56-.8.752-.638.39-1.493.39-3.204.39-1.713 0-2.57 0-3.21-.39a2.7 2.7 0 0 1-.8-.753c-.427-.615-.48-1.47-.582-3.18L2 3.667m-1 0h12m-3.296 0-.455-.939c-.302-.624-.454-.935-.714-1.13a1.3 1.3 0 0 0-.184-.115c-.288-.15-.635-.15-1.328-.15-.71 0-1.066 0-1.36.157a1.3 1.3 0 0 0-.185.12c-.263.202-.41.525-.705 1.17l-.404.887"
    />
  </svg>
);
export default SvgTrashOutlineIcon;
