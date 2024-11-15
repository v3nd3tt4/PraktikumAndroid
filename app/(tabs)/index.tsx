import { FlatList, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import Card from "@/components/Card";

const LocalImage =  require('@/assets/images/08.jpeg');

const dataCard = require('@/assets/dataCard.json');

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <FlatList
        data={dataCard.posts}
        renderItem={({item, index})=>(
          <Card
            id = {item.id}
            sumberGambar={item.sumberGambar}
            judul={item.judul}
            keterangan={item.keterangan}
          />
        )}
        
      />
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
