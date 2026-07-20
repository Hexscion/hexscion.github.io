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
    viewBox="0 0 1920 374"
    {...props}
  >
    <path
      d="M0 904.808s335.435 53.41 503.512 42.464c181.114-11.796 411.232-63.863 583.172-113.237 157.635-45.267 273.421-80.747 380.76-101.914 86.491-17.055 187.851-27.682 263.277-25.087 64.494 2.219 189.279 40.657 189.279 40.657V1080H0V904.808Z"
      style={{
        fill: "url(#_landfront)",
      }}
      transform="translate(0 -706.645)"
    />
    <defs>
      <linearGradient
        id="_landfront"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="rotate(81.861 525.855 1429.596) scale(377.15335)"
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
            stopColor: "#7d7d7d",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgComponent
