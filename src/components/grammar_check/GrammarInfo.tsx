import Alert from '../Alert';

export default function GrammarInfo() {
  return (
    <Alert
      type="info"
      label="Grammar check:"
      message="Analyzes your text for grammar. Powered by LanguageTool (free version). For better usage see Premium version!"
    />
  );
}
