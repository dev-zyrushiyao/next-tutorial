export default function PrimaryButton({ label }: { label: string }) {
  return (
    <button type="button" className="btn-primary">
      {label}
    </button>
  );
}
