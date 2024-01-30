import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
export default function Modal({ isOpen, children, onClose = null }) {
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
    <dialog ref={modalRef} className="cart modal" onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
