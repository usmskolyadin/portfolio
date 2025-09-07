type MainButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
};

export function MainButton({ children, className = "", href, ...props }: MainButtonProps) {
  return (
    <button
      className={` backdrop-blur-md cursor-pointer rounded-3xl font-bold lg:text-lg text-md mt-4 lg:px-12 px-8 py-2 transform transition-transform duration-300 hover:scale-105 ${className}`}
      {...props}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        children
      )}
    </button>
  );
}
