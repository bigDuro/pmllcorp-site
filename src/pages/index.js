'use client';

import { useRouter } from 'next/navigation';
import Container from '@mui/material/Container';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <Container>
        Home
      </Container>
    </main>
  )
}
