interface ButtonProps {
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  title: string;
  handleClick?: () => void;
}

const Button = ({ type, disabled, title, handleClick }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="bg-primary text-white font-medium py-2 px-4 rounded-2xl w-full disabled:bg-sky-300 mt-4"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
