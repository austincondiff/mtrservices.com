import React from 'react'

const SVG = ({ className = '', size = '24', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3" y2="6" />
    <line x1="3" y1="12" x2="3" y2="12" />
    <line x1="3" y1="18" x2="3" y2="18" />
  </svg>
)

export default SVG