import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="page-main">
        <PageHero eyebrow="Confidentialité" title={<>Une expérience claire.<br /><em>Un choix libre.</em></>} description="Informations générales sur l’usage du site et de l’essayage virtuel Loza Optique." />
        <section className="section section-ivory legal-section">
          <div className="shell legal-grid">
            <article><span>01</span><h2>Site vitrine</h2><p>Le site présente les collections, les services et les moyens de contacter Loza Optique. Les disponibilités des montures sont confirmées directement en boutique.</p></article>
            <article><span>02</span><h2>Rendez-vous</h2><p>Le formulaire prépare une demande par e-mail. Il ne crée pas de réservation automatique. Loza confirme personnellement le créneau proposé.</p></article>
            <article><span>03</span><h2>Essayage virtuel</h2><p>L’utilisation de la caméra est facultative et nécessite votre accord. Une alternative sans caméra reste disponible pour parcourir les montures et préparer une visite.</p></article>
            <article><span>04</span><h2>Données</h2><p>Les informations saisies dans une demande sont utilisées uniquement pour préparer le contact demandé avec la boutique.</p></article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
