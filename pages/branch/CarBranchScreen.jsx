import { View, Text, TextInput, Button } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { carBranchStyles } from "./carBranchScreen.style";
import Dropdown from "../../components/dropdown/Dropdown";
import { Colors } from "../../constants/styles";

import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const DATA = [
  {
    id: 1,
    name: "Item One",
  },
  {
    id: 2,
    name: "Item Two",
  },
  {
    id: 3,
    name: "Item Three",
  },
];

const CarBranchScreen = ({ navigation, route }) => {
  const { title } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: title });
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");

  const onDropDownItemSelected = (item) => {
    setSelectedItem(item);
  };

  const scheduleNotification = () => {
    Notifications.setNotificationHandler({
      content: {
        title: "You've got mail! 📬",
        body: "Here is the notification body",
        data: { data: "goes here" },
      },
      trigger: { seconds: 5 },
    });
  };

  return (
    <View style={carBranchStyles.container}>
      <View style={carBranchStyles.inputContainer}>
        <Text style={carBranchStyles.title}>Field One</Text>
        <TextInput
          onChangeText={setFieldOne}
          value={fieldOne}
          style={carBranchStyles.input}
          keyboardType="email-address"
        />
      </View>

      <View style={carBranchStyles.inputContainer}>
        <Text style={carBranchStyles.title}>Field Two</Text>
        <TextInput
          onChangeText={setFieldTwo}
          value={fieldTwo}
          style={carBranchStyles.input}
          keyboardType="email-address"
        />
      </View>

      <View style={carBranchStyles.inputContainer}>
        <Dropdown dropDownData={DATA} onDropDownItemSelected={onDropDownItemSelected} />
      </View>

      <View>
        <Button color={Colors.primary500} title="Submit" onPress={scheduleNotification} />
      </View>
    </View>
  );
};

export default CarBranchScreen;
