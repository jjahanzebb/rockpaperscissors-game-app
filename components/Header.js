import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import tailwind from "twrnc";

const Header = () => {
  return (
    <Appbar.Header style={tailwind`bg-yellow-400`}>
      <Appbar.Content
        title="Rock Paper Scissor"
        style={tailwind`items-center scale-x-150	scale-y-150	`}
      ></Appbar.Content>
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({});
