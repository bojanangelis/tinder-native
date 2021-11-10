import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreeenn</Text>
      <Button
        title="Go to chat Screen"
        onPress={() => navigation.navigate("Chat")}
      />
    </View>
  );
};

export default HomeScreen;
