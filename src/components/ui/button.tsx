import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({ variant = "default", className = "", ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded font-medium transition";
  const styles = {
    default: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-green-700 text-green-700 hover:bg-green-100",
  };

  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />;
}
