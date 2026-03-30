import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  inverse?: boolean;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", inverse = false, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto min-w-32 md:min-w-44 cursor-pointer overflow-hidden rounded-full border p-3 px-6 md:px-8 text-center font-semibold text-sm md:text-base",
        inverse 
          ? "bg-black dark:bg-white border-black dark:border-white" 
          : "bg-white dark:bg-black border-black dark:border-white",
        className,
      )}
      {...props}
    >
      <span 
        className={cn(
          "inline-block whitespace-nowrap transition-all duration-300 group-hover:translate-x-3 md:group-hover:translate-x-12 group-hover:opacity-0",
          inverse ? "text-white dark:text-black" : "text-black dark:text-white"
        )}
      >
        {text}
      </span>
      <div 
        className={cn(
          "absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center gap-1 md:gap-2 opacity-0 transition-all duration-300 translate-x-3 md:translate-x-12 group-hover:translate-x-0 group-hover:opacity-100",
          inverse ? "text-black dark:text-white" : "text-white dark:text-black"
        )}
      >
        <span className="whitespace-nowrap">{text}</span>
        <ArrowRight className="size-4" />
      </div>
      <div 
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full transition-all duration-300 group-hover:w-[400px] group-hover:h-[400px]",
          inverse ? "bg-white dark:bg-black" : "bg-black dark:bg-white"
        )}
      ></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };