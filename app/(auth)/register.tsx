import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GradientButton from "../components/GradientButton";
import { COLORS } from "../theme/colors";

export default function register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={require("../assets/bg.png")} 
      style={styles.bg}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.overlay} />

      {/* Back Button */}
      <TouchableOpacity style={styles.back}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Begin your Lovitche journey today
        </Text>

        {/* Name */}
        <View style={styles.inputBox}>
          <Ionicons name="person-outline" size={18} color="#999" />
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Email */}
        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={18} color="#999" />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password */}
        <View style={styles.inputBox}>
          <Ionicons name="lock-closed-outline" size={18} color="#999" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Button */}
        <GradientButton title="Register" onPress={() => {}} />

        {/* Login Link */}
        <TouchableOpacity>
          <Text style={styles.loginText}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center"
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.overlay
  },

  back: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10
  },

  container: {
    paddingHorizontal: 30,
    marginTop: 120
  },

  title: {
    fontSize: 28,
    color: "white",
    fontWeight: "700",
    marginBottom: 6
  },

  subtitle: {
    color: COLORS.textSecondary,
    marginBottom: 30
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.inputBg,
    borderRadius: 30,
    paddingHorizontal: 16,
    marginBottom: 15,
    height: 55
  },

  input: {
    flex: 1,
    marginLeft: 10,
    color: "#333"
  },

  loginText: {
    color: "#ddd",
    marginTop: 18,
    textAlign: "center"
  }
});