import { useState } from 'react';
import Alert from '../components/Alert';
import GrammarActions from '../components/grammar_check/GrammarActions';
import GrammarInfo from '../components/grammar_check/GrammarInfo';
import GrammarInputArea from '../components/grammar_check/GrammarInputArea';
import GrammarOutputArea from '../components/grammar_check/GrammarOutputArea';
import { api, ApiError } from '../data/api';
import type { GrammarCheckRequest, GrammarCheckResponse } from '../data/types/grammar';


export default function GrammarCheck() {
  const [inputText, setInputText] = useState<string>('');
  const [response, setResponse] = useState<GrammarCheckResponse | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClear = () => {
    setInputText('');
    setResponse(null);
    setError('');
  };

  const handleSubmit = async () => {
    setError('');
    setIsLoading(true);

    try {
      const request: GrammarCheckRequest = {
        text: inputText,
      }
      const result = await api.post<GrammarCheckResponse>('/api/v1/grammar/check', request);
      setResponse(result);
    } catch (err: unknown) {
      let errorMessage = 'An unexpected error occurred. Please try again.';

      if (err instanceof ApiError) {
        errorMessage = err.message;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const isSubmitEnabled = inputText.trim().length > 0;
  const hasContent = inputText.length > 0 || response !== null;

  return (
    <div className="space-y-6">
      <GrammarInfo />
      <GrammarInputArea value={inputText} onChange={setInputText} />
      <GrammarActions
        onClear={handleClear}
        onSubmit={handleSubmit}
        isSubmitEnabled={isSubmitEnabled && !isLoading}
        hasContent={hasContent}
        isLoading={isLoading}
      />

      {error && (
        <Alert
          type="error"
          label="Error:"
          message={error}
          onDismiss={() => setError('')}
        />
      )}

      <GrammarOutputArea response={response} />
    </div>
  );
}
