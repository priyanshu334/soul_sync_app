import React from "react";
import { View, StyleSheet } from "react-native";
import SwipeCard from "./SwipeCard";
import ActionButtons from "../components/ActionButtons";
import BottomNav from "../components/BottomNav";
import { Colors } from "../theme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SwipeCard />
      <ActionButtons />
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    alignItems: "center",
    paddingTop: 60,
  },
});