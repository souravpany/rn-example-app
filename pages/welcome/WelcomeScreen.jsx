import { StyleSheet, Text, View, TouchableOpacity, SectionList } from "react-native";
import { Colors } from "../../constants/styles";

const DATA = [
  {
    title: "MPV",
    data: ["VELOZ", "INNOVA ZENIX", "SIENTA", "CALYA", "AVANZA"],
  },
  {
    title: "SUV",
    data: ["RAIZE", "RUSH", "COROLLA CROSS", "FORTUNER 4X2", "FORTUNER 4X4", "C-HR"],
  },
  {
    title: "HATCHBACK",
    data: ["YARIS", "NEW AGYA"],
  },
  {
    title: "SEDAN",
    data: ["COROLLA ALTIS"],
  },
  {
    title: "COMMERCIAL",
    data: ["HIACE", "NEW HILUX D CAB"],
  },
];

const Item = ({ title }) => (
  <TouchableOpacity style={styles.item} onPress={() => sectionItemClick(title)}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const sectionItemClick = (title) => {
  console.log(title);
};

const WelcomeScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.welcomeTitle}>Welcome!</Text>

      <SectionList
        contentContainerStyle={{ paddingHorizontal: 10 }}
        stickySectionHeadersEnabled={false}
        sections={DATA}
        renderSectionHeader={({ section }) => <Text style={styles.header}>{section.title}</Text>}
        renderItem={({ item }) => {
          return <Item title={item} />;
        }}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 16,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  header: {
    width: "100%",
    color: "white",
    fontWeight: "bold",
    padding: 10,
    backgroundColor: Colors.primary500,
    fontSize: 25,
    marginTop: 6,
    marginBottom: 6,
  },
  item: {
    height: 45,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#6B728E",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 6,
    marginBottom: 6,
  },
  title: {
    fontSize: 20,
  },
});
