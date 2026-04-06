import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { router } from 'expo-router'
import ButtonPrimary from '../components/ButtonPrimary'
import FormInput from '../components/FormInput'

export default function Regis() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Gambar Sate */}
        <Image 
          source={require('../assets/images/itesate.png')} 
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.title}>Daftar dulu</Text>
          <Text style={styles.subtitle}>
            Daftarin akun kamu disini, isi yang{"\n"}lengkap ya data yang aku minta, jangan{"\n"}sampe ngga!
          </Text>
        </View>

        {/* Form Input Section */}
        <View style={styles.formSection}>
          <FormInput placeholder="Nama Lengkap" />
          <FormInput placeholder="Email" />
          <FormInput placeholder="Password" secureTextEntry={true} />
          <FormInput placeholder="Konfirmasi Password" secureTextEntry={true} />
        </View>

        {/* Button Section */}
        <View style={styles.buttonSection}>
          <ButtonPrimary 
            title="Daftar!" 
            color="#6BC26D" 
            onPress={() => router.push("/login")} 
          />
        </View>

        {/* Footer Link */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Sudah Punya Akun? </Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.linkText}>Masuk</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 35,
    alignItems: 'center',
    paddingTop: 30, 
    paddingBottom: 30,
  },
  logo: {
    width: 180,
    height: 100,
    marginBottom: 15,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  formSection: {
    width: '100%',
    marginBottom: 20,
  },
  buttonSection: {
    width: '100%',
    marginBottom: 15,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  footerText: {
    fontSize: 14,
    color: '#000',
  },
  linkText: {
    fontSize: 14,
    color: '#4A49E2',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
})