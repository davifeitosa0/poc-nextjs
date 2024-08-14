'use client';

import { handleSubmit } from '@/utils/handlerPostForm';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';

export default function PostForm({ userId }: { userId: number }) {
  const sendForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get('texto') === '') {
      toast.error('O campo de texto não pode ser vazio')

      return;
    }

    handleSubmit(data, userId)
      .then(() => {
        form.reset();
      })
      .catch((error) => {
        toast.error("Não foi possível completar sua solicitação. Tente novamente mais tarde.")
      });
  };

  return (
    <>
      <form onSubmit={sendForm} className="flex justify-between">
        <input
          type="text"
          name="texto"
          className="bg-transparent text-white border-none w-full h-auto focus:outline-none focus:border-transparent py-2"
          placeholder="Escrever seu blog..."
        />
        <button type="submit" className="text-blue-500">
          Post
        </button>
      </form>
    </>
  );
}
