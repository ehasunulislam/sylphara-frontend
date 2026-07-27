import React from 'react'

const Welcome = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold">
        Welcome to{" "}
        <span className="bg-linear-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
          Sylphara AI
        </span>
      </h1>

      <p className="mt-4 text-zinc-400 text-md pt-31">
        Ask anything about code, careers, AI, and technology.
      </p>
    </div>
  )
}

export default Welcome
