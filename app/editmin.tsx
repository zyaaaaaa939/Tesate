import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import FormInput from '@/components/FormInput'
import ButtonPrimary from '@/components/ButtonPrimary'

export default function EditMin() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={styles.welcome}>Sore, Cak Awih</Text>
          
          <View style={styles.categoryRow}>
            <TouchableOpacity style={[styles.chip, styles.activeChip]}>
              <Text style={styles.activeText}>Makanan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>Minuman</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>Snack</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formSection}>
          <FormInput placeholder="Masukan nama makanan" />
          <FormInput placeholder="Masukan Harga" />
          <FormInput placeholder="Masukan Stock" />
          <FormInput placeholder="Masukan waktu masak (mins)" />
        </View>

        <View style={styles.buttonSection}>
          <ButtonPrimary 
            title="Masukin Menu!" 
            color="#5DBB63" 
            onPress={() => console.log("Menu ditambahkan")}
          />
          
          <View style={{ height: 20 }} />

          <ButtonPrimary 
            title="Liat Pesenan" 
            color="#333333" 
            onPress={() => router.push('/mainadmin')} 
          />
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
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 30,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 25,
  },
  categoryRow: {
    flexDirection: 'row',
    gap: 12,
  },
  chip: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#E8F5E9',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  activeChip: {
    backgroundColor: '#5DBB63',
  },
  chipText: {
    color: '#333',
    fontSize: 14,
  },
  activeText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  formSection: {
    marginBottom: 20,
  },
  buttonSection: {
    marginTop: 10,
  }
})