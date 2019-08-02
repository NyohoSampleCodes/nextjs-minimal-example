import React from 'react'

const isSMILAvailable = () => {
  if (typeof window === 'undefined') {
    return true;
  } else {
    return window.navigator.userAgent.match(/(MSIE|Trident|Edge)\//) === null;
  }
}

export default () =>
  <div>
    Hello, Next.js world!
    <svg id="some-graphics" data-name="some-graphics" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <text x={isSMILAvailable() ? "0" : "100"} y="20" fontFamily="sans-serif" fontSize="16" fill="#f4267c">
        SVG Text
        {isSMILAvailable() ? "Ok" : "No"}
      </text>
    </svg>
  </div>
