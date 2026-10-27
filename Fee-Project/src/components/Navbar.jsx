import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const links = [
{ name: "About", href: "#about" },
{ name: "Skills", href: "#skills" },
{ name: "Projects", href: "#projects" },
{ name: "Experience", href: "#experience" },
{ name: "Contact", href: "#contact" },
];

return ( <header className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-8"> <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/80 px-5 py-4 shadow-xl backdrop-blur-xl">

    {/* Logo */}
    <a href="#home" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-lg font-bold text-white">
        H.
      </div>

      <div className="hidden sm:block">
        <p className="text-sm font-bold text-white">
          Developer Portfolio
        </p>
        <p className="text-xs text-zinc-500">
          Frontend Developer
        </p>
      </div>
    </a>

    {/* Desktop Navigation */}
    <div className="hidden items-center gap-7 lg:flex">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-sm text-zinc-400 transition duration-300 hover:text-white"
        >
          {link.name}
        </a>
      ))}
    </div>

    {/* Contact Button */}
    <a
      href="#contact"
      className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 transition duration-300 hover:bg-violet-200 sm:flex"
    >
      Let's Talk
      <ArrowUpRight size={16} />
    </a>

    {/* Mobile Menu Button */}
    <button
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white hover:bg-white/10 lg:hidden"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
    >
      {menuOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  </nav>

  {/* Mobile Navigation */}
  {menuOpen && (
    <div
      id="mobile-menu"
      className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-zinc-950 p-4 shadow-xl lg:hidden"
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className="block rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
        >
          {link.name}
        </a>
      ))}
    </div>
  )}
</header>

);
}

export default Navbar;
