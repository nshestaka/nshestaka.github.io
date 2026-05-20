import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-900 text-slate-100">
      <h1 className="text-4xl font-bold tracking-tight">Vite + React + Tailwind v4</h1>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className="rounded-md bg-indigo-500 px-4 py-2 font-medium transition-colors hover:bg-indigo-400"
      >
        count is {count}
      </button>
      <p className="text-slate-400">
        Edit <code className="rounded bg-slate-800 px-1.5 py-0.5 font-mono">src/App.tsx</code> and
        save to test HMR
      </p>
    </div>
  )
}

export default App
