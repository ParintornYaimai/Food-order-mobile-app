import { useRouter } from 'expo-router'
import { Icon } from 'lucide-react-native'
import React from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons'

const MenuDetailHeader = () => {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  const handleFavorite = () => {
    console.log('Favorite clicked')
  }

  return (
    <SafeAreaView className="flex-1 bg-yellowBase">
      {/* Header */}
      <View className="my-5 px-5">
        {/* Header Top Row */}
        <View className="flex-row items-center justify-between">
          {/* Left: Back + Title + Dot */}
          <View className="flex-row items-center gap-2 ">
            <Pressable onPress={handleBack}>
              <MaterialIconsIcon name="keyboard-arrow-left" size={24} color="#E95322" />
            </Pressable>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="text-2xl font-bold text-amber-950 max-w-[65%]"
            >
              Mexicon Appetizer
            </Text>
            <View className="bg-orangeBase w-2 h-2 rounded-full ml-1" />
          </View>

          {/* Right: Heart Button */}
          <Pressable
            onPress={handleFavorite}
            className="w-7 h-7 bg-orangeBase rounded-full justify-center items-center"
          >
            <EntypoIcon name="heart" size={15} color="#FFFFFF" />
          </Pressable>
        </View>

        {/* Rating */}
        <View className="self-start ml-9 rounded-3xl">
          <Text className="bg-orangeBase text-white px-2 py-0.5 rounded-3xl text-sm">
            5.0 ⭐
          </Text>
        </View>
      </View>

      {/* content */}
      <View className='flex-1 bg-white rounded-3xl'>
        <View>
          {/* Food image */}
          <View className='border border-b-orange2'>
            <View>
              <Image/>
            </View>
            <View>
              <Text>$50.00</Text>
              <View>
                <Pressable>+</Pressable>
                <Text>1</Text>
                <Pressable>-</Pressable>
              </View>
            </View>
          </View>

          {/* food detail */}
          <View>
           <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptates sed 
              debitis culpa amet ipsa necessitatibus maxime voluptas provident totam.
            </Text>
          </View> 

          {/* menu */}
          <View>
            {/* first Tab */}
            <View>
              {/* Toping name */}
              <View>
                <Text>Guacamole</Text>
              </View>
              {/* border */}
              <View></View>
              {/* Price & checkBox */}
              <View>
                <Text>$2.09</Text>
                <TextInput/>
              </View>
            </View>

          </View>
        </View>

        {/* Add to cart button */}
        <View>
          <Icon iconNode={[]}/>
          <Pressable>
            <Text>Add to Cart</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MenuDetailHeader
