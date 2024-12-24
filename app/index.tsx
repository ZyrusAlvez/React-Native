import { Text, View } from "react-native";
import { verifyInstallation } from 'nativewind';
import "../global.css"

export default function Index() {
  verifyInstallation();
  return (
    <View >
      <Text className="text-red-950 underline">Edit app/index.tsx to edit this screen.</Text>
      <Text>thanginamo</Text>
    </View>
  );
}
