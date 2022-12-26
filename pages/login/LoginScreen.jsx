import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { Colors } from "../../constants/styles";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.authContent}>
      <Text style={styles.title}>Welcome again,</Text>

      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.label}>Email id</Text>
          <TextInput style={styles.input} keyboardType="email-address" />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} keyboardType="email-address" />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          color={Colors.primary500}
          title="Login"
          onPress={() => navigation.replace("Welcome")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          color={Colors.primary500}
          title="Sign Up"
          onPress={() => navigation.replace("Signup")}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  authContent: {
    flex: 1,
    backgroundColor: Colors.error100,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: 30,
    marginVertical: 30,
  },
  inputContainer: {
    marginVertical: 8,
    marginHorizontal: 30,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    fontSize: 16,
  },
  label: {
    color: "black",
    marginBottom: 4,
  },
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
});
