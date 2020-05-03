import React from "react";

function SocialIconEnabled() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.03125 8.03516C5.18693 8.03516 2.05859 11.1635 2.05859 15.0078C2.05859 18.8521 5.18693 21.9805 9.03125 21.9805C12.8756 21.9805 16.0039 18.8521 16.0039 15.0078C16.0039 11.1635 12.8756 8.03516 9.03125 8.03516ZM24.9688 0C21.1244 0 17.9961 3.12833 17.9961 6.97266C17.9961 10.817 21.1244 13.9453 24.9688 13.9453C28.8131 13.9453 31.9414 10.817 31.9414 6.97266C31.9414 3.12833 28.8131 0 24.9688 0Z" fill="url(#paint0_linear)"/>
      <path d="M9.03125 21.9805C4.08777 21.9805 0 26.0018 0 30.9453V33.0039C0 33.5545 0.511926 34 1.0625 34H17C17.5506 34 17.9961 33.5545 17.9961 33.0039V30.9453C17.9961 26.0018 13.9747 21.9805 9.03125 21.9805ZM24.9688 13.9453C20.0253 13.9453 16.0039 17.9667 16.0039 22.9102V24.9688C16.0039 25.5193 16.4494 25.9648 17 25.9648H32.9375C33.4881 25.9648 34 25.5193 34 24.9688V22.9102C34 17.9667 29.9122 13.9453 24.9688 13.9453Z" fill="url(#paint1_linear)"/>
      <defs>
        <linearGradient id="paint0_linear" x1="17" y1="21.9805" x2="17" y2="0" gradientUnits="userSpaceOnUse">
          <stop stop-color="#98AAFF"/>
          <stop offset="0.0001" stop-color="#999999"/>
          <stop offset="0.0002" stop-color="#899EFF"/>
          <stop offset="1" stop-color="#BBC7FF"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="17" y1="34" x2="17" y2="13.9453" gradientUnits="userSpaceOnUse">
          <stop stop-color="#506CF0"/>
          <stop offset="1" stop-color="#7F92EC"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function SocialIconDisabled() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.03125 8.03516C5.18693 8.03516 2.05859 11.1635 2.05859 15.0078C2.05859 18.8521 5.18693 21.9805 9.03125 21.9805C12.8756 21.9805 16.0039 18.8521 16.0039 15.0078C16.0039 11.1635 12.8756 8.03516 9.03125 8.03516ZM24.9688 0C21.1244 0 17.9961 3.12833 17.9961 6.97266C17.9961 10.817 21.1244 13.9453 24.9688 13.9453C28.8131 13.9453 31.9414 10.817 31.9414 6.97266C31.9414 3.12833 28.8131 0 24.9688 0Z" fill="url(#paint0_linear)"/>
      <path d="M9.03125 21.9805C4.08777 21.9805 0 26.0018 0 30.9453V33.0039C0 33.5545 0.511926 34 1.0625 34H17C17.5506 34 17.9961 33.5545 17.9961 33.0039V30.9453C17.9961 26.0018 13.9747 21.9805 9.03125 21.9805ZM24.9688 13.9453C20.0253 13.9453 16.0039 17.9667 16.0039 22.9102V24.9688C16.0039 25.5193 16.4494 25.9648 17 25.9648H32.9375C33.4881 25.9648 34 25.5193 34 24.9688V22.9102C34 17.9667 29.9122 13.9453 24.9688 13.9453Z" fill="url(#paint1_linear)"/>
      <defs>
        <linearGradient id="paint0_linear" x1="17" y1="21.9805" x2="17" y2="0" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C7C7C7"/>
          <stop offset="0.0001" stop-color="#999999"/>
          <stop offset="0.0002" stop-color="#EDEDED"/>
          <stop offset="1" stop-color="#D6D6D6"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="17" y1="34" x2="17" y2="13.9453" gradientUnits="userSpaceOnUse">
          <stop stop-color="#717171"/>
          <stop offset="1" stop-color="#E6E6E6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function SocialIcon({active}) {
  return active ? <SocialIconEnabled/> : <SocialIconDisabled/>;
}