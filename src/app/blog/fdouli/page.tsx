import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-primary to-primary-dark text-white">
      {/* Animation de cercle */}
      <div className="relative w-40 h-40 mb-8">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full animate-spin-slow"></div>
        <div className="absolute top-4 left-4 w-32 h-32 bg-card rounded-full flex items-center justify-center shadow-lg">
          <span className="text-xl font-bold text-primary">😜</span>
        </div>
      </div>

      {/* Message personnalisé */}
      <div className="text-center space-y-4">
        <div className="text-3xl font-extrabold">SI Aw LALA LFDOULIA  ?</div>
        <div className="text-lg text-card">
          (MALK FDOULI(A) ??)
        </div>
        <button
          className="mt-6 px-6 py-3 bg-card text-primary font-semibold rounded-lg shadow hover:bg-white hover:text-primary-dark transition"

        >
          <Link href="cold-shower" passHref  >Retour en sécurité 🛁</Link>

        </button>
      </div>
    </div>
  );
};


