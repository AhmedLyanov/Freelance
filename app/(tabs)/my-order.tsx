import { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '@/components';

const ACTIVE_ORDERS = [
  {
    id: 1,
    service: 'Logo Design',
    provider: 'Alex Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    price: 120,
    status: 'In Progress',
    date: 'May 12, 2025',
  },
  {
    id: 2,
    service: 'SEO Optimization',
    provider: 'Sarah Williams',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    price: 350,
    status: 'Pending',
    date: 'May 10, 2025',
  },
];

const COMPLETED_ORDERS = [
  {
    id: 3,
    service: 'Content Writing',
    provider: 'Michael Brown',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    price: 80,
    status: 'Completed',
    date: 'April 28, 2025',
  },
  {
    id: 4,
    service: 'Web Development',
    provider: 'Emily Davis',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    price: 500,
    status: 'Completed',
    date: 'April 20, 2025',
  },
];

export default function MyOrderTab() {
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');
  const data = activeTab === 'active' ? ACTIVE_ORDERS : COMPLETED_ORDERS;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return '#F59E0B';
      case 'Pending': return '#EF4444';
      default: return '#10B981';
    }
  };

  return (
    <Screen className="flex-1 bg-white">
      <View className="px-4 pt-4 pb-2">
        <Text className="text-2xl font-bold text-[#0A0614]">My Orders</Text>
      </View>
      <View className="flex-row px-4 gap-6 border-b border-gray-200">
        <TouchableOpacity onPress={() => setActiveTab('active')} className="py-3">
          <Text className={`text-base font-medium ${activeTab === 'active' ? 'text-[#8B5CF6] border-b-2 border-[#8B5CF6]' : 'text-gray-400'}`}>
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('completed')} className="py-3">
          <Text className={`text-base font-medium ${activeTab === 'completed' ? 'text-[#8B5CF6] border-b-2 border-[#8B5CF6]' : 'text-gray-400'}`}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, gap: 12 }}
        renderItem={({ item }) => (
          <View className="bg-[#F7F7F7] rounded-2xl p-4 flex-row items-center">
            <Image source={{ uri: item.avatar }} className="w-12 h-12 rounded-full mr-4" />
            <View className="flex-1">
              <Text className="text-[#0A0614] font-semibold">{item.service}</Text>
              <Text className="text-gray-500 text-sm">{item.provider}</Text>
              <View className="flex-row justify-between items-center mt-2">
                <Text className="text-[#0A0614] font-bold">${item.price}</Text>
                <Text className="text-xs" style={{ color: getStatusColor(item.status) }}>{item.status}</Text>
              </View>
              <Text className="text-gray-400 text-xs mt-1">{item.date}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#9CA3AF" />
          </View>
        )}
      />
    </Screen>
  );
}