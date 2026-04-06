import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function Cart() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Empty State Content */}
      <View style={styles.content}>
        <Image 
          source={require('../../assets/images/furab.png')} 
          style={styles.illustration}
          resizeMode="contain"
        />
        
        <View style={styles.textGroup}>
          <Text style={styles.title}>Kamu Belom Pesan loh</Text>
          <Text style={styles.subtitle}>Yuk Pesan dulu</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 200, 
  },
  illustration: {
    width: 260, 
    height: 260,
    marginBottom: 0, 
  },
  textGroup: {
    alignItems: 'center',
    marginTop: -10, 
  },
  title: {
    fontSize: 20,
    color: '#666',
    fontWeight: '500',
    marginBottom: 4, 
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
})