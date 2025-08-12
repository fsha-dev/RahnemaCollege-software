import "./../../assets/variables.css";
interface InputProps {
  className?: string;
  placeholder: string;
  inputName: string;
  svgIcon: string;
}
function Input({ placeholder, svgIcon, inputName }: InputProps) {
  return (
    <>
      <div className="relative w-[66%] h-[3.6rem] flex items-center">
        <input
          type="text"
          className="flex-grow h-[3.6rem] rounded-[1.6rem]
        border-1
        border-[var(--Border-input)]
        bg-white text-right  placeholder:text-[var(--Grey-light)] py-2 pl-4 pr-12  "
          placeholder={placeholder}
          name={inputName}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4.5 pl-2 pointer-events-none">
          <img src={svgIcon} className="size-6" />
        </div>
      </div>
    </>
  );
}

export default Input;
