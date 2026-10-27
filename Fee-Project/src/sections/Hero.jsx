import { useEffect, useState } from "react";
import {
ArrowDown,
ArrowUpRight,
Code2,
Github,
Linkedin,
Sparkles,
} from "lucide-react";

function Hero() {
const roles = [
"Frontend Developer",
"React Developer",
"UI Enthusiast",
];

const [roleIndex, setRoleIndex] = useState(0);

useEffect(() => {
const timer = setInterval(() => {
setRoleIndex((current) => (current + 1) % roles.length);
}, 2500);


return () => clearInterval(timer);


}, []);

return ( <section
   id="home"
   className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12"
 >
{/* Background Glow */} <div className="pointer-events-none absolute left-1/2 top-1/4 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px] sm:h-96 sm:w-96" />

  <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

    {/* Left Content */}
    <div>
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>

        <span className="text-xs font-medium tracking-wide text-zinc-300 sm:text-sm">
          Available for opportunities
        </span>
      </div>

      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
        Hello, I'm a developer
      </p>

      <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
        Building digital
        <span className="mt-2 block bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
          experiences.
        </span>
      </h1>

      <div className="mt-7 flex min-h-8 items-center gap-2 text-lg font-medium text-zinc-300 sm:text-xl">
        <Code2 size={21} className="text-violet-400" />
        <span>{roles[roleIndex]}</span>
        <span className="h-5 w-0.5 animate-pulse bg-violet-400" />
      </div>

      <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
        I build modern, responsive web experiences with React,
        JavaScript, and Tailwind CSS, combining thoughtful design
        with clean and maintainable code.
      </p>

      {/* Buttons */}
      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-1 hover:bg-violet-400"
        >
          Explore My Work
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <a
          href="#about"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-zinc-200 transition duration-300 hover:border-violet-400/40 hover:bg-white/[0.06]"
        >
          About Me
          <ArrowDown size={17} />
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-10 flex items-center gap-4">
        <span className="text-sm text-zinc-500">
          Find me on
        </span>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="rounded-lg border border-white/10 p-2.5 text-zinc-400 transition hover:border-violet-400/40 hover:text-white"
        >
          <Github size={19} />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="rounded-lg border border-white/10 p-2.5 text-zinc-400 transition hover:border-violet-400/40 hover:text-white"
        >
          <Linkedin size={19} />
        </a>
      </div>
    </div>

    {/* Right Visual */}
    <div className="relative mx-auto w-full max-w-md lg:ml-auto">
      <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-indigo-500/20 blur-2xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-800/80 to-zinc-950 p-6 shadow-2xl shadow-black/30 sm:p-8">

        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>

          <span className="text-xs text-zinc-500">
            developer.js
          </span>
        </div>

        <div className="py-8 font-mono text-sm leading-8 sm:text-base">
          <p className="text-zinc-500">
            {"// A little about me"}
          </p>

          <p>
            <span className="text-violet-400">const</span>{" "}
            <span className="text-sky-300">developer</span>{" "}
            <span className="text-zinc-300">= {"{"}</span>
          </p>

          <p className="pl-5">
            <span className="text-sky-200">name</span>
            <span className="text-zinc-400">:</span>{" "}
            <span className="text-emerald-300">
              "Your Name"
            </span>
            <span className="text-zinc-400">,</span>
          </p>

          <p className="pl-5">
            <span className="text-sky-200">focus</span>
            <span className="text-zinc-400">:</span>{" "}
            <span className="text-emerald-300">
              "Frontend"
            </span>
            <span className="text-zinc-400">,</span>
          </p>

          <p className="pl-5">
            <span className="text-sky-200">stack</span>
            <span className="text-zinc-400">:</span>{" "}
            <span className="text-emerald-300">
              ["React", "JS", "Tailwind"]
            </span>
            <span className="text-zinc-400">,</span>
          </p>

          <p className="pl-5">
            <span className="text-sky-200">mindset</span>
            <span className="text-zinc-400">:</span>{" "}
            <span className="text-emerald-300">
              "Always learning"
            </span>
          </p>

          <p className="text-zinc-300">{"};"}</p>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-violet-500/10 p-2.5 text-violet-300">
              <Sparkles size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Creative developer
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Turning ideas into interfaces
              </p>
            </div>
          </div>

          <span className="text-xs text-emerald-400">
            Online
          </span>
        </div>
      </div>

      <div className="absolute -right-3 top-12 hidden rounded-xl border border-white/10 bg-zinc-900 p-3 shadow-xl sm:block sm:-right-5">
        <Code2 size={23} className="text-violet-400" />
      </div>

      <div className="absolute -bottom-5 -left-3 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 shadow-xl sm:-left-6">
        <p className="text-xs text-zinc-500">
          Current focus
        </p>
        <p className="mt-1 text-sm font-semibold text-white">
          React + Tailwind
        </p>
      </div>
    </div>
  </div>
</section>

);
}

export default Hero;
