// app/error.js
'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error?.message}</p>
      <pre>{JSON.stringify(error, null, 2)}</pre>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
