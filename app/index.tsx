import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View, Image } from "react-native";

export default function Index() {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in: muncul perlahan slow tpi pasti
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Tahan 3 detik, lalu fade out dan pindah halaman iyey
    const t = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        router.replace("/main");
      });
    }, 3000);

    return () => clearTimeout(t);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, { opacity }]}>
        <Image
          source={require("../assets/images/itesate.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", 
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 350, 
    height: 350,
  },
});