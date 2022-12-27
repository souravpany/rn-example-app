import { Text, View, TouchableOpacity, SectionList } from "react-native";
import { welcomeStyles } from "./welcomeScreen.style";

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
  <TouchableOpacity style={welcomeStyles.item} onPress={() => sectionItemClick(title)}>
    <Text style={welcomeStyles.title}>{title}</Text>
  </TouchableOpacity>
);

const sectionItemClick = (title) => {
  console.log(title);
};

const WelcomeScreen = () => {
  return (
    <View style={welcomeStyles.rootContainer}>
      <Text style={welcomeStyles.welcomeTitle}>Welcome!</Text>

      <SectionList
        contentContainerStyle={{ paddingHorizontal: 10 }}
        stickySectionHeadersEnabled={false}
        sections={DATA}
        renderSectionHeader={({ section }) => (
          <Text style={welcomeStyles.header}>{section.title}</Text>
        )}
        renderItem={({ item }) => {
          return <Item title={item} />;
        }}
      />
    </View>
  );
};

export default WelcomeScreen;
