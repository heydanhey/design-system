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
      <path d="M6 0H11V2H6V0Z" fill="#FF640D"/>
      <path d="M6 3H11V4H6V3Z" fill="#FF640D"/>
      <path d="M6 15H11V16H6V15Z" fill="#FF640D"/>
      <path d="M5 4H6V5H5V4Z" fill="#FF640D"/>
      <path d="M10 4H12V5H10V4Z" fill="#FF640D"/>
      <path d="M4 8H13V11H4V8Z" fill="white"/>
      <path d="M5 6H12V8H5V6Z" fill="white"/>
      <path d="M5 11H12V13H5V11Z" fill="white"/>
      <path d="M6 5H11V6H6V5Z" fill="white"/>
      <path d="M6 13H11V14H6V13Z" fill="white"/>
      <path d="M7 4H10V5H7V4Z" fill="white"/>
      <path d="M8 2H9V3H8V2Z" fill="white"/>
      <path d="M7 14H10V15H7V14Z" fill="white"/>
      <path d="M12 6H13V8H12V6Z" fill="#FF640D"/>
      <path d="M11 5H13V6H11V5Z" fill="#FF640D"/>
      <path d="M4 6H5V7H4V6Z" fill="#FF640D"/>
      <path d="M4 5H6V6H4V5Z" fill="#FF640D"/>
      <path d="M6 4H7V5H6V4Z" fill="#FF640D"/>
      <path d="M6 14H7V15H6V14Z" fill="#FF640D"/>
      <path d="M4 11H5V14H4V11Z" fill="#FF640D"/>
      <path d="M10 14H11V15H10V14Z" fill="#FF640D"/>
      <path d="M11 13H12V15H11V13Z" fill="#FF640D"/>
      <path d="M12 11H13V14H12V11Z" fill="#FF640D"/>
      <path d="M5 13H6V15H5V13Z" fill="#FF640D"/>
      <path d="M3 7H4V12H3V7Z" fill="#FF640D"/>
      <path d="M13 7H14V12H13V7Z" fill="#FF640D"/>
      <path d="M3 7H5V8H3V7Z" fill="#FF640D"/>
      <path d="M8 9H9V10H8V9Z" fill="#FF640D"/>
      <path d="M9 8H10V9H9V8Z" fill="#FF640D"/>
      <path d="M7 8H8V9H7V8Z" fill="#FF640D"/>
      <path d="M6 7H7V8H6V7Z" fill="#FF640D"/>
      <path d="M10 7H11V8H10V7Z" fill="#FF640D"/>
      <path d="M8 14H9V15H8V14Z" fill="#FDB58D"/>
      <path d="M4 9H5V10H4V9Z" fill="#FDB58D"/>
      <path d="M8 4H9V5H8V4Z" fill="#FDB58D"/>
      <path d="M12 9H13V10H12V9Z" fill="#FDB58D"/>
      <path d="M3 7H4V8H3V7Z" fill="#FF640D"/>
    </svg>
  )
}
