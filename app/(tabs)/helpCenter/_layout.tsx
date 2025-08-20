import { Stack } from 'expo-router';

export default function MenuLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="index" 
        options={{ title: 'help' }} 
      />
      <Stack.Screen 
        name="generalInformation" 
        options={{ title: 'OrderDetail' }} 
      />
      <Stack.Screen 
        name="support" 
        options={{ title: 'support' }} 
      />
    </Stack>
  );
}