'use server';

import { revalidateTag } from 'next/cache';

export async function handleSubmit(formData: FormData, userId: number) {
  const texto = formData.get('texto') as string;
  
  const response = await fetch('http://localhost:3000/api/post', {
    method: 'POST',
    body: JSON.stringify({ texto, fk_usuario: userId }),
  });

  await response.json();

  revalidateTag('getposts');
}
