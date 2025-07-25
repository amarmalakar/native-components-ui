import { useTheme } from "@react-navigation/native";
import { theme } from "../_confings/Colors";

const useColors = () => {
  const { colors } = useTheme() as typeof theme;
  return colors;
};

export default useColors;