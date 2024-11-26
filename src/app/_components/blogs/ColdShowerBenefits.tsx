
const ColdShowerBenefits = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-card shadow-lg rounded-lg mt-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-primary">Les Bienfaits de la Douche Froide</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Boostez votre santé et votre bien-être avec une routine simple mais puissante.
        </p>
      </div>

      <section className="space-y-6">
        <div className="bg-card border border-border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-primary">1. Amélioration de la Circulation Sanguine</h2>
          <p className="text-muted-foreground mt-2">
            L'eau froide stimule la circulation sanguine, améliorant l'oxygénation des tissus et renforçant la santé
            cardiovasculaire.
          </p>
        </div>

        <div className="bg-card border border-border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-primary">2. Renforcement du Système Immunitaire</h2>
          <p className="text-muted-foreground mt-2">
            Les douches froides augmentent la production de globules blancs, renforçant ainsi votre système immunitaire et
            réduisant le risque de maladies.
          </p>
        </div>

        <div className="bg-card border border-border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-primary">3. Réduction du Stress et de l'Anxiété</h2>
          <p className="text-muted-foreground mt-2">
            Le choc de l'eau froide déclenche la libération d'endorphines, améliorant votre humeur tout en réduisant les
            niveaux de stress.
          </p>
        </div>

        <div className="bg-card border border-border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-primary">4. Amélioration de la Récupération Musculaire</h2>
          <p className="text-muted-foreground mt-2">
            Idéale après l'entraînement, la douche froide aide à réduire l'inflammation et à soulager les douleurs
            musculaires.
          </p>
        </div>

        <div className="bg-card border border-border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-primary">5. Stimulation de la Confiance et de la Résilience</h2>
          <p className="text-muted-foreground mt-2">
            En surmontant l'inconfort d'une douche froide, vous développez une mentalité plus résiliente face aux défis de
            la vie.
          </p>
        </div>
      </section>

      <div className="text-center mt-8">
        <p className="text-muted-foreground">
          Intégrer les douches froides à votre routine peut transformer votre santé physique et mentale. Pourquoi ne pas
          commencer dès aujourd'hui ?
        </p>
        <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition">
          Essayez Maintenant
        </button>
      </div>
    </div>
  );
};

export default ColdShowerBenefits;
