import { COLORS } from "@/constants/theme";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";

export default function ChangePassword() {
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <ImageBackground
      source={require("../../assets/images/s1.jpeg")}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Text style={styles.title}>Create New Password</Text>
        <Text style={styles.subtitle}>
          Choose a strong and secure password
        </Text>

        <TextInput
          secureTextEntry
          placeholder="New Password"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={pass}
          onChangeText={setPass}
        />

        <TextInput
          secureTextEntry
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={confirm}
          onChangeText={setConfirm}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update Password</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: COLORS.overlay },
  container: { flex: 1, justifyContent: "center", padding: 30 },
  title: { fontSize: 28, color: "#fff", fontWeight: "700" },
  subtitle: { color: COLORS.textSecondary, marginBottom: 30 },

  input: {
    backgroundColor: COLORS.inputBg,
    height: 55,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 15
  },

  button: {
    backgroundColor: COLORS.primaryStart,
    padding: 15,
    borderRadius: 30
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "600" }
});