type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p className="section-copy">{children}</p> : null}
    </div>
  );
}
