import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import CardAdmin from '@/components/CardAdmin'
import ButtonPrimary from '@/components/ButtonPrimary'

export default function MainAdmin() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      // Simulasi ambil data
      const response = await fetch('https://dummyjson.com/products?limit=10')
      const data = await response.json()
      
      if (!data.products || data.products.length === 0) {
        setError(true)
      } else {
        setProducts(data.products)
        setError(false)
      }
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  // Header Section (Judul & Kategori)
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.welcome}>Sore, Cak Awih</Text>
      <View style={styles.categoryRow}>
        <View style={[styles.chip, styles.activeChip]}><Text style={styles.activeText}>Makanan</Text></View>
        <View style={styles.chip}><Text style={styles.chipText}>Minuman</Text></View>
        <View style={styles.chip}><Text style={styles.chipText}>Snack</Text></View>
      </View>
    </View>
  )

  // Empty State (Gambar furab.png kalau error/kosong)
  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Image 
        source={require('../assets/images/furab.png')} 
        style={styles.emptyImage} 
        resizeMode="contain" 
      />
      <Text style={styles.emptyText}>Kamu Belom Pesan loh</Text>
      <Text style={styles.emptySubtitle}>Yuk Pesan dulu</Text>
    </View>
  )

  if (loading) return (
    <View style={styles.center}><ActivityIndicator size="large" color="#5DBB63" /></View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={error ? [] : products}
        keyExtractor={(item: any) => item.id.toString()}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyState}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listPadding}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => (
          <CardAdmin
            title={item.title}
            description={item.description}
            price={item.price * 15000}
            image={item.thumbnail}
            onEdit={() => console.log('Edit item:', item.id)}
            onDelete={() => console.log('Delete item:', item.id)}
          />
        )}
      />

      {/* Tombol Back navigasi ke editmin.tsx */}
      <View style={styles.footer}>
        <ButtonPrimary 
          title="Back" 
          color="#333333" 
          onPress={() => router.push('/editmin')} 
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 25,
    paddingTop: 20,
    marginBottom: 10,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  categoryRow: {
    flexDirection: 'row',
    marginBottom: 15,
    gap: 10,
  },
  chip: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#E8F5E9',
    elevation: 2,
  },
  activeChip: {
    backgroundColor: '#5DBB63',
  },
  chipText: {
    color: '#333',
  },
  activeText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  listPadding: {
    paddingBottom: 120,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    paddingHorizontal: 25,
  },
  // Empty State Styles
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  emptyImage: {
    width: 280,
    height: 280,
  },
  emptyText: {
    fontSize: 20,
    color: '#666',
    fontWeight: '500',
    marginTop: -10,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  }
})