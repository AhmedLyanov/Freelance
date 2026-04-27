import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '@/components';

const CHATS = [
  {
    id: 1,
    name: 'Alex Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    lastMessage: 'Hey, when can we start?',
    time: '10:24',
    unread: 2,
  },
  {
    id: 2,
    name: 'Sarah Williams',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    lastMessage: 'Thank you for your work! 🙌',
    time: 'Yesterday',
    unread: 0,
  },
  {
    id: 3,
    name: 'Michael Brown',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    lastMessage: 'Please send me the final design',
    time: 'Yesterday',
    unread: 1,
  },
  {
    id: 4,
    name: 'Emily Davis',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    lastMessage: 'Great! I will approve it.',
    time: 'Monday',
    unread: 0,
  },
];

export default function MessageTab() {
  return (
    <Screen className="flex-1 bg-white">
      <View className="px-4 pt-4 pb-2">
        <Text className="text-2xl font-bold text-[#0A0614]">Messages</Text>
      </View>

      <FlatList
        data={CHATS}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-100">
            <Image source={{ uri: item.avatar }} className="w-14 h-14 rounded-full mr-4" />
            <View className="flex-1">
              <View className="flex-row justify-between items-center">
                <Text className="text-[#0A0614] font-semibold text-base">{item.name}</Text>
                <Text className="text-gray-400 text-xs">{item.time}</Text>
              </View>
              <View className="flex-row justify-between items-center mt-1">
                <Text className="text-gray-500 text-sm flex-1 mr-2" numberOfLines={1}>
                  {item.lastMessage}
                </Text>
                {item.unread > 0 && (
                  <View className="bg-[#8B5CF6] rounded-full w-5 h-5 justify-center items-center">
                    <Text className="text-white text-xs font-semibold">{item.unread}</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </Screen>
  );
}