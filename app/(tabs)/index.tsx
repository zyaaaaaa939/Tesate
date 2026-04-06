import CardName from '@/components/CardName';
import FormInput from '@/components/FormInput';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    } catch (err: any) {
      setError("Gagal ambil data, cek koneksi lu!");
    } finally {
      setLoading(false);
    }
  };

  const renderHeader = () => (
    <View>
      <View style={styles.header}>
        <Text style={styles.location}>Bambu Apus, Jakarta Timur</Text>
        <Text style={styles.welcome}>Sore, Mang Saswi</Text>
        <FormInput placeholder="Cari Kesukaan kamu!" />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryRow}
        data={['Rekomendasi', 'Makanan', 'Minuman', 'Cemilan']}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={[styles.chip, item === 'Rekomendasi' && styles.activeChip]}>
            <Text style={item === 'Rekomendasi' ? styles.activeText : {}}>{item}</Text>
          </View>
        )}
      />
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#5DBB63" />
        <Text style={{ marginTop: 10 }}>Sabar ya, lagi masak...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryBtn} onPress={fetchData}>
          <Text style={{ color: '#fff' }}>Coba Lagi</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item: any) => item.id.toString()}
        ListHeaderComponent={renderHeader}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listPadding}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => (
          <CardName
            id={item.id} 
            title={item.title}
            description={item.description}
            price={item.price * 15000}
            image={item.thumbnail}
            onPressCart={() => console.log('Tambah ke keranjang:', item.title)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { paddingHorizontal: 20, paddingTop: 10 },
  location: { textAlign: 'center', fontSize: 13, color: '#666', marginBottom: 15 },
  welcome: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  categoryRow: { paddingLeft: 20, marginVertical: 20 },
  chip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
  },
  activeChip: { backgroundColor: '#5DBB63' },
  activeText: { color: '#FFF', fontWeight: 'bold' },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  listPadding: {
    paddingBottom: 30,
  },
  errorText: { color: 'red', marginBottom: 10 },
  retryBtn: { backgroundColor: '#5DBB63', padding: 10, borderRadius: 8 },
});