import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { router } from 'expo-router' 
import ButtonPrimary from '../components/ButtonPrimary' 

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContent}>
        
        {/* Gambar Sate */}
        <Image 
          source={require('../assets/images/itesate.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        
        {/* Teks Judul & Deskripsi */}
        <View style={styles.textSection}>
          <Text style={styles.title}>Pet Cepet, Sen{"\n"}Pesen!</Text>
          <Text style={styles.subtitle}>
            Pengantaran ke rumah, dan{"\n"}reservasi online untuk sate Cak Awih
          </Text>
        </View>

        {/* Tombol & Link Login */}
        <View style={styles.actionSection}>
          <ButtonPrimary 
            title="Pesan Sekarang!" 
            color="#5DBB63" 
            onPress={() => router.push("/regis")} 
          />
          
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Sudah Punya Akun? </Text>
            <TouchableOpacity onPress={() => router.push("/login")}> 
              <Text style={styles.linkText}>Masuk</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logo: {
    width: '100%',
    height: 220,
    marginBottom: 10,
  },
  textSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    lineHeight: 40,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    lineHeight: 22,
  },
  actionSection: {
    width: '100%',
    alignItems: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  loginText: {
    color: '#000000',
    fontSize: 14,
  },
  linkText: {
    color: '#4A49E2',
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  }
})