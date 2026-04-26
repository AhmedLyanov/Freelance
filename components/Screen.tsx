import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, ViewStyle } from 'react-native';


interface ScreenProps{
  children: ReactNode;
  style?: ViewStyle;
  noSafeArea?: boolean;
  className?: string;
}

export default function Screen({children, style, noSafeArea, className}: ScreenProps) {
  if(noSafeArea) {
    return (
      <View style={[{flex: 1}, style]} className={className}>
        {children}
      </View>
    );
  }
  return (
    <SafeAreaView style={[{flex: 1,}, style]} className={className}>
      {children}
    </SafeAreaView>
  );

}