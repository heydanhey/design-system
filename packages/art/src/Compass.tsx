import * as React from "react"

export default function Compass(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6,3v1h-1v1h-1v2h-1v5h1v2h1v1h1v1h5v-1h1v-1h1v-2h1v-5h-1v-2h-1v-1h-1v-1h-5Z" fill="#ff640d" strokeWidth="0"/><path d="M7,4v1h-1v1h-1v2h-1v3h1v2h1v1h1v1h3v-1h1v-1h1v-2h1v-3h-1v-2h-1v-1h-1v-1h-3Z" fill="#fff"/>
      <path d="M6,0h5v2h-5v-2Z" fill="#ff640d"/>
      <path d="M8,2h1v1h-1v-1Z" fill="#fff"/>
      <path d="M8,9h1v1h-1v-1Z" fill="#ff640d"/>
      <path d="M9,8h1v1h-1v-1Z" fill="#ff640d"/>
      <path d="M7,8h1v1h-1v-1Z" fill="#ff640d"/>
      <path d="M6,7h1v1h-1v-1Z" fill="#ff640d"/>
      <path d="M10,7h1v1h-1v-1Z" fill="#ff640d"/>
      <path d="M8,14h1v1h-1v-1Z" fill="#fdb58d"/>
      <path d="M4,9h1v1h-1v-1Z" fill="#fdb58d"/>
      <path d="M8,4h1v1h-1v-1Z" fill="#fdb58d"/>
      <path d="M12,9h1v1h-1v-1Z" fill="#fdb58d"/>
    </svg>
  )
}
