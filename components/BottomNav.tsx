import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme";

export default function BottomNav() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="home" size={24} color={Colors.dark.primary} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="search" size={24} color={Colors.dark.iconInactive} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="film" size={24} color={Colors.dark.iconInactive} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="chatbubble" size={24} color={Colors.dark.iconInactive} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="person" size={24} color={Colors.dark.iconInactive} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    backgroundColor: Colors.dark.surface,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: Colors.dark.border,
  },
});