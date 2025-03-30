export function MainButton({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`border cursor-pointer border-[#929292] rounded-3xl font-bold text-xl mt-4 px-16 py-2 transform transition-transform duration-300 hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
