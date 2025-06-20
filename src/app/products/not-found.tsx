import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-6">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        Sorry, the product you are looking for does not exist.
      </p>
      <Link href="/" className="mt-6 text-blue-600 hover:underline">
        Go back to products page
      </Link>
    </div>
  );
}
