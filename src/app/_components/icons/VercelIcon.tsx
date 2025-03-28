import { ComponentPropsWithRef } from "react";

export const VercelIcon = (props: ComponentPropsWithRef<"svg"> & { size?: number }) => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 256 250" version="1.1" preserveAspectRatio="xMidYMid" {...props}>
      <path style={{ fillRule: "nonzero", fill: "#000", fillOpacity: 1 }} d="M63.984 17.184 127.964 128H0Zm0 0" />
    </svg>
  )
    ;
}
  ;