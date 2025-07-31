import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Skip = () => {
  const router = useRouter()
  return (
    <Pressable onPress={()=>router.push('/(auth)/login')}>
      <View className='w-full flex flex-row justify-end items-center gap-2'>
        <Text className='text-orangeBase font-bold'>Skip</Text>
        <Icon name="keyboard-arrow-right" size={20} color="#E95322" />
      </View>
    </Pressable>
    
  )
}

export default Skip