import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DoubleSettingIcon = ({
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
      fill="currentColor"
      d="m3.85 10-.3-1.5q-.3-.124-.562-.262A4.4 4.4 0 0 1 2.45 7.9L1 8.35l-1-1.7 1.15-1a4.3 4.3 0 0 1 0-1.3L0 3.35l1-1.7 1.45.45q.274-.2.537-.338.264-.137.563-.262l.3-1.5h2l.3 1.5q.3.124.563.262t.537.338l1.45-.45 1 1.7-1.15 1a4.3 4.3 0 0 1 0 1.3l1.15 1-1 1.7-1.45-.45a4.4 4.4 0 0 1-.537.338q-.263.137-.563.262l-.3 1.5zm1-3q.824 0 1.413-.588Q6.85 5.826 6.85 5q0-.824-.587-1.412A1.93 1.93 0 0 0 4.85 3q-.825 0-1.412.587A1.93 1.93 0 0 0 2.85 5q0 .824.587 1.412Q4.026 7 4.85 7m7.95 14-.45-2.1q-.425-.15-.787-.362a6 6 0 0 1-.713-.488l-2 .65-1.4-2.4 1.6-1.4a8 8 0 0 1 0-1.8l-1.6-1.4 1.4-2.4 2 .65q.349-.275.713-.487.362-.213.787-.363L12.8 7h2.8l.45 2.1q.425.15.787.363.363.212.713.487l2-.65 1.4 2.4-1.6 1.4a8 8 0 0 1 0 1.8l1.6 1.4-1.4 2.4-2-.65q-.349.275-.713.488a4.5 4.5 0 0 1-.787.362L15.6 21zm1.4-4q1.25 0 2.125-.875A2.9 2.9 0 0 0 17.2 14q0-1.25-.875-2.125A2.9 2.9 0 0 0 14.2 11q-1.25 0-2.125.875A2.9 2.9 0 0 0 11.2 14q0 1.25.875 2.125A2.9 2.9 0 0 0 14.2 17"
    />
  </svg>
);
export default DoubleSettingIcon;
