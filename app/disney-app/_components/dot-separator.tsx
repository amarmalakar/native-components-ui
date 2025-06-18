import { View } from "react-native";
import React from "react";
import SPACE from "../_configs/SPACE";
import Colors from "../_configs/Colors";

const { SPACING: Spacing } = SPACE;

const DotSeparator: React.FC = () => {
  return (
    <View
      style={{
        height: Spacing / 2,
        width: Spacing / 2,
        backgroundColor: Colors.secondary,
        marginHorizontal: Spacing / 2,
        borderRadius: Spacing / 4,
      }}
    />
  );
};

export default DotSeparator;
