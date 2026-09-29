type ActionButtonsProps = {
  onClear: () => void;
  onSubmit: () => void;
  isSubmitEnabled: boolean;
  hasContent: boolean;
};


export default function ActionButtons({ onClear, onSubmit, isSubmitEnabled, hasContent }: ActionButtonsProps) {
  return (
    <div className="flex gap-3 justify-end">
      <button
        onClick={onClear}
        className="btn btn-outline btn-neutral"
        disabled={!hasContent}
      >
        Clear
      </button>
      <button
        onClick={onSubmit}
        className="btn btn-neutral"
        disabled={!isSubmitEnabled}
      >
        Translate
      </button>
    </div>
  );
}
