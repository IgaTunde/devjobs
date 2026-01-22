interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button = ({title, onClick}: ButtonProps) => {
  return (
    <div className=" justify-self-center ">
      <button className="text-sm text-white font-bold bg-indigo-500 rounded-md py-3 px-8 hover:bg-indigo-300 " onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

export default Button