import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View className="w-full h-full gap-4 m-4">
      <Text>Index</Text>
      <Link className="font-rubik-bold text-black text-3xl" href="/sign-in">
        sign in
      </Link>
      <Link href="/explore">Explore</Link>

      <Link href="/profile">profile</Link>

      <Link href="/properties/1">propeties</Link>
    </View>
  );
};

export default Index;
