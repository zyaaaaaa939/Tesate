import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonPrimary from '../components/ButtonPrimary'
import FormInput from '../components/FormInput'
import { router } from 'expo-router'

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Gambar Sate */}
        <Image 
          source={require('../assets/images/itesate.png')} 
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Header Text */}
        <View style={styles.headerSection}>
          <Text style={styles.title}>Login dulu kali ah</Text>
          <Text style={styles.subtitle}>
            Masuk pake akun kamu yang udah{"\n"}didaftarin ya!
          </Text>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
          <FormInput placeholder="Email" />
          <FormInput placeholder="Password" secureTextEntry={true} />
          
          {/* Row: Ingatin Akunku & Lupa Password */}
          <View style={styles.row}>
            <TouchableOpacity 
              style={styles.checkboxContainer} 
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View style={[styles.checkbox, rememberMe && styles.checkboxActive]} />
              <Text style={styles.rememberText}>Ingatin akunku</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.forgotText}>Lupa password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Button Section */}
        <View style={styles.buttonSection}>
          <ButtonPrimary 
            title="Masuk!" 
            color="#6BC26D" 
            onPress={() => router.push("/(tabs)")} 
          />
          <View style={{ height: 12 }} />
          <ButtonPrimary 
            title="Masuk Admin!" 
            color="#478C4A" 
            onPress={() => router.push("/mainadmin")} 
          />
        </View>

        {/* Footer Link */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Belom Punya Akun? </Text>
          <TouchableOpacity>
            <Text style={styles.linkText} onPress={() => router.push("/regis")}>
              Daftar buru!
            </Text>
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
    paddingTop: 40,
    paddingBottom: 20,
  },
  logo: {
    width: 200,
    height: 120,
    marginBottom: 20,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 30,
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
    lineHeight: 22,
  },
  formSection: {
    width: '100%',
    marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    backgroundColor: '#D1D1D1',
    marginRight: 8,
  },
  checkboxActive: {
    backgroundColor: '#6BC26D',
    borderColor: '#6BC26D',
  },
  rememberText: {
    fontSize: 14,
    color: '#000',
  },
  forgotText: {
    fontSize: 14,
    color: '#4A49E2',
    fontWeight: 'bold',
  },
  buttonSection: {
    width: '100%',
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#000',
  },
  linkText: {
    fontSize: 14,
    color: '#4A49E2',
    textDecorationLine: 'underline',
  },
})