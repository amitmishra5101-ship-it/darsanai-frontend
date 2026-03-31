 'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0902',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 24,
      fontFamily: 'sans-serif',
    }}>
      <div style={{ fontSize: 48 }}>⚡</div>
      <div style={{ fontSize: 28, fontWeight: 900, color: '#f0edd8' }}>
        darsan<span style={{ color: '#c8f135' }}>ai</span>
      </div>
      <div style={{ fontSize: 16, color: '#8a8468' }}>
        The video editor you don't have to hire.
      </div>
      <button
        onClick={() => router.push('/dashboard')}
        style={{
          background: '#c8f135', color: '#000', border: 'none',
          padding: '14px 32px', borderRadius: 10, fontSize: 15,
          fontWeight: 700, cursor: 'pointer',
        }}
      >
        Open Studio →
      </button>
    </div>
  );
}
