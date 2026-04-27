import { Text, View, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '@/components';
import { POPULAR_SERVICES } from '@/constants';

export default function SearchTab() {
  return (
    <Screen className="flex-1 bg-white">
      <View className="px-4 pt-4 pb-2">
        <View className="bg-[#F7F7F7] rounded-xl flex-row items-center px-3 h-12">
          <Ionicons name="search-outline" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Search for service, category..."
            placeholderTextColor="#9CA3AF"
            className="flex-1 ml-2 text-base text-gray-800"
          />
          <Ionicons name="options-outline" size={20} color="#8B5CF6" />
        </View>
      </View>

      <FlatList
        data={POPULAR_SERVICES}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, gap: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <Image source={{ uri: item.image }} className="w-full h-40" resizeMode="cover" />
            <View className="p-4">
              <View className="flex-row justify-between items-center mb-2">
                <View className="flex-row items-center">
                  <Image source={{ uri: item.avatar }} className="w-10 h-10 rounded-full mr-2" />
                  <View>
                    <Text className="text-[#0A0614] font-medium">{item.author}</Text>
                    <Text className="text-gray-400 text-xs">{item.level}</Text>
                  </View>
                </View>
                <TouchableOpacity className="w-10 h-10 rounded-full bg-[#F2F2F2] justify-center items-center">
                  <Ionicons name="heart-outline" size={20} color="#0A0614" />
                </TouchableOpacity>
              </View>
              <Text className="text-[#0A0614] font-semibold text-base mb-3">{item.title}</Text>
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center bg-[#FFF6D6] px-2 py-1 rounded-md">
                  <Ionicons name="star" size={14} color="#FACC15" />
                  <Text className="ml-1 text-xs text-[#0A0614]">{item.rating}</Text>
                </View>
                <Text className="text-gray-400">
                  From <Text className="text-[#0A0614] font-bold">${item.priceFrom}</Text>
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </Screen>
  );
}