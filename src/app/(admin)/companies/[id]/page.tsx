'use client'
import React, { useEffect } from 'react';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const { id } = React.use(params)

  useEffect(() => {
    const parsedId = Number.parseInt(id)
    if (Number.isNaN(parsedId)) {
        notFound()
    }
}, [id])
  return (
    <>
      <Header>Company ({id})</Header>
    </>
  );
}