import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import LogoWideContainer from "@/components/site/LogoWideContainer";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Mission from "@/components/sections/Mission";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Clients from "@/components/sections/Clients";
import ContactForm from "@/components/forms/ContactForm";

export default function Page() {
  return (
    <>
      <Header />
      <LogoWideContainer />
      <Hero />
      <Intro />
      <Mission />
      <Services />
      <Clients />
      <Portfolio />
      <section id="contact" className="py-16 px-[45px]" style={{ backgroundColor: '#0138aD' }}>
        <div className="mx-auto max-w-4xl px-10">
          <h2 className="text-5xl font-bold">Contact</h2>
          <p className="mt-4 text-muted-foreground">
            Leave your email and request. We&apos;ll get back to you.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
