import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const TwitterIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 11 10"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M.7 8.162c1.045.06 1.959-.185 2.85-.832-.9-.154-1.525-.565-1.864-1.416.263-.036.493.032.765-.077C1.564 5.448.99 4.865.967 3.857c.28.022.493.207.828.18C.98 3.241.732 2.373 1.243 1.32c.85.977 1.845 1.642 3.062 1.954.068.018.131.036.2.05.311.072.682.226.872.203.326-.04 0-.416.082-.905.257-1.52 1.93-2.211 3.17-1.32.362.262.647.258 1.004.1.186-.082.376-.164.597-.259-.05.435-.384.674-.65.995.302.068.546-.018.827-.108-.095.312-.33.488-.543.66-.222.177-.308.362-.317.652-.135 4.383-5.115 7.77-8.521 5.075-.33-.263-.01 0-.326-.254"
    />
  </svg>
);
export default TwitterIcon;
