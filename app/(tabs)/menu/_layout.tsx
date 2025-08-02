import { Stack } from 'expo-router';

export default function MenuLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="index" 
        options={{ title: 'Menu' }} 
      />
      <Stack.Screen 
        name="[menuId]" 
        options={{ title: 'Menu Detail' }} 
      />
    </Stack>
  );
}