import { StyleSheet, Text, View, Animated, SafeAreaView } from "react-native";
import React, { useState, useRef } from "react";
import { Constants } from "expo-constants";
import tailwind from "twrnc";
import DisplayText from "./DisplayText";
import Actions from "./Actions";

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState("r");
  const [computerChoice, setComputerChoice] = useState("r");
  const [result, setResult] = useState("");
  const [canPlay, setCanPlay] = useState(true);

  // For Animation purpose
  const fadeAnimation = useRef(new Animated.Value(1)).current;

  function play(choice) {
    // There are 3 choices: r = Rock, p = Paper, s = Scissors

    const choices = "rps";
    const randomComputerChoice = Array.from(
      { 1: 1 },
      () => char[Math.floor(Math.random() * char.length)]
    );
    let resultString = "";

    if (choice === "r") {
      resultString = randomComputerChoice === "s" ? "WON" : "LOST";
    } else if (choice === "p") {
      resultString = randomComputerChoice === "r" ? "WON" : "LOST";
    } else if (choice === "s") {
      resultString = randomComputerChoice === "p" ? "WON" : "LOST";
    } else {
      resultString = "DRAW";
    }

    setUserChoice(choice);
    setComputerChoice(randomComputerChoice);

    // Wait for Animation to hide previous result
    setTimeout(() => {
      setResult(resultString);
    }, 300);

    // Previous result hidden
    // Showing new result (Fade Animation)
    Animated.sequence([
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // Animation running - action disabled
    setCanPlay(false);
    setTimeout(() => {
      setCanPlay(true);
    }, 600);
  }

  return (
    // container
    <SafeAreaView style={tailwind`flex-1 pt-6`}>
      {/* content */}
      <View style={tailwind`flex-1 mb-1 bg-slate-300`}>
        {/* result */}
        <View style={tailwind`h-24 justify-end items-center`}>
          {/* resultText */}
          <Animated.Text
            style={[tailwind`font-5xl font-bold`, { opacity: fadeAnimation }]}
          >
            {result}
          </Animated.Text>
        </View>

        {/* screen */}
        <View style={tailwind`flex-1 flex-row `}>
          {!result ? (
            // readyText
            <Text style={tailwind`-mt-12`}>Let's Play!</Text>
          ) : (
            <DisplayText
              userChoice={userChoice}
              computerChoice={computerChoice}
            />
          )}
        </View>

        <Actions play={play} canPlay={canPlay} />
      </View>
    </SafeAreaView>
  );
};

export default RockPaperScissors;

const styles = StyleSheet.create({});
