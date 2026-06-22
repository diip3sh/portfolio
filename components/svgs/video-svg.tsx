export const VideoSVG = ({ size = 24, color = "#000000" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4418_4379)">
        <path
          opacity="0.4"
          d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
          fill="currentColor"
        />
        <path
          d="M9.1001 12.0005V10.5205C9.1001 8.61048 10.4501 7.84048 12.1001 8.79048L13.3801 9.53048L14.6601 10.2705C16.3101 11.2205 16.3101 12.7805 14.6601 13.7305L13.3801 14.4705L12.1001 15.2105C10.4501 16.1605 9.1001 15.3805 9.1001 13.4805V12.0005Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_4418_4379">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
