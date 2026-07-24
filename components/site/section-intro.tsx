export function SectionIntro({
  eyebrow,
  title,
  copy,
  align = "left",
  as: Heading = "h2",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={`section-intro section-intro-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <Heading>{title}</Heading>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}
