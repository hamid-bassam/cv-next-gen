import tfc from "@/app/_components/assets/img/capture tfa calendar.png";
import tfi from "@/app/_components/assets/img/capture tfa insight.png";
import tfm from "@/app/_components/assets/img/capture time forge tel.png";
import tfl from "@/app/_components/assets/img/capture time forge.png";
import passif from "@/app/_components/assets/img/passive-time-screen.png";
import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import { Project } from "../../../lib/types/struct";




const project: Project = {
  title: "Time Tracking SaaS",
  description: "Personal tools developed to improve my efficiency, autonomy, and time awareness.",
  images: [
    { src: tfl.src, alt: "Time Tracking", display: "desktop" },
    { src: tfm.src, alt: "Time Tracking Mobile", display: "mobile" },
    { src: tfc.src, alt: "Time Tracking Calendar", display: "desktop" },
    { src: tfi.src, alt: "Time Tracking Insight", display: "desktop" },
    { src: passif.src, alt: "Time Tracking Passive Time", display: "desktop" }
  ],
  tasks: [
    "Built a personal time tracking tool: free-form input inspired by journaling (14:00 @timeTracker $brainstorming).",
    "Structured the data and visualized it using Python scripts and custom charts.",
    "Set up an automated weekly review to analyze active/passive time, refine daily forecasts, and prioritize goals.",
    "Scoped a professional-grade version (targeted at entrepreneurs): daily reporting, goal tracking, insights (mocked), and lean statistics — with a clear focus on real needs before public relaunch."
  ],
  technologies: ["Python (personal scripts)", "Next.js", "Prisma", "PostgreSQL", "TailwindCSS", "Zustand", "Vercel"],
  impact: [
    "Stepped back from feature overload to refocus on product value.",
    "Lean mindset applied to my own projects.",
    "Improved daily planning and forecasting.",
    "Stronger personal discipline.",
    "Reduced passive time by over 50%."
  ]
}



const project_fr: Project =
{
  title: "Time Tracking SaaS",
  description:
    "Outils personnels développés pour améliorer mon efficacité, mon autonomie et ma conscience du temps.",
  images: [
    { src: tfl.src, alt: "Time Tracking", display: "desktop" },
    { src: tfm.src, alt: "Time Tracking Mobile", display: "mobile" },
    { src: tfc.src, alt: "Time Tracking Calendar", display: "desktop" },
    { src: tfi.src, alt: "Time Tracking Insight", display: "desktop" },
    { src: passif.src, alt: "Time Tracking Passive Time", display: "desktop" },
  ],
  tasks: [
    "Développement d’un outil de time tracking personnel : format libre inspiré du journaling (14:00 @timeTracker $brainstorming)",
    "transformation en data structurée, visualisation via scripts Python + charts.",
    "Mise en place d’un bilan hebdo automatisé pour analyser mon temps actif/passif, affiner mes projections journalières et prioriser mes objectifs.",
    "Cadrage fonctionnel complet d’un outil d’usage professionnel (entrepreneurs) : daily reporting, objectifs, insights (mocké pour l’instant), stats… avec une volonté claire de recentrage sur le besoin réel avant relancement public.",

  ],
  technologies: ["Python (scripts perso)", "Next.js", "Prisma", "PostgreSQL", "TailwindCSS", "Zustand", "Vercel"],

  impact: ["Prise de recul sur la surcharge fonctionnelle", "Recentrage produit, logique lean appliquée à mes propres projets.",
    "Meilleure projection quotidienne",
    // "conscience du temps vital caché",
    "Discipline personnelle renforcée",
    "Réduction du temps passif de + 50%",],
  // layout: { marginBottom: 30 },
  // right: { height: 300, },
}



const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#F7F9FB",
    marginTop: 10,
    gap: 8,
  },
  row: {
    flexDirection: "row",
    gap: 4,
  },
  left: { width: "50%", paddingRight: 8 },
  right: { width: "50%", justifyContent: "flex-start", alignItems: "flex-start", borderRadius: 3 },
  desktopImage: {
    width: "100%",
    height: 120,
    objectFit: "cover",
    borderRadius: 3,
  },
  mobileImagesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 4,
  },
  mobileImage: {
    width: "32%",         // ≈ 3 images avec petits espacements
    height: 150,
    objectFit: "contain", // ou "cover" selon rendu préféré
    borderRadius: 3,
  },
  text: { fontSize: 12, color: "#333", marginBottom: 5 },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
});

const TimeTrackingCard = () => {
  return (
    <View style={[styles.container, project.layout ?? {}]}>
      {/* Titre + Description */}
      <Text style={[styles.text, styles.bold, { color: "#2C5D8A" }]}>{project.title}</Text>
      <Text style={styles.text}>{project.description}</Text>

      {/* 1ère vue */}
      <View style={styles.row}>
        {/* Tâches à gauche */}
        <View style={[styles.left]}>
          {project.tasks?.map((task, i) => (
            <Text key={i} style={[styles.text, styles.italic]}>
              → {task}
            </Text>
          ))}
        </View>

        {/* Image desktop + images mobiles */}
        <View style={[styles.right]}>
          {project.images?.[0] && (
            <Image src={project.images[0].src} style={styles.desktopImage} />
          )}
          {project.images!.length > 1 && (
            <View style={styles.mobileImagesRow}>
              {project.images!.slice(1, 4).map((img, i) => (
                <Image key={i} src={img.src} style={styles.mobileImage} />
              ))}
            </View>
          )}
        </View>
      </View>

      {/* 2e vue : image desktop à gauche, impact à droite */}
      {project.impact && (
        <View style={[styles.row, { marginTop: 8 }]}>
          <View style={styles.left}>
            <Image src={passif.src} style={styles.desktopImage} />
          </View>
          <View style={styles.right}>
            <Text style={[styles.text, styles.bold]}>Impact :</Text>
            {project.impact.map((item, i) => (
              <Text key={i} style={styles.text}>→ {item}</Text>
            ))}
          </View>
        </View>
      )}

      {/* Stack technique */}
      {project.technologies && (
        <Text style={[styles.text, styles.italic, { marginTop: 6 }]}>
          Stack : {project.technologies.join(", ")}
        </Text>
      )}
    </View>
  );
};



export default TimeTrackingCard;
