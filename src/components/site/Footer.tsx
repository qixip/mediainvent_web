import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="\logo-wide.svg" 
                alt="Creative Agency Logo" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-muted-foreground font-new-order mb-6 max-w-md text-2xl">
              We are a creative agency dedicated to creating exceptional digital experiences that deliver results and inspire audiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/mediainvent.ro?igsh=MWU4ODV1eTllbWQzMw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/hive-creative-agency-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-social-gothic font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 font-new-order">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Brand Identity</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mobile Apps</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-social-gothic font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 font-new-order">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground font-new-order text-sm">
            © 2024 Creative Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-new-order">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-new-order">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;