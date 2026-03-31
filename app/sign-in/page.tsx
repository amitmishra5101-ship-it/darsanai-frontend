 import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0902',
    }}>
      <SignIn afterSignInUrl="/dashboard" signUpUrl="/sign-up" />
    </div>
  );
} 
