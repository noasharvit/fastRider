import React from 'react';

export default function Info({ src, text }) {
  return (
    <div style={{ width: "200px", height: "200px", display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center' }}>
      <div style={{
          width: '30px',
          height: '30px',
          overflow: 'hidden',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '10px',
        }}>
        <img src={src} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }} />
      </div>
      <div style={{
        color: '#656565',
        fontSize: '14px',
        fontFamily: 'Open Sans, sans-serif',
      }}>
        {text}
      </div>
    </div>
  );
}
