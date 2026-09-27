import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import GermanFlag from '../components/GermanFlag';

export default function LoginCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const status = searchParams.get('status');
  const error = searchParams.get('error');

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        navigate('/', { replace: true });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [status, navigate]);


  const errorMessages: Record<string, string> = {
    google_error: "Google authentication was cancelled or failed.",
    auth_failed: "Failed to authenticate with Google. Please try again.",
    no_userinfo: "We couldn't retrieve your account information.",
  };

  if (error) {
    return (
      <div className="flex items-start justify-center p-4 pt-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">

            <div className="flex justify-center mb-6">
              <GermanFlag />
            </div>

            <div className="flex justify-center mb-4">
              <div className="bg-red-50 p-3 rounded-full">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Anmeldung fehlgeschlagen
            </h2>
            <p className="text-gray-600 mb-6">
              {errorMessages[error] || "An unknown error occurred. Please try again."}
            </p>

            <button
              onClick={() => navigate('/login', { replace: true })}
              className="btn btn-neutral w-full gap-2 text-base font-medium text-white hover:bg-gray-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start justify-center p-4 pt-8">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">

          <div className="flex justify-center mb-6">
            <GermanFlag />
          </div>

          <div className="flex justify-center mb-4">
            <div className="bg-gray-100 p-3 rounded-full animate-pulse">
              <CheckCircle2 className="w-8 h-8 text-gray-600" />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Wird verarbeitet...
          </h2>
          <p className="text-gray-500">
            Setting up your session.
          </p>
        </div>
      </div>
    </div>
  );
}
