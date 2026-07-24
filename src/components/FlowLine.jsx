// Signature element: an animated "flow line" that echoes the two converging
// peaks in the Morgan Bailey mark and the SRS's own language of goods moving
// "from the point of origin to the point of consumption."
export default function FlowLine({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="w-full h-10"
      >
        <line
          x1="0" y1="20" x2="1200" y2="20"
          stroke="#E7E3DB" strokeWidth="1.5"
        />
        <path
          d="M0 20 L560 20 L580 6 L600 34 L620 20 L1200 20"
          fill="none"
          stroke="#FF6A00"
          strokeWidth="2"
          strokeDasharray="240 2000"
          className="animate-flow"
        />
      </svg>
    </div>
  );
}
