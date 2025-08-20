// src/hooks/useTyped.js
import { useEffect } from "react";
import Typed from "typed.js";

const useTyped = (selector, options) => {
  useEffect(() => {
    const typed = new Typed(selector, options);
    return () => typed.destroy(); // cleanup
  }, []);
};

export default useTyped;
