import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { ProfileSection } from "./ProfileSection";
import { NavigationMenu } from "./NavigationMenu";

interface NavigationDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NavigationDrawer({ open, onOpenChange }: NavigationDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="flex w-[85vw] max-w-105 flex-col p-0"
      >
        {/* Accessible title and description for screen readers */}
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Main navigation options for Orca application
        </SheetDescription>

        {/* Profile Section */}
        <ProfileSection />

        {/* Navigation Items */}
        <NavigationMenu />

        {/* Close Button at Bottom */}
        <div className="border-t">
          <Button
            variant="ghost"
            className="w-full justify-center gap-2 rounded-none py-6 text-base"
            onClick={() => onOpenChange(false)}
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
            <span>Close</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
