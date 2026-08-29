import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Textarea = forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-32 w-full border border-line-strong bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-dim outline-none transition-colors duration-200 resize-y",
        "focus:border-accent-2 focus:ring-1 focus:ring-accent-2",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
