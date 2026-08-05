import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin, Phone } from "lucide-react";
import { business, navigation } from "../lib/config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact-band">
        <div className="shell footer-contact-band-inner">
          <div className="footer-contact-item footer-contact-phone">
            <Phone size={18} aria-hidden="true" />
            <div>
              <span>Contact</span>
              <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay} · {business.contactName}</a>
            </div>
          </div>

          <div className="footer-contact-divider" aria-hidden="true" />

          <div className="footer-contact-item">
            <MapPin size={18} aria-hidden="true" />
            <div>
              <span>Adresse</span>
              <strong>{business.city}</strong>
            </div>
          </div>

          <Link href="/rendez-vous" className="footer-contact-book">
            <CalendarDays size={18} aria-hidden="true" />
            Prendre rendez-vous
          </Link>
        </div>
      </div>

      <div className="shell footer-grid">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-navbar-v3-tight.png" alt="Loza Optique" />
          <p>Montures, technologies verrières et accompagnement attentif au cœur de Casablanca depuis 1989.</p>
        </div>

        <div>
          <p className="footer-title">Explorer</p>
          <nav className="footer-links" aria-label="Navigation de pied de page">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/confidentialite">Confidentialité</Link>
          </nav>
        </div>

        <div>
          <p className="footer-title">Visiter</p>
          <address className="footer-address">
            <span>{business.address}</span>
            <span>Vendredi : fermé</span>
            <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>
            <span>{business.contactName}</span>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </address>
        </div>

        <div className="footer-cta">
          <p className="footer-title">Un conseil personnalisé</p>
          <Link href="/rendez-vous" className="footer-big-link">
            Préparer votre visite <ArrowUpRight size={24} />
          </Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Loza Optique</span>
        <a href="https://builtbyanas.com" target="_blank" rel="noreferrer">Site conçu par BuiltByAnas.com</a>
      </div>
    </footer>
  );
}
