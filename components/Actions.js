import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import tailwind from "twrnc";

const Actions = ({ play, canPlay }) => {
  return (
    // actions
    <View style={tailwind`h-24 flex-row justify-around items-center`}>
      {/* Rock - actionButton */}
      <TouchableOpacity
        disabled={!canPlay}
        style={tailwind`w-16 h-16 justify-center items-center bg-yellow-400 rounded-3xl`}
        onPress={() => play("r")}
      >
        <FontAwesome5 name="hand-rock" size={32} color="#6a5300" />
      </TouchableOpacity>

      {/* Paper - actionButton */}
      <TouchableOpacity
        disabled={!canPlay}
        style={tailwind`w-16 h-16 justify-center items-center bg-yellow-400 rounded-3xl`}
        onPress={() => play("p")}
      >
        <FontAwesome5 name="hand-paper" size={32} color="#6a5300" />
      </TouchableOpacity>

      {/* Scissors - actionButton */}
      <TouchableOpacity
        disabled={!canPlay}
        style={tailwind`w-16 h-16 justify-center items-center bg-yellow-400 rounded-3xl`}
        onPress={() => play("s")}
      >
        <FontAwesome5
          name="hand-scissors"
          size={32}
          color="#6a5300"
          style={tailwind``}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({});
