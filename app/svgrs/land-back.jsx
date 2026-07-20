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
    viewBox="0 0 1920 430"
    {...props}
  >
    <path
      d="M0 692.488S143.689 650 217.588 650c97.838 0 248.359 15.928 369.437 42.488 126.92 27.842 263.041 92.477 392.084 124.561 125.566 31.219 264.22 57.798 382.175 67.942 108.146 9.301 232.438-.707 325.557-7.077 78.227-5.351 233.159-31.14 233.159-31.14V1080H0V692.488Z"
      style={{
        fill: "url(#_landback)",
      }}
      transform="translate(0 -650)"
    />
    <defs>
      <linearGradient
        id="_landback"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(-82.09687 430 -430 -82.09687 272.792 650)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#ddd",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#474747",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgComponent
