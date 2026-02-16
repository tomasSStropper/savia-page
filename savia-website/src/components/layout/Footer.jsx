import { Link as ScrollLink } from 'react-scroll';
import { Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="relative bg-dark text-white/80">
      {/* Wave SVG */}
      <div className="absolute -top-px left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z"
            fill="#0D1F15"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo */}
          <div>
            <div className="mb-4">
              <span className="font-display text-2xl font-bold text-white">SAVIA</span>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-white/40">
                Sustainability Advisors
              </span>
            </div>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent/30 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.servicesTitle}</h4>
            <ul className="space-y-3 text-sm">
              {['Diagnóstico Ambiental', 'Estrategia de Sostenibilidad', 'Certificaciones Ambientales', 'Capacitación y Cultura'].map((s) => (
                <li key={s}>
                  <ScrollLink
                    to="servicios"
                    smooth
                    duration={800}
                    className="hover:text-accent cursor-pointer transition-colors"
                  >
                    {s}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.companyTitle}</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: t.footer.aboutUs, to: 'enfoque' },
                { label: t.footer.ourProjects, to: 'proyectos' },
                { label: t.footer.ourTeam, to: 'equipo' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <ScrollLink
                    to={to}
                    smooth
                    duration={800}
                    className="hover:text-accent cursor-pointer transition-colors"
                  >
                    {label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm">
              <li>{t.contact.info.email}</li>
              <li>{t.contact.info.phone}</li>
              <li>{t.contact.info.location}</li>
            </ul>
            <a
              href="https://wa.me/50600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-accent/20 text-accent rounded-full text-sm font-medium hover:bg-accent/30 transition-colors"
            >
              <MessageCircle size={16} />
              {t.footer.whatsapp}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <span>&copy; 2024 SAVIA Sustainability Advisors. {t.footer.rights}</span>
          <div className="flex gap-6">
            <span className="hover:text-white/60 cursor-pointer">{t.footer.privacy}</span>
            <span className="hover:text-white/60 cursor-pointer">{t.footer.terms}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
