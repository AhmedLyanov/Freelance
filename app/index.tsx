import { router } from "expo-router";
import { Text, View , Button} from "react-native";
import {Routes} from "@/constants/routes";
import { Screen } from "@/components";

export default function Index() {
  const goTabs = () => {
    router.push(Routes.TABBAR);
  }
  return (
    <Screen>
      <Text className="text-lime-300">Edit app/index.tsx to edit this screen.</Text>
      <Button onPress={goTabs} title="Go to Tabs" />
    </Screen>
  );
}
