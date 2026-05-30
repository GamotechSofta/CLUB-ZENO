import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-slate-950 px-6 py-12 text-slate-100">
      <div className="flex items-center gap-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="h-24 transition-transform hover:scale-110"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="h-24 animate-spin [animation-duration:20s] hover:[animation-play-state:paused]"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="mt-10 text-4xl font-semibold tracking-tight sm:text-5xl">
        Vite + React + Tailwind
      </h1>

      <p className="mt-4 max-w-md text-center text-slate-400">
        Edit <code className="rounded bg-slate-800 px-2 py-1 text-sm text-violet-300">src/App.jsx</code> and save to test HMR.
      </p>

      <button
        type="button"
        className="mt-8 rounded-lg bg-violet-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-violet-900/30 transition hover:bg-violet-500 active:scale-95"
        onClick={() => setCount((value) => value + 1)}
      >
        Count is {count}
      </button>
    </div>
  )
}

export default App
