import { useEffect, useState, useRef } from "react";

const useDetectClose = (isOpen : boolean, handleIsOpen : (boolean : boolean) => void) => {
  // const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e : Event) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        handleIsOpen(false)
      }
    };

    if (isOpen) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isOpen]);

  return {isOpen, ref};
};

export default useDetectClose;
