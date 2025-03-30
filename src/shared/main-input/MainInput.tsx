export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
      <input
        className={`lg:block hidden border border-white px-4 py-2 focus:ring focus:ring-gray-300 outline-none ${className}`}
        {...props}
      />  
    );
  }
  