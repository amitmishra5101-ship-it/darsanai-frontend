 import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "darsanai — The video editor you don't have to hire",
  description: 'Clone your voice. Build your avatar. Get videos in minutes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body style={{ margin: 0, padding: 0, background: '#0a0902', color: '#f0edd8' }}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
