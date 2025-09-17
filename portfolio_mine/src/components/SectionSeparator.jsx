import React from 'react';
import './SectionSeparator.css';

export function SquiggleSeparator({ className = '' }) {
  return (
    <div className={`section-separator squiggle ${className}`}>
      <svg viewBox="0 0 600 32" width="99vw" height="32" style={{ minWidth: '400px', maxWidth: '1800px', display: 'block' }}>
        <path d="M0 16 Q 45 2, 90 16 T 180 16 T 270 16 Q 315 32, 360 16 T 450 16 Q 495 0, 540 16 T 600 16" stroke="#222" strokeWidth="6" fill="none" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

export function ZigzagSeparator({ className = '' }) {
  return (
    <div className={`section-separator zigzag ${className}`}>
      <svg viewBox="0 0 600 32" width="99vw" height="32" style={{ minWidth: '400px', maxWidth: '1800px', display: 'block' }}>
        <polyline points="0,28 37,4 75,28 112,4 150,28 187,4 225,28 262,4 300,28 337,4 375,28 412,4 450,28 487,4 525,28 562,4 600,28" stroke="#222" strokeWidth="6" fill="none" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export function WavySeparator({ className = '' }) {
  return (
    <div className={`section-separator wavy ${className}`}>
      <svg viewBox="0 0 600 32" width="99vw" height="32" style={{ minWidth: '400px', maxWidth: '1800px', display: 'block' }}>
        <path d="M0 16 Q 30 0, 60 16 T 120 16 T 180 16 T 240 16 T 300 16 T 360 16 T 420 16 T 480 16 T 540 16 T 600 16" stroke="#222" strokeWidth="6" fill="none" strokeDasharray="24 16"/>
      </svg>
    </div>
  );
}
