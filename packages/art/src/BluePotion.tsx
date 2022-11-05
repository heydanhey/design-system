import * as React from "react"

export default function BluePotion(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6,2h4v4h1v1h1v7h-1v1h-6v-1h-1v-7h1v-1h1v-4Z" fill="#fff"/>
      <path d="M6,13h4v-1h1v-3.5h-6v3.5h1v1Z" fill="#0347d1"/>
      <path d="M5,7h2v-3h2v3h2v1.5h-6L5,7Z"/>
      <rect width="2" height="1" rx="0" ry="0" transform="translate(7 3)" fill="#0347d1"/>
      <rect width="2" height="1" rx="0" ry="0" transform="translate(7 1)" fill="#0347d1"/>
      <rect width="4" height="1" rx="0" ry="0" transform="translate(6 0)" fill="#6f9bf6"/>
      <rect width="1" height="1" rx="0" ry="0" transform="translate(10 9)" fill="#6f9bf6"/>
      <rect width="1" height="1" rx="0" ry="0" transform="translate(8 10.75)" fill="#6f9bf6"/>
      <rect width="1" height="1" rx="0" ry="0" transform="translate(6 9.75)" fill="#6f9bf6"/>
    </svg>
  )
}
