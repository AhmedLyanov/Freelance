import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { SERVICE_CATEGORIES } from '@/constants';
import { Ionicons } from '@expo/vector-icons';

export default function AllCategoriesScreen() {
    return (
        <View className="flex-1 bg-white">
            <View className="flex-row items-center px-4 pt-12 pb-4 bg-white border-b border-gray-100">
                <TouchableOpacity onPress={() => router.back()} className="mr-4">
                    <Ionicons name="arrow-back" size={24} color="#0A0614" />
                </TouchableOpacity>
                <Text className="text-xl font-semibold text-[#0A0614]">All Categories</Text>
            </View>
            <ScrollView className="flex-1">
                {SERVICE_CATEGORIES.map((category, index) => (
                    <TouchableOpacity
                        key={category.id}
                        className="flex-row justify-between items-center px-4 py-4 border-b border-gray-100"
                        onPress={() => {

                        }}
                    >
                        <View className="flex-row items-center">
                            <View className="w-12 h-12 bg-[#F7F7F7] rounded-xl justify-center items-center mr-3">
                                <Ionicons name={category.icon} size={24} color="#0A0614" />
                            </View>
                            <View>
                                <Text className="text-base text-[#0A0614] font-medium">
                                    {category.title}
                                </Text>
                                <Text className="text-base text-[#0A0614] font-light">
                                    {category.description}
                                </Text>
                            </View>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={20} color="#9CA3AF" />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}