import { images } from '@/constants/images';
import { useRouter } from 'expo-router';
import { Image, Text, View } from "react-native";

const index = () => {
  const router = useRouter();

  setTimeout(() => {
    // router.push('/(auth)/register')
    // router.push('/(auth)/resetPassword')
    router.push('/(tabs)/myOrder/history')
    // router.push('/(auth)/login')
    // router.push('/(onboarding)/orderForFood')
    // router.push('./welcome')
  }, 2000);

  return (
    <View className="flex-1 items-center justify-center bg-yellowBase">
      {/* Header */}
      <View className="items-center">
        <Image source={images.group} className="mb-10"  
          style={{ width: 200, height: 170 }}
          resizeMode="contain"
        />
        <Text className="text-5xl font-black uppercase text-orangeBase ">
          yum<Text className="text-white">QUICk</Text>
        </Text>
      </View>
    </View>
  );
};

// const index = () => {
//   return <Redirect href="/(tabs)" />;
// }
export default index;
