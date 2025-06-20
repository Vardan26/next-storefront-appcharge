"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Oops! Failed to load products.</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </div>
  );
}
