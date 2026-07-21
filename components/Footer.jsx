import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="mt-16">
      <div className="border-t border-gray-300 dark:border-white/10 mx-[6%] sm:mx-[10%] py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <p className="text-center sm:text-left text-sm sm:text-base text-gray-600 dark:text-white/70">
            © {new Date().getFullYear()} Dinesh Kumar. All Rights Reserved.
          </p>

          {/* Back to Top */}
          {showTop && (
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="w-10 h-10 rounded-full
                bg-black dark:bg-white
                text-white dark:text-black
                flex items-center justify-center
                shadow-md
                hover:scale-110 active:scale-95
                transition-all duration-300"
              aria-label="Back to top"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
