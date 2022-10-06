import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RockPaperScissors from "./components/RockPaperScissors";
import tailwind from "twrnc";

export default function App() {
  return (
    <View style={tailwind`flex-1`}>
      <RockPaperScissors />
      <StatusBar style="light" backgroundColor="#6a5300" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
