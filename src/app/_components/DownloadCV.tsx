"use client"
import { Document, Page, PDFDownloadLink, StyleSheet, Text, View } from "@react-pdf/renderer";
// import dynamic from "next/dynamic";

// const PDFDownloadLink = dynamic(
//   () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   },
// );
// Styles
const styles = StyleSheet.create({
  page: { padding: 30, fontFamily: "Helvetica" },
  header: { fontSize: 20, textAlign: "center", marginBottom: 10 },
  section: { marginBottom: 10 },
  title: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
  text: { fontSize: 12, marginBottom: 3 },
  listItem: { fontSize: 12, marginLeft: 10 },
});

// Composant CV
export interface CVData {
  name: string;
  position: string;
  location: string;
  email: string;
  phone: string;
  experience: { position: string; company: string; dates: string; tasks: string[] }[];
  skills: string[];
  education: { degree: string; school: string; year: string }[];
}

const CVDocument = ({ data }: { data: CVData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>{data.name}</Text>
      <Text style={styles.text}>{data.position} - {data.location}</Text>
      <Text style={styles.text}>{data.email} | {data.phone}</Text>

      <View style={styles.section}>
        <Text style={styles.title}>Expérience Professionnelle</Text>
        {data.experience.map((job, index) => (
          <View key={index}>
            <Text style={styles.text}>{job.position} - {job.company}</Text>
            <Text style={styles.text}>{job.dates}</Text>
            {job.tasks.map((task, i) => (
              <Text key={i} style={styles.listItem}>• {task}</Text>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Compétences</Text>
        {data.skills.map((skill, index) => (
          <Text key={index} style={styles.listItem}>• {skill}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Formation</Text>
        {data.education.map((edu, index) => (
          <Text key={index} style={styles.text}>{edu.degree} - {edu.school} ({edu.year})</Text>
        ))}
      </View>
    </Page>
  </Document>
);

const DownloadCV = ({ data }: { data: CVData }) => (
  <div>
    <PDFDownloadLink document={<CVDocument data={data} />} fileName="CV_BA.pdf">
      {({ loading }) =>
        loading ? "Génération en cours..." : <button className="px-4 py-2 bg-blue-500 text-white rounded">Télécharger le CV</button>
      }
    </PDFDownloadLink>
  </div>
);

export default DownloadCV;
