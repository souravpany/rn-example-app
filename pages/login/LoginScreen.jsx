import { View, Text, Button, TextInput } from "react-native";
import { Colors } from "../../constants/styles";
import { loginStyles } from "./loginScreen.style";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={loginStyles.authContent}>
      <Text style={loginStyles.title}>Welcome again,</Text>

      <View style={loginStyles.inputContainer}>
        <View>
          <Text style={loginStyles.label}>Email id</Text>
          <TextInput style={loginStyles.input} keyboardType="email-address" />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={loginStyles.label}>Password</Text>
          <TextInput style={loginStyles.input} keyboardType="email-address" />
        </View>
      </View>

      <View style={loginStyles.buttonContainer}>
        <Button
          color={Colors.primary500}
          title="Login"
          onPress={() => navigation.replace("Welcome")}
        />
      </View>

      <View style={loginStyles.buttonContainer}>
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
