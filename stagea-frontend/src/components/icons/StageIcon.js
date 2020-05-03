import React from "react";

function StageIconActive() {
  return (
    <svg width="22" height="34" viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.4485 33.858L11 28.189L1.55152 33.8581C1.24379 34.0428 0.860496 34.0475 0.548254 33.8708C0.236012 33.6939 0.0429688 33.3628 0.0429688 33.0039V0.996094C0.0429688 0.445984 0.488953 0 1.03906 0H20.9609C21.511 0 21.957 0.445984 21.957 0.996094V33.0039C21.957 33.3628 21.764 33.6939 21.4517 33.8707C21.14 34.0472 20.7567 34.043 20.4485 33.858Z" fill="url(#paint0_linear)"/>
      <path d="M14.0494 20.7245L11 19.1214L7.95051 20.7246C7.61496 20.901 7.20829 20.8716 6.90149 20.6488C6.59476 20.4259 6.4411 20.0482 6.50525 19.6745L7.0877 16.279L4.62064 13.8742C4.34917 13.6096 4.25142 13.2137 4.36863 12.8531C4.48577 12.4925 4.79748 12.2297 5.17274 12.1752L8.5821 11.6798L10.1068 8.59038C10.2746 8.25038 10.6209 8.03516 11 8.03516C11.3791 8.03516 11.7254 8.25045 11.8932 8.59038L13.4179 11.6798L16.8273 12.1752C17.2025 12.2297 17.5143 12.4925 17.6314 12.8531C17.7486 13.2137 17.6509 13.6096 17.3794 13.8742L14.9123 16.279L15.4948 19.6745C15.5589 20.0482 15.4053 20.4259 15.0985 20.6488C14.7933 20.8704 14.3867 20.902 14.0494 20.7245Z" fill="url(#paint1_linear)"/>
      <defs>
        <linearGradient id="paint0_linear" x1="11" y1="34" x2="11" y2="0" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2061FD"/>
          <stop offset="1" stop-color="#7E9FF4"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="11" y1="20.839" x2="11" y2="8.03509" gradientUnits="userSpaceOnUse">
          <stop stop-color="#CFEEFF"/>
          <stop offset="1" stop-color="#A2C8FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function StageIconDisabled() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path d="M26.4485 33.858L17 28.189L7.55152 33.8581C7.24379 34.0428 6.8605 34.0475 6.54825 33.8708C6.23601 33.6939 6.04297 33.3628 6.04297 33.0039V0.996094C6.04297 0.445984 6.48895 0 7.03906 0H26.9609C27.511 0 27.957 0.445984 27.957 0.996094V33.0039C27.957 33.3628 27.764 33.6939 27.4517 33.8707C27.14 34.0472 26.7567 34.043 26.4485 33.858Z" fill="url(#paint0_linear)"/>
        <path d="M20.0494 20.7245L17 19.1214L13.9505 20.7246C13.615 20.901 13.2083 20.8716 12.9015 20.6488C12.5948 20.4259 12.4411 20.0482 12.5052 19.6745L13.0877 16.279L10.6206 13.8742C10.3492 13.6096 10.2514 13.2137 10.3686 12.8531C10.4858 12.4925 10.7975 12.2297 11.1727 12.1752L14.5821 11.6798L16.1068 8.59038C16.2746 8.25038 16.6209 8.03516 17 8.03516C17.3791 8.03516 17.7254 8.25045 17.8932 8.59038L19.4179 11.6798L22.8273 12.1752C23.2025 12.2297 23.5143 12.4925 23.6314 12.8531C23.7486 13.2137 23.6509 13.6096 23.3794 13.8742L20.9123 16.279L21.4948 19.6745C21.5589 20.0482 21.4053 20.4259 21.0985 20.6488C20.7933 20.8704 20.3867 20.902 20.0494 20.7245Z" fill="url(#paint1_linear)"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear" x1="17" y1="34" x2="17" y2="0" gradientUnits="userSpaceOnUse">
          <stop stop-color="#505050"/>
          <stop offset="1" stop-color="#DDDDDD"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="17" y1="20.839" x2="17" y2="8.03509" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FCFCFC"/>
          <stop offset="1" stop-color="#D8D8D8"/>
        </linearGradient>
        <clipPath id="clip0">
          <rect width="34" height="34" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export default function StageIcon({active}) {
  return active ? <StageIconActive/> : <StageIconDisabled/>;
}
