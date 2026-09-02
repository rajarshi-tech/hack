import { useState, type FormEvent, type KeyboardEvent, type ChangeEvent } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Robot01Icon, Mic01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AIChatBar() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Submitted message:", message);
      // TODO: Integrate with AI backend
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as FormEvent);
    }
  };

  const handleMicClick = () => {
    console.log("Microphone clicked");
    // TODO: Implement voice input
  };

  return (
    <div className="sticky bottom-0 border-t bg-background">
      <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-3">
        {/* AI Icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
          <HugeiconsIcon icon={Robot01Icon} size={24} className="text-primary" />
        </div>

        {/* Input Field */}
        <Input
          type="text"
          placeholder="Ask Orca..."
          value={message}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1"
          aria-label="Ask Orca AI assistant"
        />

        {/* Microphone Button */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={handleMicClick}
          aria-label="Voice input"
          className="h-10 w-10 shrink-0"
        >
          <HugeiconsIcon icon={Mic01Icon} size={20} />
        </Button>

        {/* Submit Button */}
        <Button
          type="submit"
          size="icon"
          disabled={!message.trim()}
          aria-label="Send message"
          className="h-10 w-10 shrink-0"
        >
          <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
        </Button>
      </form>
    </div>
  );
}
