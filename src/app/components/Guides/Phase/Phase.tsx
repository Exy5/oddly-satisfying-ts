import { PhaseStyle, PhaseTitleStyle } from "./Phase.css";

export default function Phase({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className={PhaseStyle}>
      <h2 className={PhaseTitleStyle}>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
