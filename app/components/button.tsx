export default function Button({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="btn-primary bg-primary text-white p-4 rounded-sm tracking-wider"
    >
      {label}
    </button>
  );
}
