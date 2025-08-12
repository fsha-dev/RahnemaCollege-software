import "../../assets/variables.css";

interface ModalProps {
  className?: string;
}

function Modal({ className }: ModalProps) {
  return (
    <>
      <div
        className={`w-1/3 h-[62vh]  rounded-[2.5rem] bg-[var(--Background-white)] shadow-[var(--shadow-black)] ${className}`}
      ></div>
    </>
  );
}
export default Modal;
