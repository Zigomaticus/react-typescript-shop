// Css
import style from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  // onClose: () => void;
}

const Modal = ({ children, title }: ModalProps) => {
  return (
    <div className={style.modal}>
      <div className={style.modal__block}>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Modal;
