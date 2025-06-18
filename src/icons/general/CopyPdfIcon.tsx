import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CopyPdfIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M8.516 8.5h1q.424 0 .712-.287a.97.97 0 0 0 .288-.713v-1a.97.97 0 0 0-.288-.713.97.97 0 0 0-.712-.287h-1.5a.48.48 0 0 0-.35.15.48.48 0 0 0-.15.35v4q0 .2.15.35a.48.48 0 0 0 .7 0q.15-.15.15-.35zm0-1v-1h1v1zm5 3q.424 0 .712-.287a.97.97 0 0 0 .288-.713v-3a.97.97 0 0 0-.288-.713.97.97 0 0 0-.712-.287h-1.5a.48.48 0 0 0-.35.15.48.48 0 0 0-.15.35v4q0 .2.15.35t.35.15zm-1-1v-3h1v3zm4-1h.5a.48.48 0 0 0 .35-.15.48.48 0 0 0 0-.7.48.48 0 0 0-.35-.15h-.5v-1h.5a.48.48 0 0 0 .35-.15.48.48 0 0 0 0-.7.48.48 0 0 0-.35-.15h-1a.48.48 0 0 0-.35.15.48.48 0 0 0-.15.35v4q0 .2.15.35a.48.48 0 0 0 .7 0q.15-.15.15-.35zm-10 7.5q-.825 0-1.413-.588A1.93 1.93 0 0 1 4.516 14V2q0-.824.587-1.412A1.93 1.93 0 0 1 6.516 0h12q.825 0 1.412.588.588.587.588 1.412v12q0 .825-.588 1.412a1.93 1.93 0 0 1-1.412.588zm0-2h12V2h-12zm-4 6q-.825 0-1.413-.587A1.93 1.93 0 0 1 .516 18V5q0-.424.287-.713A.97.97 0 0 1 1.516 4q.424 0 .712.287.288.288.288.713v13h13q.424 0 .712.288.288.287.288.712 0 .424-.288.712a.97.97 0 0 1-.712.288z"
    />
  </svg>
);
export default CopyPdfIcon;
