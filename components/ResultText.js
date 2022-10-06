import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import tailwind from "twrnc";

const icons = ["hand-rock", "hand-paper", "hand-scissors"];

const ResultText = ({ userChoice, computerChoice }) => {
  return (
    <>
      {/* column 1 */}
      <View style={tailwind`flex-1 justify-center items-center`}>
        {/* leftIcon */}
        <FontAwesome5
          name={
            userChoice === "r"
              ? icons[0]
              : userChoice === "p"
              ? icons[1]
              : icons[2]
          }
          size={64}
          color="#f9d835"
          solid
          style={tailwind`${userChoice === "s" ? "" : ""}`}
        />

        {/* playerName */}
        <Text style={tailwind`p-4 rounded-lg bg-gray-500 text-base mt-4`}>
          You
        </Text>
      </View>

      {/* column 2 */}
      <View style={tailwind`flex-1 justify-center items-center`}>
        {/* rightIcon */}
        <FontAwesome5
          name={
            computerChoice === "r"
              ? icons[0]
              : computerChoice === "p"
              ? icons[1]
              : icons[2]
          }
          size={64}
          color="#f9d835"
          solid
          style={tailwind`${userChoice === "s" ? "" : ""}`}
        />

        {/* playerName */}
        <Text style={tailwind`p-4 rounded-lg bg-gray-500 text-base mt-4`}>
          Computer
        </Text>
      </View>
    </>
  );
};

export default ResultText;

const styles = StyleSheet.create({});
