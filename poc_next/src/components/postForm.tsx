'use client';
import { useState } from 'react';

export default function PostForm({ userId }: { userId: number }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = async (texto: string): Promise<void> => {
    if (texto.trim() === '') return;

    const response = await fetch('http://localhost:3000/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ texto, fk_usuario: userId }),
    });
    const result = await response.json();

    if (response.ok) {
      setTexto('');
    } else {
      alert(`Error: ${result.message}`);
    }
    console.log(result);

    
  };

  return (
    <div className="flex justify-between">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="bg-transparent text-white border-none w-full h-auto focus:outline-none focus:border-transparent py-2"
        placeholder="Escrever seu blog..."
      />
      <button onClick={() => handleSubmit(texto)} className="text-blue-500">
        Post
      </button>
    </div>
  );
}
