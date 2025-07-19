export default function Phase({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-10">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}
