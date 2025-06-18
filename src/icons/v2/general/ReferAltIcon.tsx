import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReferIcon = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M11.933 6.002v-2.08c0-.313.189-.538.472-.582a.52.52 0 0 1 .473.16l2.335 2.291c.676.67 1.36 1.331 2.036 2 .335.328.335.64 0 .968-1.447 1.425-2.895 2.843-4.342 4.276-.32.313-.764.21-.916-.102a.8.8 0 0 1-.066-.313v-2.043c-.24.029-.465.05-.69.087-1.79.298-3.288 1.178-4.633 2.356-.117.102-.233.197-.4.204-.386.014-.648-.29-.59-.713.117-.829.284-1.65.582-2.436C6.69 8.773 7.46 7.682 8.667 6.94c.742-.458 1.55-.72 2.4-.843.277-.044.553-.066.851-.102z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M8.078 4.693H5.845A3.346 3.346 0 0 0 2.5 8.04v5.949a3.346 3.346 0 0 0 3.345 3.345h5.95a3.35 3.35 0 0 0 3.192-2.342"
    />
  </svg>
);
export default SvgReferIcon;
