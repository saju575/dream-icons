import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const WarningIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M1.725 18a.973.973 0 0 1-.85-.5 1.1 1.1 0 0 1-.137-.488.9.9 0 0 1 .137-.512l9.25-16q.15-.25.387-.375T11 0t.488.125a1 1 0 0 1 .387.375l9.25 16q.15.25.137.512a1.1 1.1 0 0 1-.137.488.97.97 0 0 1-.85.5zm1.725-2h15.1L11 3zM11 15q.424 0 .713-.287A.97.97 0 0 0 12 14a.97.97 0 0 0-.287-.713A.97.97 0 0 0 11 13a.97.97 0 0 0-.713.287A.97.97 0 0 0 10 14q0 .424.287.713.288.287.713.287m0-3q.424 0 .713-.287A.97.97 0 0 0 12 11V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 11 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 10 8v3q0 .424.287.713.288.287.713.287"
    />
  </svg>
);
export default WarningIcon;
