import { Document, Font, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { CVData } from "../../lib/types/struct";
import carriere from "./icons/carriere.png";
import skills from "./icons/life-skills.png";
import certif from "./icons/qualite.png";




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
  page: { padding: 50, fontFamily: "Tinos" },
  header: { fontSize: 32, textAlign: "center", marginBottom: 10, fontWeight: "bold", color: "#111" },
  subHeader: { fontSize: 14, textAlign: "center", marginBottom: 20, color: "#444", }, // paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#ccc", borderBottomStyle: "solid", paddingTop: 10, borderTopWidth: 1, borderTopColor: "#ccc", borderTopStyle: "solid" 
  position: { fontSize: 14, textAlign: "center", marginBottom: 20, color: "#111" },
  section: { marginBottom: 15 }, //, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#ccc", borderBottomStyle: "solid"
  jobSection: { marginBottom: 20, padding: 10, backgroundColor: "#F9F9F9", borderRadius: 5, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#ccc", borderBottomStyle: "solid" },
  titleContainer: { flexDirection: "row", alignItems: "center", marginBottom: 10, paddingTop: 5, paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: "#ccc", borderBottomStyle: "solid" },
  titleIcon: { width: 16, height: 16, marginRight: 5 },
  title: { fontSize: 18, fontWeight: "bold", color: "#111", textTransform: "uppercase" },
  text: { fontSize: 12, marginBottom: 5, color: "#333" },
  listItem: { fontSize: 12, marginLeft: 15, color: "#555", paddingTop: 2 },
  jobTitle: { fontSize: 14, fontWeight: "bold", color: "#222", marginBottom: 5 },
  company: { fontSize: 12, fontStyle: "italic", color: "#666" },
  date: { fontSize: 12, color: "#888", marginBottom: 5 },
  summary: { fontSize: 13, textAlign: "justify", marginBottom: 20, color: "#333", lineHeight: 1.5 },
  skillCategory: { fontSize: 12, fontWeight: "bold", color: "#111", paddingBottom: 5 },
  skillText: { fontSize: 10, marginBottom: 3, color: "#333" },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  skillContainer: { flexDirection: "row", justifyContent: "space-between" }, // , borderBottomWidth: 1, borderBottomColor: "#ddd", paddingBottom: 10 
  skillColumn: { width: "48%" },
  separator: { width: 1, backgroundColor: "#ccc", height: "90%", marginTop: "5%" },


});

const StyledCVDocument = ({ data }: { data: CVData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <Text style={styles.header}>{data.name}</Text>
      <Text style={styles.position}>{data.position} | {data.location}</Text>
      <Text style={styles.subHeader}>{data.email} | {data.phone} {data.linkedin ? `| ${data.linkedin}` : ""}</Text>
      {data.summary && <Text style={styles.summary}>{data.summary}</Text>}

      {/* Expérience */}
      <View style={styles.section}>
        <View style={styles.titleContainer}>
          <Image src={carriere.src} style={styles.titleIcon} />
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
    </Page>
  </Document >
);


export default StyledCVDocument;
