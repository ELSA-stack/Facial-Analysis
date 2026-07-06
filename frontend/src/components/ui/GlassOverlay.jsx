// A subtle glassy layer that adds depth without obscuring the content.
function GlassOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0.06))]" />
  )
}

export default GlassOverlay
