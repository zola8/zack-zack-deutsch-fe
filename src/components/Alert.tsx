type AlertProps = {
  type: 'info' | 'error';
  label?: string;
  message: string;
  onDismiss?: () => void;
};

const styles = {
  info: {
    container: 'bg-blue-50 border-blue-200',
    icon: 'text-blue-600',
    text: 'text-blue-800',
    dismiss: 'text-blue-600 hover:text-blue-800',
    path: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  error: {
    container: 'bg-red-50 border-red-200',
    icon: 'text-red-600',
    text: 'text-red-800',
    dismiss: 'text-red-600 hover:text-red-800',
    path: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  },
};

export default function Alert({ type, label, message, onDismiss }: AlertProps) {
  const s = styles[type];

  return (
    <div className={`${s.container} border rounded-lg p-3`}>
      <div className="flex items-start gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`stroke-current shrink-0 h-4 w-4 ${s.icon} mt-0.5`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={s.path} />
        </svg>
        <div className={`flex-1 text-xs ${s.text}`}>
          {label && <span className="font-medium">{label} </span>}
          {message}
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className={`shrink-0 ${s.dismiss} transition-colors`}
            aria-label="Dismiss"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
