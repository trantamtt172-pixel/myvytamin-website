export function SakuraParticles() {
  return (
    <div className="sakura-field" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} className={`petal petal-${index + 1}`} />
      ))}
    </div>
  );
}
