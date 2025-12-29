import Image from 'next/image';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#fff'
    }}>
      <Image
        src="/logos/logo1.jpeg"
        alt="Logo"
        width={300}
        height={300}
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  );
}

