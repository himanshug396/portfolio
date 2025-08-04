'use client';

import { Suspense } from 'react';
import Chat from '@/components/chat/chat';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading the conversation...</div>}>
      <Chat />
    </Suspense>
  );
}