import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import GermanFlag from '../components/GermanFlag';

export default function NotFound() {
  return (
    <div className="flex items-start justify-center p-4 pt-20">
      <div className="max-w-md w-full text-center">

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">

          <div className="flex justify-center mb-6">
            <GermanFlag />
          </div>

          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Seite nicht gefunden
          </h2>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="btn btn-neutral gap-2 text-base font-medium text-white hover:bg-gray-700 transition-colors"
          >
            <Home size={18} />
            Go Home
          </Link>

        </div>

      </div>
    </div>
  );
}