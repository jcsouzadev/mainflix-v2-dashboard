import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl shadow border p-4 bg-white ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}
