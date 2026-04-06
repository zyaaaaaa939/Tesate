import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

export default function CardAdmin({ title, description, price, image, onEdit, onDelete }: any) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.desc} numberOfLines={2}>{description}</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>Rp {price.toLocaleString('id-ID')}</Text>
          <View style={styles.actionGroup}>
            <TouchableOpacity style={styles.editBtn} onPress={onEdit}>
              <MaterialCommunityIcons name="pencil" size={18} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
              <Ionicons name="trash" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 10, width: '48%', marginBottom: 15, elevation: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  image: { width: '100%', height: 90, borderRadius: 15, marginBottom: 8 },
  info: { width: '100%' },
  title: { fontSize: 15, fontWeight: 'bold' },
  desc: { fontSize: 10, color: '#666', marginVertical: 4, height: 28 },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 },
  price: { fontSize: 13, fontWeight: 'bold' },
  actionGroup: { flexDirection: 'row', gap: 5 },
  editBtn: { backgroundColor: '#E0E0E0', padding: 6, borderRadius: 8 },
  deleteBtn: { backgroundColor: '#B80F3B', padding: 6, borderRadius: 8 }
})