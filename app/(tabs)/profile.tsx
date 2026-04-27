import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '@/components';

export default function ProfileTab() {
  return (
    <Screen className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-[#8B5CF6] pt-8 pb-12 items-center">
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            className="w-24 h-24 rounded-full border-4 border-white mb-3"
          />
          <Text className="text-white text-xl font-bold">Adam Parker</Text>
          <Text className="text-white/80 text-sm">adam.parker@example.com</Text>
        </View>
        <View className="flex-row justify-around px-4 -mt-6 mb-6">
          <View className="bg-white rounded-2xl shadow-sm px-6 py-3 items-center">
            <Text className="text-[#0A0614] font-bold text-xl">12</Text>
            <Text className="text-gray-500 text-xs">Orders</Text>
          </View>
          <View className="bg-white rounded-2xl shadow-sm px-6 py-3 items-center">
            <Text className="text-[#0A0614] font-bold text-xl">4.8</Text>
            <Text className="text-gray-500 text-xs">Rating</Text>
          </View>
          <View className="bg-white rounded-2xl shadow-sm px-6 py-3 items-center">
            <Text className="text-[#0A0614] font-bold text-xl">3</Text>
            <Text className="text-gray-500 text-xs">Reviews</Text>
          </View>
        </View>
        <View className="px-4 gap-4">
          <MenuItem icon="person-outline" title="Personal Information" />
          <MenuItem icon="card-outline" title="Payment Methods" />
          <MenuItem icon="location-outline" title="Addresses" />
          <MenuItem icon="notifications-outline" title="Notifications" />
          <MenuItem icon="lock-closed-outline" title="Privacy & Security" />
          <MenuItem icon="help-circle-outline" title="Help Center" />
        </View>

        <TouchableOpacity className="flex-row items-center justify-center py-4 mt-6 mb-8 mx-4 bg-red-50 rounded-xl">
          <Ionicons name="log-out-outline" size={20} color="#EF4444" />
          <Text className="text-red-500 font-medium ml-2">Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
}

const MenuItem = ({ icon, title }: { icon: any; title: string }) => (
  <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-100">
    <View className="flex-row items-center">
      <Ionicons name={icon} size={24} color="#8B5CF6" />
      <Text className="text-[#0A0614] text-base ml-4">{title}</Text>
    </View>
    <Ionicons name="chevron-forward-outline" size={20} color="#9CA3AF" />
  </TouchableOpacity>
);