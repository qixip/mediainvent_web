export default function Mission() {
  return (
    <section 
      id="mission" 
      className="py-55 px-[45px] relative"
      style={{ 
        border: '4px solid #FD4D1e',
        backgroundImage: "url('/Evolution.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "2100px 700px",
        height: '910px',
      }}
    >
      
      <div className="mx-auto max-w-4xl px-8 relative z-12" style={{ marginTop: '-100px' }}>
        <div className="flex justify-between items-start">
          <div className="w-1/2">
            <p className="text-muted-foreground text-4xl text-left" style={{ color: '#FD4D1e', paddingBottom: '93px' }}>
              Our mission puts emphasis on growing local brands visibility - fast, creative, out of the box. MediaInvent = media + invent.
That is exactly what we do: we invent trends, not follow them.

            </p>
          </div>
          <div className="w-1/2">
            <h2 className="text-8xl font-bold text-right" style={{ color: '#FD4D1e' }}>Our mission</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
