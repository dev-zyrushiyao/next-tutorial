

type ButtonType = "button" | "submit";

export default function PrimaryButton({
  label,
  type,
  disabled,
}: {
  label: string;
  type?: ButtonType;
  disabled?: boolean;
}) {
  return (
    <button
      type={type ? type : "button"}
      className="btn-primary"
      disabled={disabled}
    >
      {label}
    </button>
  );
}
