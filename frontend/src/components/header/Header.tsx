import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background px-4 py-3">
      {/* Hamburger Menu */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onMenuClick}
        aria-label="Open menu"
        className="h-11 w-11"
      >
        <HugeiconsIcon icon={Menu01Icon} size={24} />
      </Button>

      {/* Centered Logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-xl font-bold tracking-wide">ORCA</h1>
      </div>

      {/* Empty space for balance */}
      <div className="h-11 w-11" />
    </header>
  );
}
