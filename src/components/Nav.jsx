import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-700 ease-in-out
        ${
          scrolled
            ? " backdrop-blur shadow-md "
            : "bg-transparent py-6"
        }
      `}
    >
      <div className="container-custom flex items-center justify-between">
        
        {/* LOGO */}
        <div
          className={`
             tracking-wide w-[120px] transition-colors duration-300
            ${scrolled ? "text-black" : "text-[#fed01f]"}
          `}
        >
          <img src="/public/cerna.logo.pruhledne.png" alt="logo" />
        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-10">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`
                relative font-medium transition-colors duration-300
                ${scrolled ? "text-[#29292b]" : "text-[#e6a500]"}
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-current
                after:transition-all after:duration-300
                hover:after:w-full
              `}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className={`
            md:hidden text-2xl transition-colors duration-300
            ${scrolled ? "text-black" : "text-white"}
          `}
        >
          ☰
        </button>

      </div>
    </header>
  );
}
