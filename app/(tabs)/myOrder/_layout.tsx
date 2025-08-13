import { Stack } from 'expo-router';

export default function MenuLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="index" 
        options={{ title: 'myOrder' }} 
      />
      <Stack.Screen 
        name="[orderId]" 
        options={{ title: 'OrderDetail' }} 
      />
      <Stack.Screen 
        name="history" 
        options={{ title: 'history' }} 
      />
      <Stack.Screen 
        name="orderDelivered" 
        options={{ title: 'orderDelivered' }} 
      />
    </Stack>
  );
}