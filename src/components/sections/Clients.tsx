"use client"

import Image from "next/image"

const clientLogos = [
  {
    name: "Beviaqua",
    src: "/client logos/Beviaqua.png",
    alt: "Beviaqua logo"
  },
  {
    name: "Centrul de meditatii super",
    src: "/client logos/Centrul de meditatii super.png",
    alt: "Centrul de meditatii super logo"
  },
  {
    name: "Danemar",
    src: "/client logos/Danemar.jpg",
    alt: "Danemar logo"
  },
  {
    name: "NEPI Rockcastle",
    src: "/client logos/NEPI-Rockcastle.svg",
    alt: "NEPI Rockcastle logo"
  },
  {
    name: "Teepee Corbu",
    src: "/client logos/Teepee Corbu.png",
    alt: "Teepee Corbu logo"
  },
  {
    name: "Luxury Aestetics",
    src: "/client logos/Luxury Aesthetics.png",
    alt: "Luxury Aestetics logo"
  },
  {
    name: "Credos",
    src: "/client logos/credos.svg",
    alt: "Credos logo"
  }
]

export default function Clients() {
  return (
    <section id="clients" className="py-18 px-[45px] bg-white">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="text-8xl font-bold text-center" style={{ color: '#FD4D1E' }} >Our Clients</h2>
        <div className="mt-22">
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {clientLogos.map((logo, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 w-1/4 flex items-center justify-center h-24 p-4">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={80}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 w-1/4 flex items-center justify-center h-24 p-4">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={80}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: 200%;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
