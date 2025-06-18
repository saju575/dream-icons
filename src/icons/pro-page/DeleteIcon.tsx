import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DeleteIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M2.346 13.666q-.556 0-.951-.395a1.3 1.3 0 0 1-.396-.95V2H.583a.4.4 0 0 1-.297-.12.4.4 0 0 1-.12-.298q0-.177.12-.296.12-.12.297-.12h2.916q0-.257.192-.45a.62.62 0 0 1 .45-.19h3.717q.258 0 .45.19a.62.62 0 0 1 .191.45h2.917q.177 0 .297.12t.12.298-.12.296a.4.4 0 0 1-.297.12h-.417v10.32q0 .555-.395.951t-.95.395zM10.166 2H1.833v10.32a.5.5 0 0 0 .144.369.5.5 0 0 0 .369.144h7.307a.5.5 0 0 0 .369-.144.5.5 0 0 0 .144-.369zM4.59 11.166q.177 0 .296-.12.12-.12.12-.296V4.083a.4.4 0 0 0-.12-.297.4.4 0 0 0-.297-.12.4.4 0 0 0-.297.12.4.4 0 0 0-.12.297v6.667q0 .177.12.297t.298.12m2.82 0q.177 0 .297-.12t.12-.296V4.083a.4.4 0 0 0-.12-.297.4.4 0 0 0-.298-.12.4.4 0 0 0-.297.12.4.4 0 0 0-.12.297v6.667q0 .177.12.297t.298.12"
    />
  </svg>
);
export default DeleteIcon;
