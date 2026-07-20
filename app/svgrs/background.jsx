import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 1920 1080"
    {...props}
  >
    <path
      d="M0 0h1920v1080H0z"
      style={{
        fill: "url(#_background)",
      }}
    />
    <defs>
      <linearGradient
        id="_background"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="rotate(-90 1020 60) scale(1080)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "white",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.58}
          style={{
            stopColor: "#eed8ff",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#e6c6ff",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgComponent
