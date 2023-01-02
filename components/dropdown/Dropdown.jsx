import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { dropDownStyles } from "./dropDown.style";

const Dropdown = ({
  dropDownData = [],
  onDropDownItemSelected = () => {},
  placeHolder = "Select an options",
}) => {
  const [showOption, setShowOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const onSelectedItem = (item) => {
    setShowOption(false);
    setSelectedOption(item);
    onDropDownItemSelected(item);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowOption(!showOption)}
        activeOpacity={0.8}
        style={dropDownStyles.dropDownStyle}
      >
        <Text style={dropDownStyles.item}>
          {selectedOption ? selectedOption.name : placeHolder}
        </Text>
      </TouchableOpacity>
      {showOption && (
        <View style={dropDownStyles.dropDownContainer}>
          {dropDownData.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => onSelectedItem(item)}
                key={item.id}
                style={[
                  {
                    backgroundColor: selectedOption?.id == item.id ? "rgba(0, 0, 0, 0.2)" : "white",
                  },
                  dropDownStyles.selectedItemStyle,
                ]}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default Dropdown;
