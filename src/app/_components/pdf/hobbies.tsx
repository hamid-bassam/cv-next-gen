import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import { Hobby } from "../../../lib/types/struct";

const styles = StyleSheet.create({


  hobbyItem: {
    width: "48%",
    backgroundColor: "#F4F8FB",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 5,
    padding: 8,
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
    borderBottomStyle: "solid"
  },


  hobbyTitle: {
    fontSize: 12,
    fontWeight: "bold",
    // marginBottom: 4,
    color: "#2C5D8A"
  },

  hobbyText: {
    fontSize: 10,
    color: "#444",
    textAlign: "justify",
    lineHeight: 1.4,
  },


});
const HobbyItem = ({ hobby }: { hobby: Hobby }) => {
  return (
    <View style={styles.hobbyItem}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 }}>
        <Image src={hobby.iconUrl} style={{ width: 12, height: 12 }} />
        <Text style={styles.hobbyTitle}>{hobby.name}</Text>
      </View>

      <Text style={styles.hobbyText}>
        {hobby.description}
      </Text>
    </View>

  );
}

export default HobbyItem;
