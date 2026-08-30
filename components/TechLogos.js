"use client";

import React from 'react';

export function ReactLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

export function NextjsLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="90" fill="#000000"/>
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#next_grad)"/>
      <rect x="115" y="54" width="12" height="72" fill="#FFFFFF"/>
      <defs>
        <linearGradient id="next_grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TailwindLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
    </svg>
  );
}

export function ThreejsLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 20h20L12 2zm0 4.2l6.2 11H5.8L12 6.2z" fill="#049EF4"/>
      <path d="M12 9l3.5 6.5h-7L12 9z" fill="#0F172A"/>
    </svg>
  );
}

export function TypescriptLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#3178C6"/>
      <path d="M11.5 13.8V19H9.3v-5.2H7.2V12h6.5v1.8h-2.2zm4.1 2.3c.6.4 1.3.7 2.1.7.7 0 1.1-.3 1.1-.7 0-.4-.4-.6-1.3-.9-1.5-.5-2.4-1.2-2.4-2.4 0-1.4 1.1-2.4 2.8-2.4 1 0 1.8.3 2.4.7l-.6 1.7c-.5-.3-1.1-.6-1.8-.6-.6 0-1 .3-1 .6 0 .4.4.6 1.4.9 1.6.5 2.3 1.3 2.3 2.4 0 1.4-1.1 2.5-3 2.5-1.1 0-2.1-.4-2.7-.9l.7-1.7z" fill="#FFFFFF"/>
    </svg>
  );
}

export function HtmlCssLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3z" fill="#E34F26"/>
      <path d="M12 3.8v16.3l5.8-1.6 1.3-14.7H12z" fill="#F06529"/>
      <path d="M12 8.2H7.5l.3 3.3H12v-3.3zm0 6.6l-.1.03-2.6-.7-.2-2h-3.3l.3 4.1 5.9 1.6V14.8z" fill="#EBEBEB"/>
      <path d="M12 8.2v3.3h4.2l-.4 4-3.8 1v3.4l5.9-1.6.8-10.1H12z" fill="#FFFFFF"/>
    </svg>
  );
}

export function NodejsLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2l10 5.8v11.6L12 22 2 19.4V7.8L12 2z" fill="#5FA04E"/>
      <path d="M12 4.1L4.2 8.6v8.6L12 20.3l7.8-3.1V8.6L12 4.1z" fill="#339933"/>
      <path d="M12 7l5 3v5l-5 3-5-3v-5l5-3z" fill="#FFFFFF"/>
    </svg>
  );
}

export function PythonLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M11.92 2c-3.1 0-4.9.4-4.9 2.4v1.8h5v.6H4.6C2.6 6.8 2 8.3 2 11.2c0 2.5 1.5 3.9 3.5 3.9h1.1v-1.6c0-2.3 2-4.2 4.3-4.2h4.9c.7 0 1.2-.6 1.2-1.2V4.4c0-2-1.8-2.4-5.08-2.4zm-1.8 1.4c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z" fill="#3776AB"/>
      <path d="M12.08 22c3.1 0 4.9-.4 4.9-2.4v-1.8h-5v-.6h7.42c2 0 2.6-1.5 2.6-4.4 0-2.5-1.5-3.9-3.5-3.9h-1.1v1.6c0 2.3-2 4.2-4.3 4.2H8.2c-.7 0-1.2.6-1.2 1.2v4.7c0 2 1.8 2.4 5.08 2.4zm1.8-1.4c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" fill="#FFD43B"/>
    </svg>
  );
}

export function FastApiLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#009688"/>
      <path d="M13.2 4L6 13.5h5.4L10.8 20l7.2-9.5h-5.4L13.2 4z" fill="#FFFFFF"/>
    </svg>
  );
}

export function ExpressLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#18181B"/>
      <text x="5" y="17" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13">ex</text>
    </svg>
  );
}

export function PostgresLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#336791"/>
      <path d="M8.5 7.5c1.8-.8 4.2-.8 6.5.2 2.1.9 3.5 2.8 3.5 5.1 0 3.3-2.5 5.7-5.5 5.7h-3c-.6 0-1-.4-1-1v-8c0-.9.4-1.6 1-2h-.5z" fill="#FFFFFF" fillOpacity="0.9"/>
      <path d="M10 9.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .6-.4 1.1-.9 1.4v2.6h-1.2V11c-.5-.3-.9-.8-.9-1.5z" fill="#336791"/>
    </svg>
  );
}

export function RestApiLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#0284C7"/>
      <path d="M6 12h12M14 8l4 4-4 4M10 16l-4-4 4-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function OpenAiLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#10A37F"/>
      <path d="M18.6 10.3a4.2 4.2 0 0 0-.4-3.3 4.3 4.3 0 0 0-4-2.1c-.4 0-.8.1-1.2.2a4.2 4.2 0 0 0-3.3-.4 4.3 4.3 0 0 0-2.8 3.1 4.2 4.2 0 0 0-2.3 2 4.3 4.3 0 0 0 .3 4.5 4.2 4.2 0 0 0 .4 3.3 4.3 4.3 0 0 0 4 2.1c.4 0 .8-.1 1.2-.2a4.2 4.2 0 0 0 3.3.4 4.3 4.3 0 0 0 2.8-3.1 4.2 4.2 0 0 0 2.3-2 4.3 4.3 0 0 0-.3-4.5zM12 13.4a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8z" fill="#FFFFFF"/>
    </svg>
  );
}

export function ClaudeLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#D97706"/>
      <path d="M12 4.5l1.6 5.4 5.4 1.6-5.4 1.6-1.6 5.4-1.6-5.4-5.4-1.6 5.4-1.6 1.6-5.4z" fill="#FFFFFF"/>
    </svg>
  );
}

export function LangChainLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#1C3C3C"/>
      <path d="M7 12a3 3 0 0 1 3-3h2v2h-2a1 1 0 0 0-1 1v0a1 1 0 0 0 1 1h2v2h-2a3 3 0 0 1-3-3zm5-1h2v2h-2v-2zm2-2h2a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-2v-2h2a1 1 0 0 0 1-1v0a1 1 0 0 0-1-1h-2V9z" fill="#22C55E"/>
    </svg>
  );
}

export function VectorDbLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#7C3AED"/>
      <path d="M12 5l6 3.5v7L12 19l-6-3.5v-7L12 5z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M12 5v14M6 8.5l12 7M18 8.5l-12 7" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function PromptPipelineLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#9333EA"/>
      <path d="M6 7l4 4-4 4M12 17h6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function AutomationLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#8B5CF6"/>
      <circle cx="8" cy="8" r="2.5" fill="#FFFFFF"/>
      <circle cx="16" cy="8" r="2.5" fill="#FFFFFF"/>
      <circle cx="12" cy="16" r="2.5" fill="#FFFFFF"/>
      <path d="M8 8l8 0M8 8l4 8M16 8l-4 8" stroke="#FFFFFF" strokeWidth="1.5"/>
    </svg>
  );
}

export function VercelLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#000000"/>
      <path d="M12 6l6 11H6l6-11z" fill="#FFFFFF"/>
    </svg>
  );
}

export function AwsLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#232F3E"/>
      <path d="M6.5 14.5c3.2 2.2 7.8 2.2 11 0" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M16.5 13.5l1.5 1.5-1.5 1.5" stroke="#FF9900" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="6" y="11.5" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="7.5">aws</text>
    </svg>
  );
}

export function GithubLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#181717"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7.58 4 4 7.58 4 12c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 20 12c0-4.42-3.58-8-8-8z" fill="#FFFFFF"/>
    </svg>
  );
}

export function DockerLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#2496ED"/>
      <path d="M5 13h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm-6-3h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm-3-3h2v2h-2z" fill="#FFFFFF"/>
      <path d="M19 12c-.5-1.5-1.8-1.8-1.8-1.8-.4-.3-1.1-.3-1.1-.3s-.3.4-.2.8c-1.3-.2-3.3 1.2-3.3 3.3H4.5c-.3 0-.5.2-.5.5 0 3.3 2.7 4.5 5.5 4.5 3.8 0 6.5-1.5 7.5-4.5 1-.3 2-1 2-2.5z" fill="#FFFFFF"/>
    </svg>
  );
}

export function SentryLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#362D59"/>
      <path d="M16.5 16.5L12 8.5l-4.5 8" stroke="#FF4560" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="14" r="1.5" fill="#FF4560"/>
    </svg>
  );
}

export function CicdLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#0057D8"/>
      <path d="M7 12c0-2.2 1.8-4 4-4h2c2.2 0 4 1.8 4 4s-1.8 4-4 4h-2c-2.2 0-4-1.8-4-4z" stroke="#FFFFFF" strokeWidth="1.8" fill="none"/>
      <circle cx="9" cy="12" r="1.5" fill="#38BDF8"/>
      <circle cx="15" cy="12" r="1.5" fill="#38BDF8"/>
    </svg>
  );
}
