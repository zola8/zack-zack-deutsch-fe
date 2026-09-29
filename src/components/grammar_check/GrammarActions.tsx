type GrammarActionsProps = {
  onClear: () => void;
  onSubmit: () => void;
  isSubmitEnabled: boolean;
  hasContent: boolean;
  isLoading?: boolean;
};

export default function GrammarActions({
  onClear,
  onSubmit,
  isSubmitEnabled,
  hasContent,
  isLoading = false,
}: GrammarActionsProps) {
  return (
    <div className="flex gap-3 justify-end">
      <button
        onClick={onClear}
        className="btn btn-outline btn-neutral"
        disabled={!hasContent || isLoading}
      >
        Clear
      </button>
      <button
        onClick={onSubmit}
        className="btn btn-neutral"
        disabled={!isSubmitEnabled}
      >
        {isLoading ? (
          <>
            <span className="loading loading-spinner loading-sm"></span>
            Checking...
          </>
        ) : (
          'Check Grammar'
        )}
      </button>
    </div>
  );
}
