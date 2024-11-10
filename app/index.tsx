import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const LocalImage =  require('@/assets/images/08.jpeg');

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.panel}>
        <Text style={styles.textWhite}>Hello World!!</Text>
      </View>
      <View style={styles.panel}>
        <Image style={styles.image} source={LocalImage}></Image>
        <View>
        <Text style={styles.textWhite}>Luar Masjid Nabawi</Text>
        <Text style={styles.textWhiteKecil}>Pemandangan Hotel di luar Masjid Nabawi</Text>
        </View>
      </View>
      <View style={styles.panel}>
        <Image style={styles.image} source={"https://mirzayogy.github.io/assets/image/02.jpeg"}></Image>
        <View>
        <Text style={styles.textWhite}>Senja Masjid Nabawi</Text>
        <Text style={styles.textWhiteKecil}>Masjid Nabawi ketika senja melanda</Text>
        </View>
      </View>
      
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  panel:{
    backgroundColor: '#25292e',
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
    flexDirection:'row',
    alignItems:'center',
  },
  text:{
    fontSize: 20,
    color: '#000'
  },
  textWhite:{
    fontSize: 20,
    color:'#fff'
  },
  textWhiteKecil:{
    fontSize:12,
    color:'#fff'
  },
  lingkaran:{
    backgroundColor: 'teal',
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 8,
    alignItems:'center',
    justifyContent:'center',
    marginRight: 16,
  },
  image:{
    width:70,
    height: 70,
    borderRadius: 35,
    marginEnd: 24
  },
});
