import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface NavigationItemProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export function NavigationItem({ icon, label, onClick }: NavigationItemProps) {
  return (
    <Button
      variant="ghost"
      className="w-full justify-start gap-3 px-4 py-6 text-base font-normal"
      onClick={onClick}
    >
      <span className="h-5 w-5">{icon}</span>
      <span>{label}</span>
    </Button>
  );
}
