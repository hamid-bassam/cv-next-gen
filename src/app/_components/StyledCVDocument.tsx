import { Document, Font, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { CVData } from "../../lib/types/struct";
import ampoule from "./icons/ampoule.png";
import skills from "./icons/competences-generales.png";
import hobby from "./icons/hobby.png";
import certif from "./icons/lobtention-du-diplome.png";
import qrcode from "./icons/qr-portfolio.png";
import xp from "./icons/xp.png";
import HobbyItem from "./pdf/hobbies";
import SideProjectCard from "./pdf/sideProject";

const safeSplitText = (text: string, maxWordsPerLine = 13) => {
  if (!text) return [];
  const words = text.split(' ');
  const lines = [];

  for (let i = 0; i < words.length; i += maxWordsPerLine) {
    lines.push(words.slice(i, i + maxWordsPerLine).join(' '));
  }

  return lines;
};
const normalizeToArray = (input: string | string[]): string[] => {
  return Array.isArray(input) ? input : [input];
};

Font.register({
  family: 'Tinos',
  fonts: [
    { src: '/fonts/Tinos-Regular.ttf' },
    { src: '/fonts/Tinos-Bold.ttf', fontWeight: 'bold' },
    { src: '/fonts/Tinos-Italic.ttf', fontStyle: 'italic' },
    { src: '/fonts/Tinos-BoldItalic.ttf', fontWeight: 'bold', fontStyle: 'italic' },
  ],
});

Font.register({
  family: 'Times',
  fonts: [
    { src: '/fonts/times new roman.ttf' },
    { src: '/fonts/times new roman bold.ttf', fontWeight: 'bold' },
    { src: '/fonts/times new roman italic.ttf', fontStyle: 'italic' },
    { src: '/fonts/times new roman bold italic.ttf', fontWeight: 'bold', fontStyle: 'italic' }
  ]
})

// Styles améliorés avec icônes et meilleure lisibilité
const styles = StyleSheet.create({

  // partie side 
  sideCard: {
    flexDirection: "column", // Important : colonne pour le titre et description
    borderRadius: 6,
    backgroundColor: "#F7F9FB",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    padding: 10,
    marginTop: 10,
    gap: 8,
  },

  sideText: {
    width: "50%",
    paddingRight: 8,
  },

  mobileImageRow: {
    flexDirection: 'row',
    gap: 2,
    height: 100, // définit la hauteur commune des 3 images
  },

  projectScreenshotMobile: {
    flex: 1,
    objectFit: "contain",
    borderRadius: 3,
  },

  sideImage: {
    width: "50%",
    justifyContent: "flex-start",
    alignItems: "center", // ou "flex-start" selon le rendu souhaité
    height: 100, // définit la hauteur commune des 3 images
    borderColor: "#000",
  },
  projectScreenshot: {
    // width: "100%",
    // height: "100%",
    objectFit: "contain",
    // aspectRatio: 14 / 9, // ou à adapter selon ta maquette
    borderRadius: 3,
    // borderWidth: 1,
    // borderColor: "#AAA",
  },



  // partie principale  
  page: {
    padding: 50, fontFamily: "Tinos",
    // color: "#1A1A1A",
  },
  header: {
    fontSize: 32, textAlign: "center", marginBottom: 10, fontWeight: "bold",
    // color: "#111" 
    color: "#1F1F1F", // noir doux
  },
  subHeader: { fontSize: 14, textAlign: "center", marginBottom: 20, color: "#444", }, // paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#ccc", borderBottomStyle: "solid", paddingTop: 10, borderTopWidth: 1, borderTopColor: "#ccc", borderTopStyle: "solid" 
  position: { fontSize: 14, textAlign: "center", marginBottom: 20, color: "#111" },
  section: { marginBottom: 20, marginTop: 0 }, //, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#ccc", borderBottomStyle: "solid"
  jobSection: {
    marginBottom: 20, padding: 10,
    //  backgroundColor: "#F9F9F9",
    // backgroundColor: "#FAFAFA",
    backgroundColor: "#F4F8FB",
    borderRadius: 5, paddingBottom: 10, borderBottomWidth: 1
    ,
    // borderBottomColor: "#ccc",
    borderBottomColor: "#DDDDDD",
    borderBottomStyle: "solid"
  },
  titleContainer: {
    flexDirection: "row", alignItems: "center", marginBottom: 5, paddingTop: 5, paddingBottom: 5, borderBottomWidth: 1,
    //  borderBottomColor: "#ccc",
    borderBottomColor: "#DDDDDD",
    borderBottomStyle: "solid"
  },
  titleIcon: { width: 16, height: 16, marginRight: 5, fill: "#DCE6F2" },
  title: {
    fontSize: 18, fontWeight: "bold", textTransform: "uppercase",
    // color: "#2C5D8A", // accent bleu tech sobre
    color: "#25476A"
  },
  text: { fontSize: 12, marginBottom: 5, color: "#333" },
  listItem: {
    fontSize: 11, marginLeft: 14,
    //  color: "#555",
    color: "#444",
    paddingTop: 2
  },
  jobTitle: {
    fontSize: 14, fontWeight: "bold",
    // color: "#222",
    color: "#2C5D8A",
    marginBottom: 5
  },
  company: {
    fontSize: 12, fontStyle: "italic",
    // color: "#666",
    color: "#555555",
  },
  date: {
    fontSize: 12,
    // color: "#888",
    color: "#777777",
    marginBottom: 5
  },
  summary: {
    fontSize: 13, textAlign: "justify", marginBottom: 0, color: "#333", lineHeight: 1.5,
    // flexWrap: 'wrap',         // Ajoute ça
    // wordBreak: 'break-word',  // Important pour éviter le crash sur les mots longs
    // maxWidth: '100%',
  },
  skillCategory: {
    fontSize: 12, fontWeight: "bold",
    //  color: "#111",

    color: "#2C5D8A",
    // paddingBottom: 5
    paddingBottom: 3,
    borderLeftWidth: 2,
    borderLeftColor: "#DCE6F2",
    paddingLeft: 6,
    marginLeft: 1,
  },
  skillText: { fontSize: 10, marginBottom: 3, color: "#333" },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  skillContainer: { flexDirection: "row", justifyContent: "space-between" }, // , borderBottomWidth: 1, borderBottomColor: "#ddd", paddingBottom: 10 
  skillColumn: { width: "48%" },
  separator: {
    width: 1,
    // backgroundColor: "#ccc",
    backgroundColor: "#DDDDDD",
    height: "90%", marginTop: "2%"
  },


  // hobbies 
  hobbyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 8,
  },

  hobbyItem: {
    width: "48%",
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 5,
    padding: 8,
  },

  hobbyTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#2C5D8A"
  },

  hobbyText: {
    fontSize: 10,
    color: "#444",
    textAlign: "justify",
    lineHeight: 1.4,
  },
  // end hobbies  

});

const textStyle = (text: string) => {
  return (text.replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\u00A0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim());
}

const StyledCVDocument = ({ data }: { data: CVData }) => {
  const rawSummary = data.summary || '';

  const cleanSummary: string[] = normalizeToArray(rawSummary).map(element =>
    element
      .replace(/[’‘]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\u00A0/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );

  const quote = data.endQuote || '';
  const cleanQuote: string[] = normalizeToArray(quote).map(element =>
    element
      .replace(/[’‘]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\u00A0/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            position: 'absolute',
            right: 40,
            top: 40,
            width: 60,
            height: 60,
          }}
        >
          <Image src={qrcode.src} style={{ width: '100%', height: '100%' }} />
        </View>
        {/* Header */}
        <Text style={styles.header}>{data.name}</Text>
        <Text style={styles.position}>{data.position} | {data.location}</Text>
        <Text style={styles.subHeader}>{data.email} | {data.phone} {data.linkedin ? `| ${data.linkedin}` : ""}</Text>
        <View style={{ marginBottom: 10, fontWeight: 'bold', fontStyle: "italic" }} >

          {cleanSummary &&



            // cleanSummary.flatMap((text, i) =>
            //   safeSplitText(text).map((line, j) => (
            //     <Text key={`${i}-${j}`} style={styles.summary}>{line}</Text>
            //   ))
            // )

            cleanSummary.map((text, i) => (
              <Text key={i} style={styles.summary}>{textStyle(text)}</Text>
            ))
          }
        </View>


        {/* Compétences */}
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <Image src={skills.src} style={styles.titleIcon} />


            <Text style={styles.title}> Compétences Clés</Text>
          </View>
          <View style={styles.skillContainer}>
            <View style={styles.skillColumn}>
              {data.skills.slice(0, Math.ceil((data.skills.length / 2) - 1)).map((section, index) => (
                <View key={index} style={{ marginBottom: 5 }}>
                  <Text style={styles.skillCategory}>{section.category}</Text>
                  {section.skills.map((skill, i) => (
                    <Text key={i} style={[styles.skillText, ...(skill.emphasis === "bold" ? [styles.bold] : []), ...(skill.emphasis === "italic" ? [styles.italic] : [])]}>
                      • {skill.name}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
            <View style={styles.separator} />
            <View style={styles.skillColumn}>
              {data.skills.slice(Math.ceil((data.skills.length / 2))).map((section, index) => (
                <View key={index} style={{ marginBottom: 5 }}>
                  <Text style={styles.skillCategory}>{section.category}</Text>
                  {section.skills.map((skill, i) => (
                    <Text key={i} style={[styles.skillText, ...(skill.emphasis === "bold" ? [styles.bold] : []), ...(skill.emphasis === "italic" ? [styles.italic] : [])]}>
                      • {skill.name}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>
        {/* Expérience */}
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            {/* <Image src={carriere.src} style={styles.titleIcon} /> */}
            <Image src={xp.src} style={styles.titleIcon} />

            <Text style={styles.title}>Expériences Professionnelles</Text>
          </View>
          {data.experiences.map((job, index) => (
            <View key={index} style={[styles.jobSection, job.layout ?? {}]}>
              <Text style={styles.jobTitle}>{job.position} - {job.company}</Text>
              {job.project && <Text style={styles.text}> Projet : {job.project}</Text>}
              <Text style={styles.date}>{job.dates} {job.location ? `| ${job.location}` : ""}</Text>
              {job.description && job.description.map((desc, i) => (
                <Text key={`desc-${i}`} style={styles.text}>{desc}</Text>
              ))}
              <View >
                {job.tasks.map((task, i) => (
                  <Text key={i} style={styles.listItem}>• {task}</Text>
                ))}
              </View>
              {job.result && job.result.length > 0 && (
                <View style={{ marginTop: 5, marginBottom: 4 }}>
                  <Text style={[styles.text, styles.bold, { marginTop: 5 }]}>Résultats :</Text>
                  {job.result.map((res, i) => (
                    <Text key={`result-${i}`} style={[styles.text, styles.italic]}>→ {res}</Text>
                  ))}
                </View>
              )}
              {job.technologies && <Text style={[styles.text, ...[styles.italic]]}>Technologies & outils : {job.technologies.join(", ")}</Text>}
              {job.reference && <Text style={[styles.text, ...[styles.italic]]}>Référence : {job.reference.map((ref) => `${ref.name} - (${ref.role})`).join(", ")}</Text>}
            </View>
          ))}
        </View>

        {/* Formation & Certifications */}
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <Image src={certif.src} style={styles.titleIcon} />
            <Text style={styles.title}> Formation & Certifications</Text>
          </View>
          {data.education.map((edu, index) => (
            <Text key={index} style={styles.text}>{edu.degree} - {edu.school} ({edu.year})</Text>
          ))}
          {data.certifications.map((certif, index) => (
            <Text key={index} style={styles.text}>{certif.title} ({certif.year}) - {certif.issuer}</Text>
          ))}

        </View>

        {/* Side */}
        {data.showSide && data.projects && data.projects.length > 0 && (


          <View style={styles.section}>
            <View style={styles.titleContainer}>
              <Image src={ampoule.src} style={styles.titleIcon} />
              <Text style={styles.title}>Initiatives produit</Text>
            </View>

            {data.projects.map((project, index) => (
              <SideProjectCard key={index} project={project} />
            ))}
          </View>
        )}

        {/* Side Project – Baback */}

        {/* Hobbies */}
        {/* Hobbies & Explorations Personnelles */}
        {/* <View style={styles.section}>
          <View style={styles.titleContainer}>
            <Image src={skills.src} style={styles.titleIcon} />
            <Text style={styles.title}>Hobbies & Explorations Personnelles</Text>
          </View>
          <View style={styles.hobbyGrid}>
            <View style={styles.hobbyItem}>
              <Text style={styles.hobbyTitle}>🏐 Compétiteur sportif</Text>
              <Text style={styles.hobbyText}>Champion du Maroc de volleyball (cadet), marathonien dès l’adolescence, et ascension du Toubkal à 11 ans.</Text>
            </View>
            <View style={styles.hobbyItem}>
              <Text style={styles.hobbyTitle}>🧠 Jeux de l’esprit</Text>
              <Text style={styles.hobbyText}>Multiples titres régionaux en scrabble, passionné par la stratégie, les patterns, et la précision mentale.</Text>
            </View>
            <View style={styles.hobbyItem}>
              <Text style={styles.hobbyTitle}>🎮 Créatif & gamer</Text>
              <Text style={styles.hobbyText}>Création de side-projects tech autour du gaming et de l&apos;UX narrative (HbalTrbah Gaming, interfaces immersives).</Text>
            </View>
            <View style={styles.hobbyItem}>
              <Text style={styles.hobbyTitle}>🌍 Aventurier curieux</Text>
              <Text style={styles.hobbyText}>Recherche de dépassement, exploration personnelle et résilience dans l&apos;effort ou la création.</Text>
            </View>
          </View>
        </View> */}

        {/* Hobbies & Explorations Personnelles */}
        {data.showHobbies && data.hobbies && data.hobbies.length > 0 && (
          <View style={styles.section}>
            <View style={styles.titleContainer}>
              <Image src={hobby.src} style={styles.titleIcon} />
              <Text style={styles.title}>Hobbies & Explorations Personnelles</Text>
            </View>
            <View style={styles.hobbyGrid}>
              {data.hobbies.map((hobby, index) => (
                <HobbyItem key={`hobby-${index}`} hobby={hobby} />
              ))}


            </View>
          </View>
        )
        }

        <View style={{ marginBottom: 10, fontWeight: 'bold', fontStyle: "italic" }} >
          {cleanQuote &&
            cleanQuote.map((text, i) => (
              <Text key={i} style={styles.summary}>{textStyle(text)}</Text>
            ))
          }
        </View>



        <View fixed style={{ position: 'absolute', right: 50, textAlign: "right", bottom: 30, width: '100%', fontSize: 9, color: '#AAA' }}>
          {/* textAlign: 'center' */}
          <Text>Hamid Bassam — CV 2025</Text>
        </View>
      </Page>
    </Document >
  );
};

export default StyledCVDocument;
