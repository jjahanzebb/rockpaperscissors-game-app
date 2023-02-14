import { Text, View, Animated, SafeAreaView } from "react-native";
import React, { useState, useRef } from "react";
import { Constants } from "expo-constants";
import tailwind from "twrnc";
import DisplayText from "./ResultText";
import Actions from "./Actions";
import Header from "./Header";

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
    const randomComputerChoice =
      choices[Math.floor(Math.random() * choices.length)];

    let resultString = "";

    if (choice === "r") {
      console.log(randomComputerChoice);
      resultString =
        randomComputerChoice == "r"
          ? "DRAW"
          : randomComputerChoice == "s"
          ? "WON"
          : "LOST";
    } else if (choice === "p") {
      console.log(randomComputerChoice);
      resultString =
        randomComputerChoice == "p"
          ? "DRAW"
          : randomComputerChoice == "r"
          ? "WON"
          : "LOST";
    } else if (choice === "s") {
      console.log(randomComputerChoice);
      resultString =
        randomComputerChoice == "s"
          ? "DRAW"
          : randomComputerChoice == "p"
          ? "WON"
          : "LOST";
    } else {
      resultString = "INVALID";
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
      <Header />
      {/* content */}
      <View style={tailwind`flex-1 pb-8 bg-slate-700`}>
        {/* result */}
        <View style={tailwind`h-24 justify-end items-center`}>
          {/* resultText */}
          <Animated.Text
            style={[tailwind`text-5xl font-bold`, { opacity: fadeAnimation }]}
          >
            {result}
          </Animated.Text>
        </View>

        {/* screen */}
        <View style={tailwind`flex-1 flex-row `}>
          {!result ? (
            // readyText
            <Text
              style={tailwind`-mt-12 self-center text-center w-full text-5xl font-bold `}
            >
              Let's Play!
            </Text>
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
