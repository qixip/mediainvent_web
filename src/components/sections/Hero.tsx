import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative py-60 px-[55px]">
      <img 
        src="/hero-image.svg" 
        alt="MediaInvent Brand" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            We build playful, premium brands that get noticed.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-prose text-2xl">
            MediaInvent blends strategy, design, and web to launch your identity with impact.
          </p>
          
          <Link
            href="#contact"
            className="inline-flex items-center mt-8 rounded-lg px-6 py-3 font-medium
                       bg-primary text-primary-foreground
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                       focus-visible:ring-offset-2 hover:bg-primary/90 transition-colors"
          >
            Start Your Brand
          </Link>
        </div>
      </div>
    </section>
  );
}
