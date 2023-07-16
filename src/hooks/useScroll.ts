import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled, setScrolled };
};
