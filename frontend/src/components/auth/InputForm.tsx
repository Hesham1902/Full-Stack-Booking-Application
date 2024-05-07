interface InputFormProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  register: any;
  error: any;
}

const InputForm = ({
  label,
  type,
  name,
  placeholder,
  register,
  error,
}: InputFormProps) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-3 font-medium text-gray-900">
        {label}
      </label>
      <input
        className="py-4 px-6 rounded-2xl w-full text-[#808080] border border-[#ADADAD] focus:border-primary outline-none"
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        {...register}
      />
      {error && (
        <span className="text-red-400 text-xs ml-2">{error.message}</span>
      )}
    </div>
  );
};

export default InputForm;
