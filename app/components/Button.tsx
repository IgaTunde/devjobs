interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ title, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      className={`text-sm text-white font-bold bg-indigo-500 rounded-md py-3 px-8 hover:bg-indigo-300 transition-colors ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
