import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function ProfileSection() {
  return (
    <div className="border-b bg-muted/30 px-4 py-6">
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarFallback className="bg-primary text-primary-foreground">
            R
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-base font-medium">Rajarshi</p>
        </div>
      </div>
    </div>
  );
}
