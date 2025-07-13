export default function Phase({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}
