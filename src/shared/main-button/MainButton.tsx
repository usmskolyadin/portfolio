export function MainButton({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`border border-0.5  backdrop-blur-md cursor-pointer  rounded-3xl font-bold lg:text-lg text-md mt-4 lg:px-16 px-8 py-2 transform transition-transform duration-300 hover:scale-105 ${className}`}
      {...props}
    >
      
      {children}
    </button>
  );
}
