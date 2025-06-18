import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AppleStoreIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M12 .833C5.555.833.333 6.055.333 12.5S5.555 24.167 12 24.167 23.666 18.945 23.666 12.5 18.444.833 12 .833M7.574 17.486a.8.8 0 0 1-.7.399.8.8 0 0 1-.41-.113.807.807 0 0 1-.292-1.104l.796-1.324a.45.45 0 0 1 .393-.225h.118c.578 0 .981.348 1.1.685zm6.742-2.602-5.216.005H5.633a.805.805 0 0 1-.807-.84c.017-.438.398-.77.836-.77h2.512l2.979-5.07-.965-1.643c-.219-.376-.123-.87.247-1.105a.81.81 0 0 1 1.138.269l.516.88h.006l.516-.88a.81.81 0 0 1 1.139-.27c.37.236.465.73.246 1.106l-.964 1.643-.937 1.599-2.036 3.472v.005h3c.377 0 .848.202 1.038.527l.017.034c.168.286.264.482.264.769-.006.157-.062.269-.062.269m4.05.005h-1.414v.006l1.032 1.756a.824.824 0 0 1-.269 1.121.818.818 0 0 1-1.122-.28l-1.525-2.597-.948-1.615-1.223-2.092a2 2 0 0 1-.034-1.98c.242-.427.427-.539.427-.539l2.72 4.605h2.339c.438 0 .813.337.836.769a.816.816 0 0 1-.82.846"
    />
  </svg>
);
export default AppleStoreIcon;
