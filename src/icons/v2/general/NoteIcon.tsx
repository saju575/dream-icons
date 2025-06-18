import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNoteIcon = ({
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
      strokeWidth={1.5}
      d="M8.574 18.301h-.748c-2.707 0-4.061 0-4.902-.854s-.841-2.23-.841-4.98V8.302c0-2.75 0-4.125.841-4.979s2.195-.854 4.902-.854h2.46c2.708 0 4.29.046 5.13.9.841.854.834 2.183.834 4.933v.989M13.287 1.667v1.666M9.121 1.667v1.666M4.954 1.667v1.666"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.833 12.5h3.333M5.833 8.333H12.5"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M17.3 12.399c-.755-.846-1.207-.795-1.71-.644-.352.05-1.56 1.459-2.063 1.908-.825.816-1.655 1.656-1.71 1.765-.156.254-.302.705-.372 1.208-.13.755-.32 1.604-.08 1.677.239.073.905-.067 1.66-.178.502-.09.854-.19 1.106-.342.352-.211 1.006-.956 2.133-2.063.706-.744 1.388-1.258 1.59-1.761.2-.755-.101-1.158-.554-1.57Z"
      opacity={0.93}
    />
  </svg>
);
export default SvgNoteIcon;
