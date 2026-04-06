import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router' // Tambahkan import router

interface CardProps {
  id: number; // Tambahkan id supaya bisa navigasi spesifik
  title: string;
  description: string;
  price: number;
  image: string;
  onPressCart?: () => void;
}

export default function CardName({ id, title, description, price, image, onPressCart }: CardProps) {
  
  // Fungsi untuk handle klik pada kartu
  const handlePressDetail = () => {
    router.push({
      pathname: "/detailpro",
      params: { id: id } // Lempar ID ke halaman detailpro
    });
  };

  return (
    // Bungkus seluruh card dengan TouchableOpacity supaya bisa diklik
    <TouchableOpacity 
      activeOpacity={0.9} 
      style={styles.card} 
      onPress={handlePressDetail}
    >
      {/* Gambar dari API */}
      <Image 
        source={{ uri: image }} 
        style={styles.image} 
        resizeMode="cover" 
      />
      
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.desc} numberOfLines={2}>{description}</Text>
        
        <View style={styles.bottomRow}>
          <Text style={styles.price}>Rp {price.toLocaleString('id-ID')}</Text>
          
          {/* Tombol Cart tetap terpisah klik-nya */}
          <TouchableOpacity 
            style={styles.cartButton} 
            onPress={(e) => {
               e.stopPropagation(); // Cegah event bubbling ke card
               onPressCart?.();
            }}
          >
            <Ionicons name="cart" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    width: '48%', 
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 15,
    marginBottom: 8,
    backgroundColor: '#f9f9f9'
  },
  info: {
    paddingHorizontal: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  desc: {
    fontSize: 11,
    color: '#777',
    marginVertical: 4,
    height: 32, 
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  cartButton: {
    backgroundColor: '#5DBB63',
    padding: 8,
    borderRadius: 10,
  }
})