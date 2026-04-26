import { Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { Screen } from '@/components';
import { SERVICE_CATEGORIES, POPULAR_SERVICES } from '@/constants';
import { Ionicons } from '@expo/vector-icons';

export default function HomeTab() {
  return (
    <Screen>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className="bg-[#8B5CF6] px-4 pt-4 pb-6">
          <Text className="text-white font-light">Hello, Adam 👋</Text>

          <View className="flex-row justify-between items-start mt-1">
            <Text numberOfLines={2} className="text-white text-3xl font-bold flex-1 mr-4">
              Let’s find best{"\n"}talent for you
            </Text>

            <TouchableOpacity className="w-12 h-12 rounded-full border border-white justify-center items-center">
              <Ionicons name="notifications-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View className="bg-white rounded-xl flex-row items-center px-3 h-12 mt-5">
            <Ionicons name="search-outline" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Search service"
              placeholderTextColor="#9CA3AF"
              className="flex-1 ml-2 text-base text-gray-800"
            />
          </View>
        </View>

        {/* 🔹 CONTENT */}
        <View className="p-4 pt-6">

          {/* 🔸 SERVICE CATEGORY */}
          <View className="flex-row justify-between mb-4">
            <Text className="text-[#0A0614] font-medium">Service Category</Text>
            <Text className="text-[#8B5CF6] font-medium">See All</Text>
          </View>

          <View className="flex-row flex-wrap justify-between">
            {SERVICE_CATEGORIES.map((category) => (
              <View key={category.id} className="w-[22%] items-center mb-4">

                <TouchableOpacity className="w-full aspect-square bg-[#F7F7F7] rounded-2xl justify-center items-center">
                  <Ionicons name={category.icon} size={26} color="#0A0614" />
                </TouchableOpacity>

                <Text className="text-[#0A0614] text-xs mt-2 text-center">
                  {category.title}
                </Text>

              </View>
            ))}
          </View>

          {/* 🔸 POPULAR SERVICE */}
          <View className="mt-4">
            <View className="flex-row justify-between mb-4">
              <Text className="text-[#0A0614] font-medium">Popular Service</Text>
              <Text className="text-[#8B5CF6] font-medium">See All</Text>
            </View>

            {POPULAR_SERVICES.map((item) => (
              <View
                key={item.id}
                className="bg-white rounded-2xl mb-4 overflow-hidden"
              >
                {/* Image */}
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-40"
                  resizeMode="cover"
                />

                {/* Content */}
                <View className="p-4">
                  {/* Author + Like */}
                  <View className="flex-row justify-between items-center mb-2">
                    <View className="flex-row items-center">
                      <Image
                        source={{ uri: item.avatar }}
                        className="w-10 h-10 rounded-full mr-2"
                      />
                      <View>
                        <Text className="text-[#0A0614] font-medium">
                          {item.author}
                        </Text>
                        <Text className="text-gray-400 text-xs">
                          {item.level}
                        </Text>
                      </View>
                    </View>

                    <TouchableOpacity className="w-10 h-10 rounded-full bg-[#F2F2F2] justify-center items-center">
                      <Ionicons name="heart-outline" size={20} color="#0A0614" />
                    </TouchableOpacity>
                  </View>

                  {/* Title */}
                  <Text className="text-[#0A0614] font-semibold text-base mb-3">
                    {item.title}
                  </Text>

                  {/* Bottom */}
                  <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center bg-[#FFF6D6] px-2 py-1 rounded-md">
                      <Ionicons name="star" size={14} color="#FACC15" />
                      <Text className="ml-1 text-xs text-[#0A0614]">
                        {item.rating}
                      </Text>
                    </View>

                    <Text className="text-gray-400">
                      From{" "}
                      <Text className="text-[#0A0614] font-bold">
                        ${item.priceFrom}
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

        </View>
      </ScrollView>
    </Screen>
  );
}