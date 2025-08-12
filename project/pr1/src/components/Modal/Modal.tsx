import "../../assets/variables.css";

interface ModalProps {
  className?: string;
  children: React.ReactNode;
}

function Modal({ className, children }: ModalProps) {
  return (
    <>
      <div
        className={`w-[33%] h-[62vh]  rounded-[2.5rem] bg-[var(--Background-white)] shadow-[var(--shadow-black)] ${className}`}
      >
        {children}
      </div>
    </>
  );
}
export default Modal;
