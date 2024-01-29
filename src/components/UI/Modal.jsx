import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
export default function Modal({ isOpen, children }) {
  const modalRef = useRef();
  useEffect(() => {
    if (isOpen) {
      modalRef.current.showModal();
    }
    return () => {
      modalRef.current.close();
    };
  }, [isOpen]);
  return createPortal(
    <dialog ref={modalRef} className="cart modal">
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
