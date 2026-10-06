import Alert from './Alert';

type ErrorBannerProps = {
  message: string;
  onDismiss: () => void;
};

export default function ErrorBanner({ message, onDismiss }: ErrorBannerProps) {
  return <Alert type="error" label="Error:" message={message} onDismiss={onDismiss} />;
}
