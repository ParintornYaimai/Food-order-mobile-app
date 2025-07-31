import React from 'react'
import { View } from 'react-native'

const SlideIndicator = ({activeIndex = 0}) => {
  return (
    <View className='flex flex-row items-center justify-center gap-2'>
      {[0, 1, 2].map((i) => (
        <View
          key={i}
          className={`w-7 h-1 rounded-full ${i === activeIndex ? 'bg-orangeBase' : 'bg-yellow2'}`}
        />
      ))}
    </View>
  )
}
export default SlideIndicator