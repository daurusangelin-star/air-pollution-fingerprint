export function Button({ children, className, variant, ...props }) {
  let base = "px-4 py-2 rounded-2xl font-semibold transition";
  let styles = "";

  if (variant === "outline") {
    styles = "border border-gray-400 text-gray-200 hover:bg-gray-200 hover:text-black";
  } else {
    styles = "bg-emerald-500 text-black hover:shadow-lg";
  }

  return (
    <button className={`${base} ${styles} ${className || ""}`} {...props}>
      {children}
    </button>
  );
}
