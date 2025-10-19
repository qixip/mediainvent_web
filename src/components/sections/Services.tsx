import { Brush, Globe2, Workflow, Target, Megaphone, Camera, TrendingUp } from "lucide-react";

const services = [
  { 
    icon: Brush, 
    title: "OOH / Street Marketing", 
    desc: [
      "Concepts & design for posters, banners, flyers",
      "Mockups and print-ready materials", 
      "Planning & location recommendations for outdoor campaigns"
    ]
  },
  { 
    icon: Globe2, 
    title: "Web & Platform Development", 
    desc: [
      "Company websites (WordPress or custom development)",
      "High-converting landing pages for ad campaigns",
      "E-commerce and educational platforms (e-learning, CRM integration)",
      "UX/UI design + on-page SEO optimization",
      "Online payments and lead form integrations with CRM"
    ]
  },
  { 
    icon: Workflow, 
    title: "Automations & CRM", 
    desc: [
      "Automated flows (welcome, reminders, follow-ups)",
      "Retention and reactivation systems",
      "Referral campaigns (friend codes, loyalty offers)"
    ]
  },
  { 
    icon: Target, 
    title: "Strategy & Consulting", 
    desc: [
      "Market research and analysis",
      "Brand positioning and messaging",
      "Campaign strategy and planning"
    ]
  },
  { 
    icon: Megaphone, 
    title: "Digital Marketing", 
    desc: [
      "Social media campaign management",
      "PPC advertising and optimization",
      "Content marketing and SEO strategies"
    ]
  },
  { 
    icon: Camera, 
    title: "Content Creation", 
    desc: [
      "Photography and videography services",
      "Graphic design and visual branding",
      "Content planning and production"
    ]
  },
  { 
    icon: TrendingUp, 
    title: "Analytics & Performance", 
    desc: [
      "Campaign performance tracking",
      "ROI analysis and reporting",
      "Data-driven optimization strategies"
    ]
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 px-[45px]" style={{ backgroundColor: '#0138aD' }}>
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="text-8xl font-bold text-center mb-22" style={{ color: '#FF4C00' }}>Our Services</h2>
        
        <div className="bg-white rounded-lg p-8">
          <div className="space-y-4">
            {services.map((s, index) => (
              <div 
                key={s.title} 
                className={`group relative rounded-lg bg-black border border-gray-200 overflow-hidden cursor-pointer
                           transform transition-all duration-500 ease-out
                           hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20
                           min-h-[120px] hover:min-h-[400px]`}
                style={{ padding: '50px' }}
              >
                <div className="flex justify-center mb-4 transition-transform duration-300 ease-out group-hover:scale-110">
                  <s.icon className="h-6 w-6 transition-colors duration-300" style={{ color: '#FD4D1E' }} />
                </div>
                <h3 className={`text-4xl font-bold transition-all duration-300 ease-out group-hover:text-5xl ${
                  index % 2 === 0 ? 'text-left' : 'text-right'
                }`} style={{ color: '#FD4D1E' }}>{s.title}</h3>
                
                {/* Hidden content that appears on hover */}
                <div className={`
                  opacity-0 max-h-0 translate-y-4
                  group-hover:opacity-100 group-hover:max-h-[400px] group-hover:translate-y-0
                  transition-all duration-700 ease-out delay-100
                  overflow-hidden ${index % 2 === 0 ? 'text-left' : 'text-right'}
                `} style={{ marginTop: '20px' }}>
                  <ul className={`text-2xl list-disc text-white ${
                    index % 2 === 0 ? 'list-inside' : 'list-inside text-right'
                  }`} style={{ lineHeight: '1.8' }}>
                    {s.desc.map((item, itemIndex) => (
                      <li 
                        key={itemIndex} 
                        className={`
                          opacity-0 translate-x-4 
                          group-hover:opacity-100 group-hover:translate-x-0
                          transition-all duration-500 ease-out
                        `}
                        style={{ 
                          marginBottom: '15px',
                          transitionDelay: `${200 + itemIndex * 100}ms`
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
