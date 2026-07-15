import { useEffect, useState } from 'react'

const facts = [
  'Refining facial symmetry analysis in real time.',
  'Cross-checking image quality and contrast cues.',
  'Preparing a high-confidence profile summary.',
]

function FactsTicker() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % facts.length)
    }, 2500)

    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
      {facts[index]}
    </div>
  )
}

export default FactsTicker
