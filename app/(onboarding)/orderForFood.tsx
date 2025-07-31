import Skip from '@/components/onbording/Skip'
import Slide from '@/components/onbording/Slide'
import { images } from '@/constants/images'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Pressable, SafeAreaView, Text, View } from 'react-native'

const orderForFood = () => {
  const router = useRouter ()
  return (
    <SafeAreaView className='flex-1 bg-yellowBase'>
      <ImageBackground source={images.orderFoodBackground} className='flex-1 justify-between items-center mt-10'>
        <View className='w-full flex pt-5 pr-5'>
          <Skip/>
        </View>
        <View className='w-full max-h-[338px] bg-white flex justify-center items-center rounded-2xl'>
          <View className='size-full flex items-center justify-around'>
            <View className='items-center gap-5'>
              <Image source={images.orderForFoodIcon} resizeMode='contain' accessibilityLabel="Order food icon"/>
              <Text className='font-black text-3xl text-orangeBase text-center'>Order For Food</Text>
              <Text className='text-center'>Lorem, ipsum dolor sit amet consectetur {'\n'}Nisi facilis iusto sint laborum laudantium {'\n'}expedita molestiae quam velit incidunt saepe.</Text>
              {/* Tab slide & button */}
              <View className='mb-10 mt-5 gap-10'>
                <Slide />
                <Pressable className="bg-orangeBase rounded-full px-14 py-2" accessibilityLabel="Next step button"
                  onPress={()=>router.push('/easyPayment')}  
                >
                  <Text className="text-white font-bold">Next</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
export default orderForFood