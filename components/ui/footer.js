import React, { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`footer h-10 ${
        showFooter ? "fixed bottom-0" : "absolute hidden"
      } w-full flex items-end justify-end px-10 pb-2 bg-gray-100 text-gray opacity-30 font-hind text-sm text-pink`}
    >
      Coprights Reserved - 2023
    </footer>
  );
};

export default Footer;
