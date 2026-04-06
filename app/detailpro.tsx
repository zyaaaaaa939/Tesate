import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function DetailPro() {
  const { id } = useLocalSearchParams(); 
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) fetchDetail();
  }, [id]);

  const fetchDetail = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Gagal ambil detail:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <View style={styles.center}><ActivityIndicator size="large" color="#5DBB63" /></View>
  );

  if (!product) return (
    <View style={styles.center}><Text>Produk gak ketemu!</Text></View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header Nav */}
      <View style={styles.headerNav}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search" size={28} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Gambar Produk Utama */}
        <Image source={{ uri: product.thumbnail }} style={styles.mainImage} resizeMode="contain" />

        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          
          <View style={styles.timeRow}>
            <Ionicons name="restaurant-outline" size={18} color="black" />
            <Text style={styles.timeText}> {product.reviews?.[0]?.date ? "26 mins" : "15 mins"}</Text>
          </View>

          <Text style={styles.description}>{product.description}</Text>

          {/* Price & Quantity Row */}
          <View style={styles.actionRow}>
            <View style={styles.priceTag}>
              <Text style={styles.priceText}>Rp {(product.price * 15000).toLocaleString('id-ID')}</Text>
            </View>

            <View style={styles.counterRow}>
              <TouchableOpacity 
                style={styles.counterBtn} 
                onPress={() => setQuantity(q => Math.max(1, q - 1))}
              >
                <Text style={styles.counterBtnText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity 
                style={styles.counterBtn} 
                onPress={() => setQuantity(q => q + 1)}
              >
                <Text style={styles.counterBtnText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Final Buttons */}
         <View style={styles.footerButtons}>
  <TouchableOpacity 
    style={[styles.btn, styles.btnCart]}
    onPress={() => console.log("Added to cart")}
  >
    <Text style={styles.btnTextWhite}>Add to Cart</Text>
  </TouchableOpacity>

  <TouchableOpacity 
    style={[styles.btn, styles.btnOrder]}
    onPress={() => router.push({
      pathname: "/pembayar",
      params: { 
        title: product.title,
        price: product.price * 15000, 
        qty: quantity,
        total: (product.price * 15000) * quantity 
      }
    })}
  >
    <Text style={styles.btnTextWhite}>Pesan Sekarang!</Text>
  </TouchableOpacity>
</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  headerNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  mainImage: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
  content: {
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  title: { fontSize: 32, fontWeight: 'bold', color: '#000' },
  timeRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  timeText: { fontSize: 16, color: '#333', marginLeft: 5 },
  description: { fontSize: 14, color: '#444', lineHeight: 22, marginBottom: 30 },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  priceTag: {
    backgroundColor: '#6BC26D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  priceText: { color: '#FFF', fontWeight: 'bold', fontSize: 18 },
  counterRow: { flexDirection: 'row', alignItems: 'center' },
  counterBtn: {
    backgroundColor: '#6BC26D',
    width: 35,
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  counterBtnText: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  quantityText: { marginHorizontal: 15, fontSize: 20, fontWeight: 'bold' },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  btn: {
    flex: 0.48,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  btnCart: { backgroundColor: '#333' },
  btnOrder: { backgroundColor: '#333' },
  btnTextWhite: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});