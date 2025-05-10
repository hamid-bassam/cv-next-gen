import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import { Project } from "../../../lib/types/struct";


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
  right: { width: "50%", justifyContent: "center", alignItems: "center", borderRadius: 3 },
  // border: "1px solid black",
  desktopImage: {
    // width: "100%",
    objectFit: "cover",
    borderRadius: 3,
    // height: "100%",
    // aspectRatio: 14 / 9,
  },
  mobileImage: {
    flex: 1,
    objectFit: "contain",
    borderRadius: 3,
  },

  text: { fontSize: 12, color: "#333", marginBottom: 5 },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
});

const SideProjectCard = ({ project }: { project: Project }) => {
  return (
    <View style={[styles.container, project.layout ?? {}]}>
      {!project.splitAll && (
        <View>
          <Text style={[styles.text, styles.bold, { color: "#2C5D8A" }]}>{project.title}</Text>
          <Text style={styles.text}>{project.description}</Text>
        </View>
      )
      }

      <View style={styles.row}>
        {project.invert && project.images?.[0] && (
          <View style={[styles.right, project.right ?? {}]}>
            <Image src={project.images[0].src} style={[styles.desktopImage, project.right ? { height: "100%" } : {}]} />
          </View>
        )}
        <View style={[styles.left, project.invert ? { marginLeft: 4 } : {}]}>
          {project.splitAll && (
            <View>
              <Text style={[styles.text, styles.bold, { color: "#2C5D8A" }]}>{project.title}</Text>
              <Text style={styles.text}>{project.description}</Text>
            </View>
          )
          }
          {project.features && project.features.length > 0 && (
            <View>
              <Text style={[styles.text, styles.bold]}>Fonctionnalités :</Text>
              {project.features.map((f, i) => (
                <Text key={i} style={[styles.text, styles.italic]}>→ {f}</Text>
              ))}
            </View>
          )}
          {project.technologies && (
            <Text style={[styles.text, styles.italic]}>
              Stack : {project.technologies.join(", ")}
            </Text>
          )}
          {project.images && project.images.length > 1 && (
            <View style={{ flexDirection: "row", gap: 2 }}>
              {project.images.slice(1, 4).map((img, i) => (
                <Image key={i} src={img.src} style={styles.mobileImage} />
              ))}
            </View>
          )}
        </View>
        {project.images?.[0] && !project.invert && (
          <View style={[styles.right, project.right ?? {}]}>
            <Image src={project.images[0].src} style={[styles.desktopImage, project.right ? { height: "100%" } : {}]} />
          </View>
        )}
      </View>
      {project.impact && project.impact.length > 0 && (
        <View>
          <Text style={[styles.text, styles.bold]}>Impact :</Text>
          {project.impact.map((f, i) => (
            <Text key={i} style={[styles.text, styles.italic]}>→ {f}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default SideProjectCard;
