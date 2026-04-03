"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  target?: "_blank" | "_self";
  rel?: string;
  download?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  disabled = false,
  target,
  rel,
  download,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-200";

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-neutral-200"
      : "border border-neutral-700 text-white hover:border-neutral-500";

  const disabledStyles = disabled ? "opacity-60 cursor-not-allowed" : "";

  const finalClassName = `${base} ${styles} ${disabledStyles} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={finalClassName}
        target={target}
        rel={rel}
        download={download}
        aria-disabled={disabled}
        onClick={(e) => {
          if (disabled) e.preventDefault();
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
      type="button"
    >
      {children}
    </button>
  );
}