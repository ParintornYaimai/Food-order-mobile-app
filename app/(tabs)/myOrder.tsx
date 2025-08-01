import Header from '@/components/Header'
import React from 'react'
import { View } from 'react-native'

const myOrder = () => {
  return (
    <View className='flex-1 bg-yellowBase'>
      {/* Header */}
      <View className='mt-10 px-5'>
        <Header/>
      </View>
    </View>
  )
}

export default myOrder