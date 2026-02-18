import ActionButtons from "@/components/ActionButton";
import BottomNav from "@/components/BottomNav";
import SwipeCard from "@/components/SwipeCard";
import { Colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

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