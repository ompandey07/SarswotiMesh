import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 active:translate-y-0.5",
  {
    variants: {
      variant: {
        primary:
          "bg-accent-2 text-[#0a0c0e] hover:bg-accent hover:text-white border border-accent-2 shadow-sm",
        outline:
          "border border-line-strong text-ink bg-transparent hover:border-accent-2 hover:text-accent-2 hover:bg-accent-dim",
        secondary:
          "bg-surface-2 text-ink border border-line hover:border-accent-2 hover:text-accent-2",
        ghost: "text-ink hover:text-accent-2 hover:bg-accent-dim",
      },
      size: {
        default: "h-12 px-6",
        lg: "h-14 px-8 text-base",
        sm: "h-9 px-4 text-xs",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
