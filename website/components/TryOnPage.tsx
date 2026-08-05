import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, Glasses, ScanFace, Smartphone } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";
import ImageWithFallback from "./ImageWithFallback";

export default function TryOnPage() {
  return (
    <>
      <Header />
      <main id="main" className="page-main">
        <PageHero
          eyebrow="Essayage virtuel"
          title={<>Voir la forme.<br /><em>Garder le choix.</em></>}
          description="L’essayage virtuel aide à découvrir certaines montures compatibles depuis l’application mobile, sans remplacer le conseil et l’ajustement en boutique."
          image="/images/lifestyle/persol-alpine-women.webp"
          imageAlt="Femme portant la monture Alpine Signature"
        />

        <section className="tryon-steps-section">
          <div className="shell tryon-steps-grid">
            <div className="tryon-steps-intro">
              <p className="eyebrow light"><span /> Comment ça marche</p>
              <h2>Trois étapes.<br /><em>Aucune pression.</em></h2>
              <p>La caméra n’est jamais activée sans votre accord. Vous pouvez à tout moment continuer sans l’utiliser.</p>
            </div>
            <div className="tryon-steps">
              <article><span>01</span><Smartphone size={24} /><h3>Choisir une monture</h3><p>Repérez une référence marquée comme compatible avec l’essayage mobile.</p></article>
              <article><span>02</span><Camera size={24} /><h3>Autoriser la caméra</h3><p>L’application demande votre accord avant de lancer l’aperçu sur le visage.</p></article>
              <article><span>03</span><Glasses size={24} /><h3>Conserver la référence</h3><p>Gardez le modèle en tête et venez confirmer le choix et l’ajustement en boutique.</p></article>
            </div>
          </div>
        </section>

        <section className="tryon-demo-section">
          <div className="shell tryon-demo-grid">
            <div className="tryon-demo-visual">
              <div className="phone-mockup phone-mockup-large">
                <div className="phone-top"><span /><span /></div>
                <div className="phone-screen">
                  <ImageWithFallback src="/images/lifestyle/persol-alpine-men.webp" alt="Aperçu d’une monture sur un visage" />
                  <div className="face-scan" aria-hidden="true"><i /><i /><i /><i /></div>
                  <div className="phone-label"><span>Alpine Signature</span><strong>PO2496SZ</strong></div>
                </div>
              </div>
              <div className="tryon-demo-frame"><ImageWithFallback src="/images/products/persol/po2496sz-front.webp" alt="Monture Alpine Signature" /></div>
            </div>
            <div className="tryon-demo-copy">
              <p className="eyebrow"><span /> Une aide au choix</p>
              <h2>Le virtuel donne une première impression. Le miroir donne la réponse.</h2>
              <ul>
                <li><CheckCircle2 size={18} /> Usage facultatif</li>
                <li><CheckCircle2 size={18} /> Accès caméra après consentement</li>
                <li><CheckCircle2 size={18} /> Alternative disponible sans caméra</li>
                <li><CheckCircle2 size={18} /> Ajustement final en boutique</li>
              </ul>
              <div className="tryon-demo-actions">
                <Link href="/collections" className="button button-dark">Voir les montures <ArrowRight size={17} /></Link>
                <Link href="/rendez-vous" className="button button-outline-dark"><ScanFace size={17} /> Préparer un essayage</Link>
              </div>
              <p className="tryon-status tryon-status-dark"><span aria-hidden="true" /> Sous test · bientôt disponible sur Play Store</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
