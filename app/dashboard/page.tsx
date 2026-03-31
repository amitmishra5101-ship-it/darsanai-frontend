'use client';

export default function Dashboard() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0902',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'sans-serif',
      color: '#f0edd8',
    }}>
      <div style={{ fontSize: 48 }}>🎙️</div>
      <div style={{ fontSize: 24, fontWeight: 900 }}>
        darsan<span style={{ color: '#c8f135' }}>ai</span> Studio
      </div>
      <div style={{ fontSize: 14, color: '#8a8468' }}>
        Voice clone coming next
      </div>
    </div>
  );
} 
