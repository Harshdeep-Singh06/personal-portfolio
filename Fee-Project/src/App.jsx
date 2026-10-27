import Navbar from "./components/Navbar";

function App() {
return ( <div className="min-h-screen bg-zinc-950 text-zinc-100"> <Navbar />

  <main
    id="home"
    className="flex min-h-screen items-center justify-center px-6"
  >
    <div className="text-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
        Portfolio in progress
      </p>

      <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
        My Portfolio
      </h1>

      <p className="mt-5 text-zinc-400">
        Building something exceptional.
      </p>
    </div>
  </main>
</div>

);
}

export default App;
