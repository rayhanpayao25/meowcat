export function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${
          props.variant === "default" || !props.variant
            ? "bg-pink-500 text-white hover:bg-pink-600"
            : props.variant === "outline"
              ? "border border-input hover:bg-accent hover:text-accent-foreground"
              : props.variant === "ghost"
                ? "hover:bg-accent hover:text-accent-foreground"
                : ""
        } ${props.size === "default" || !props.size ? "h-10 py-2 px-4" : props.size === "sm" ? "h-9 px-3" : props.size === "lg" ? "h-11 px-8" : props.size === "icon" ? "h-10 w-10" : ""} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
  