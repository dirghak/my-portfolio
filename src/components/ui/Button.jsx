export function Button({ children, size, variant, className }) {
    const base = "px-4 py-2 rounded font-semibold";
    const sizeClass = size === "sm" ? "text-sm" : "text-base";
    const variantClass = variant === "outline" ? "border border-gray-400" : "bg-blue-600 text-white";
    return <button className={`${base} ${sizeClass} ${variantClass} ${className}`}>{children}</button>;
  }