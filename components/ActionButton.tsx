import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme";

export default function ActionButtons() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.dislike]}>
        <Ionicons name="close" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.like]}>
        <Ionicons name="heart" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.message]}>
        <Ionicons name="chatbubble" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 24,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  dislike: {
    backgroundColor: "#2A2A2F",
  },
  like: {
    backgroundColor: Colors.dark.primary,
  },
  message: {
    backgroundColor: "#3A3A40",
  },
});