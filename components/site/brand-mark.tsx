export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-mark ${light ? "brand-mark-light" : ""}`}>
      <span className="brand-mark-symbol" aria-hidden="true">
        2D
      </span>
      <span className="brand-mark-copy">
        <strong>2D SYSTEM</strong>
        <small aria-hidden="true">RELATIONSHIPS • RESOURCES • RESULTS</small>
      </span>
    </span>
  );
}
