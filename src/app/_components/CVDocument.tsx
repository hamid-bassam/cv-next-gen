import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { CVData } from "../../lib/types/struct";


// Styles
const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: "Helvetica" },
  header: { fontSize: 24, textAlign: "center", marginBottom: 15, fontWeight: "bold" },
  section: { marginBottom: 15, paddingBottom: 10, borderBottom: "1px solid #ddd" },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 8, color: "#2E86C1" },
  text: { fontSize: 12, marginBottom: 5 },
  listItem: { fontSize: 12, marginLeft: 15 },
});

// Composant PDF
const CVDocument = ({ data }: { data: CVData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <Text style={styles.header}>{data.name}</Text>
      <Text style={styles.text}>{data.position} - {data.location}</Text>
      <Text style={styles.text}>{data.email} | {data.phone}</Text>

      {/* Expérience */}
      <View style={styles.section}>
        <Text style={styles.title}>Expérience Professionnelle</Text>
        {data.experiences.map((job, index) => (
          <View key={index}>
            <Text style={styles.text}>{job.position} - {job.company}</Text>
            <Text style={styles.text}>{job.dates}</Text>
            {job.tasks.map((task, i) => (
              <Text key={i} style={styles.listItem}>• {task}</Text>
            ))}
          </View>
        ))}
      </View>

      {/* Compétences */}
      <View style={styles.section}>
        <Text style={styles.title}>Compétences</Text>
        {data.skills.map((skill, index) => (
          <Text key={index} style={styles.listItem}>• {skill}</Text>
        ))}
      </View>

      {/* Outils */}
      <View style={styles.section}>
        <Text style={styles.title}>Outils & Technologies</Text>
        {data.tools.map((tool, index) => (
          <Text key={index} style={styles.listItem}>• {tool}</Text>
        ))}
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.title}>Certifications</Text>
        {data.certifications.map((certif, index) => (
          <Text key={index} style={styles.listItem}>• {certif}</Text>
        ))}
      </View>

      {/* Formation */}
      <View style={styles.section}>
        <Text style={styles.title}>Formation</Text>
        {data.education.map((edu, index) => (
          <Text key={index} style={styles.text}>{edu.degree} - {edu.school} ({edu.year})</Text>
        ))}
      </View>

      {/* Réglementation */}
      <View style={styles.section}>
        <Text style={styles.title}>Connaissances Réglementaires</Text>
        {data.regulations.map((reg, index) => (
          <Text key={index} style={styles.listItem}>• {reg}</Text>
        ))}
      </View>
    </Page>
  </Document>
);

export default CVDocument;
