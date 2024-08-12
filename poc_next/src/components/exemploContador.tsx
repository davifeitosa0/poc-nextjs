'use client'

import { useState } from "react";

export default function ExemploContador() {
    const [count, setCount] = useState(0);
    return (
    <>
    <h1>{count}</h1>
      <button
        className="border-2 p-1 border-pink-600  "
        onClick={() => setCount(count + 1)}
        >
        SEND
      </button>
          </>
  );
}