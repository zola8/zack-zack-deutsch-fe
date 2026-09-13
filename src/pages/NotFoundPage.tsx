import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-7xl font-bold text-gray-900">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-gray-700">
          Page not found
        </h1>
        <p className="mt-2 text-gray-500">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-gray-900 px-5 py-2.5 text-white hover:bg-gray-700"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
