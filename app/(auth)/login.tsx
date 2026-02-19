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
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={require("../../assets/images/s1.jpeg")}
      style={styles.bg}
      resizeMode="contain"
    >
      <StatusBar barStyle="light-content" />

      {/* Overlay */}
      <View style={styles.overlay} />

      {/* Back Button */}
      <TouchableOpacity style={styles.back}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.container}>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>
          Enter your details to continue your journey
        </Text>

        {/* Email */}
        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={18} color="#999" />
          <TextInput
            placeholder="Username or Email"
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

        {/* Login Button */}
        <TouchableOpacity style={{ width: "100%" }}>
          <LinearGradient
            colors={["#6A00F4", "#C77DFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.forgot}>Forgot password?</Text>
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
    backgroundColor: "rgba(0,0,0,0.55)"
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
    color: "#ddd",
    marginBottom: 30
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.92)",
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

  button: {
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#FF4D9D",
    shadowOpacity: 0.4,
    shadowRadius: 10
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16
  },

  forgot: {
    color: "#ddd",
    marginTop: 15,
    textAlign: "center"
  }
});