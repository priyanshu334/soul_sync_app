import { COLORS } from "@/constants/theme";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default function OTP() {
  const [code, setCode] = useState("");

  return (
    <ImageBackground
      source={require("../../assets/images/s1.jpeg")}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Text style={styles.title}>Verify Code</Text>
        <Text style={styles.subtitle}>
          Enter the code sent to your email
        </Text>

        <TextInput
          value={code}
          onChangeText={setCode}
          keyboardType="number-pad"
          maxLength={6}
          style={styles.otpInput}
          placeholder="------"
          placeholderTextColor="#aaa"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Resend Code</Text>
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
  subtitle: { color: COLORS.textSecondary, marginBottom: 40 },

  otpInput: {
    backgroundColor: COLORS.inputBg,
    height: 60,
    borderRadius: 20,
    fontSize: 26,
    textAlign: "center",
    letterSpacing: 12,
    marginBottom: 20
  },

  button: {
    backgroundColor: COLORS.primaryStart,
    padding: 15,
    borderRadius: 30
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "600" },
  link: { color: "#ddd", textAlign: "center", marginTop: 15 }
});