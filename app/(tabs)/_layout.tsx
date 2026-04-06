import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5DBB63', 
        tabBarInactiveTintColor: '#C0C0C0',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          paddingBottom: 8,
        },
      }}>
      
      {/* 1. HOME */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
          ),
        }}
      />
      
      {/* 2. INFORMATION */}
      <Tabs.Screen
        name="info"
        options={{
          title: 'Information',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "chatbubbles" : "chatbubbles-outline"} size={24} color={color} />
          ),
        }}
      />
      
      {/* 3. CART (FLOATING BUTTON CENTER) */}
      <Tabs.Screen
        name="cart"
        options={{
          title: '', 
          tabBarIcon: ({ focused }) => (
            <View style={styles.floatingButton}>
              <Ionicons 
                name={focused ? "cart" : "cart-outline"} 
                size={28} 
                color="#FFFFFF" 
              />
            </View>
          ),
        }}
      />
      
      {/* 4. NOTIFICATION */}
      <Tabs.Screen
        name="notif"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "notifications" : "notifications-outline"} size={24} color={color} />
          ),
        }}
      />
      
      {/* 5. PROFILE */}
      <Tabs.Screen
        name="akun"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "person-circle" : "person-circle-outline"} size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    height: 70, 
    borderTopWidth: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 }, 
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  floatingButton: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#5DBB63',
    justifyContent: 'center',
    alignItems: 'center',
    top: -25, 
    borderWidth: 4, 
    borderColor: '#FFFFFF',
    elevation: 5,
    shadowColor: '#5DBB63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  }
});