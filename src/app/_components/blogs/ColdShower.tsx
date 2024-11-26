import Link from "next/link";

const ColdShower = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-card shadow-lg rounded-lg mt-12 space-y-10">
      {/* Introduction */}
      <div className="text-center">
        <div className="text-4xl font-extrabold text-primary mb-4">
          Les Bienfaits de la Douche Froide
        </div>
        <div className="text-lg text-muted-foreground">
          Découvrez pourquoi cette habitude simple peut transformer votre santé physique et mentale, et comment l'intégrer
          dans votre quotidien.
        </div>
      </div>

      {/* Section 1: Amélioration de la circulation sanguine */}
      <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
        <div className="text-2xl font-bold text-primary mb-3">
          1. Amélioration de la Circulation Sanguine
        </div>
        <div className="text-muted-foreground text-justify leading-relaxed">
          Une douche froide stimule vos vaisseaux sanguins en les contractant. Cela pousse le sang à circuler plus
          efficacement dans votre corps, améliorant l’oxygénation des organes vitaux et des tissus musculaires. Ce processus
          est particulièrement bénéfique pour les personnes souffrant de problèmes circulatoires ou celles qui cherchent à
          dynamiser leur métabolisme.
        </div>
      </div>

      {/* Section 2: Renforcement du système immunitaire */}
      <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
        <div className="text-2xl font-bold text-primary mb-3">
          2. Renforcement du Système Immunitaire
        </div>
        <div className="text-muted-foreground text-justify leading-relaxed">
          Des études scientifiques montrent que l'exposition à l'eau froide peut augmenter la production de globules
          blancs. Ces cellules sont essentielles pour combattre les infections et les maladies. Adopter une douche froide
          régulière peut réduire les risques de rhumes fréquents et améliorer la résistance globale du corps aux agressions
          extérieures.
        </div>
      </div>

      {/* Section 3: Réduction du stress et de l'anxiété */}
      <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
        <div className="text-2xl font-bold text-primary mb-3">
          3. Réduction du Stress et de l'Anxiété
        </div>
        <div className="text-muted-foreground text-justify leading-relaxed">
          Le choc thermique causé par une douche froide déclenche une réponse naturelle du système nerveux, libérant des
          endorphines et dopant ainsi votre humeur. Cette stimulation contribue également à réduire les niveaux de
          cortisol, l'hormone du stress. Sur le long terme, cela peut améliorer votre bien-être mental et vous aider à
          mieux gérer les situations de tension.
        </div>
      </div>

      {/* Section 4: Boost de l'adrénaline */}
      <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
        <div className="text-2xl font-bold text-primary mb-3">
          4. Boost de l'Adrénaline
        </div>
        <div className="text-muted-foreground text-justify leading-relaxed">
          Une douche froide stimule immédiatement la production d'adrénaline. Cette hormone, souvent appelée "hormone de
          la survie", déclenche une montée d'énergie, améliore la vigilance et booste la concentration. En activant cette
          réponse hormonale, vous commencez votre journée avec un élan naturel, ce qui peut améliorer votre productivité
          et votre efficacité. Le surplus d'adrénaline aide également à renforcer votre tolérance face aux situations
          stressantes.
        </div>
      </div>

      {/* Section 5: Récupération musculaire améliorée */}
      <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
        <div className="text-2xl font-bold text-primary mb-3">
          5. Récupération Musculaire Améliorée
        </div>
        <div className="text-muted-foreground text-justify leading-relaxed">
          Après un effort physique intense, les muscles accumulent de l'acide lactique, causant courbatures et douleurs.
          L'eau froide aide à réduire l'inflammation et favorise une récupération plus rapide. C’est une pratique adoptée
          par de nombreux athlètes professionnels pour maintenir une performance optimale.
        </div>
      </div>

      {/* Section 6: Développement de la résilience mentale */}
      <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
        <div className="text-2xl font-bold text-primary mb-3">
          6. Développement de la Résilience Mentale
        </div>
        <div className="text-muted-foreground text-justify leading-relaxed">
          Se confronter au froid, c’est aussi sortir de sa zone de confort. Cette habitude forge votre résilience et votre
          capacité à affronter des défis quotidiens. À chaque douche froide, vous renforcez votre mentalité de dépassement
          de soi, un atout précieux pour votre épanouissement personnel et professionnel.
        </div>
      </div>

      {/* Conclusion */}
      <div className="text-center mt-6">
        <div className="text-muted-foreground text-lg">
          Les douches froides ne sont pas seulement une question de courage : elles offrent des bénéfices concrets pour le
          corps et l'esprit. En les intégrant progressivement dans votre routine, vous pourriez transformer votre vie.
        </div>
        <button className="mt-4 px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary-dark transition">
          <Link href="fdouli">Essayez dès aujourd'hui</Link>
        </button>
      </div>
    </div>
  );
};

export default ColdShower;
