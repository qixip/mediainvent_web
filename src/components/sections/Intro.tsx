export default function Intro() {
  return (
    <section 
      id="intro" 
      className="py-60 bg-white px-[45px] relative"
      style={{
        backgroundImage: "url('/target.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "1200px 95px",
        backgroundSize: "auto 90%"
      }}
    >
      <div className="mx-auto max-w-4xl px-8 relative z-10">
        <h2 className="text-8xl font-bold text-[#fd4d1e] text-left mb-30">About us</h2>
        <div className="flex flex-col md:flex-row gap-30 items-start">
          <div className="w-1/2">
            <p className="text-[#0138ad] text-4xl text-left">
              Four friends. Three core strengths: design,
              strategy, digital. We set up MediaInvent to
              refresh the market and invent campaigns that
              actually matter. We don&apos;t copy. We don&apos;t
              recycle. We create from scratch, tailored for
              every brand. Bold ideas, measurable
              impact, and stories that stick, that is what we
              stand for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
