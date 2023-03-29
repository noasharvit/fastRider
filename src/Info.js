import React from 'react';
import './Ride.css';

export default function Info({ src, text }) {
  return (
    <div style={{ width: "200px", height: "200px", display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center' }}>
      <div className="info">
      <div style={{ backgroundColor: '#656565', padding: '1px' }}>
        <img src={src} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }} />
        </div>
      </div>
      <div className="info-text">
        {text}
      </div>
    </div>
  );
}
