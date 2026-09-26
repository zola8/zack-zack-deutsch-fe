import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex items-start justify-center p-4 pt-20">
      <div className="max-w-md w-full text-center">

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">

          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Seite nicht gefunden
          </h2>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="btn btn-primary gap-2"
          >
            <Home size={18} />
            Go Home
          </Link>

        </div>

      </div>
    </div>
  );
}