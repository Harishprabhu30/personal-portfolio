import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
}: Props) {
  const base =
    "rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-200";

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-neutral-200"
      : "border border-neutral-700 text-white hover:border-neutral-500";

  if (href) {
    return (
      <a href={href} className={`${base} ${styles}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}