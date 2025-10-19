export default function TokenTest() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-3xl font-bold">Token Test</h1>

      <section className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Card on bg-card</h2>
          <p className="mt-2 text-muted-foreground">
            This is muted foreground text. Borders should use the border token.
          </p>

        <button
          className="mt-4 rounded-lg px-4 py-2 bg-primary text-primary-foreground outline-none
             focus-visible:ring-2 focus-visible:ring-ring
             focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          title="Use the Tab key to focus me"
        >
          Primary button
        </button>
        </div>    

        <div className="rounded-lg border border-border p-6">
          <h2 className="text-xl font-semibold">Background / Foreground</h2>
          <div className="mt-4 h-10 rounded bg-muted" />
          <p className="mt-3">
            Accent example: <span className="px-2 py-1 rounded bg-accent text-accent-foreground">Accent</span>
          </p>
          <p className="mt-3">
            Secondary example: <span className="px-2 py-1 rounded bg-secondary text-secondary-foreground">Secondary</span>
          </p>
        </div>
      </section>
    </main>
  );
}
