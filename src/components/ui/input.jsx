import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Input = forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-12 w-full border border-line-strong bg-surface px-4 text-sm text-ink placeholder:text-ink-dim outline-none transition-colors duration-200",
        "focus:border-accent-2 focus:ring-1 focus:ring-accent-2",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
