import Link from "next/link";

export default function PrimaryButton({ label }: { label: string }) {
  return (
    <Link href={"/ticket"}>
      <button type="button" className="btn-primary">
        {label}
      </button>
    </Link>
  );
}
