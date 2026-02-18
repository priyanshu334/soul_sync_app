import { Colors } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function SwipeCard() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" }}
        style={styles.image}
      />

      {/* Gradient Overlay */}
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={styles.overlay}
      />

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.name}>Sarah J, 25</Text>
        <Text style={styles.location}>Washington, USA</Text>

        <View style={styles.tags}>
          {["Food", "Travel", "Books"].map((item) => (
            <View key={item} style={styles.tag}>
              <Text style={styles.tagText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 32,
    height: 520,
    borderRadius: 28,
    overflow: "hidden",
    backgroundColor: Colors.dark.surface,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    height: "50%",
    width: "100%",
  },
  info: {
    position: "absolute",
    bottom: 24,
    left: 20,
  },
  name: {
    color: Colors.dark.textPrimary,
    fontSize: 26,
    fontWeight: "700",
  },
  location: {
    color: Colors.dark.textSecondary,
    marginTop: 4,
    marginBottom: 10,
  },
  tags: {
    flexDirection: "row",
  },
  tag: {
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  tagText: {
    color: "#fff",
    fontSize: 12,
  },
});