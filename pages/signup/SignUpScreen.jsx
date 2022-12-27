import { View, Text, Button, TextInput } from "react-native";
import { Colors } from "../../constants/styles";
import { signUpStyles } from "./signUp.style";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={signUpStyles.authContent}>
      <Text style={signUpStyles.title}>Welcome</Text>

      <View style={signUpStyles.inputContainer}>
        <View>
          <Text style={signUpStyles.label}>Email Address</Text>
          <TextInput style={signUpStyles.input} keyboardType="email-address" />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={signUpStyles.label}>Confirm Email Address</Text>
          <TextInput style={signUpStyles.input} keyboardType="email-address" />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={signUpStyles.label}>Password</Text>
          <TextInput style={signUpStyles.input} keyboardType="email-address" />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={signUpStyles.label}>Confirm Password</Text>
          <TextInput style={signUpStyles.input} keyboardType="email-address" />
        </View>
      </View>

      <View style={signUpStyles.buttonContainer}>
        <Button
          color={Colors.primary500}
          title="Sign Up"
          onPress={() => navigation.replace("Login")}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
