import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { router, Router } from "expo-router";

type Props = {
    id:number,
    sumberGambar : string,
    judul: string,
    keterangan:string,
}

const PlacaholderImage = require('@/assets/images/08.jpeg')

export default function Card({id, sumberGambar, judul, keterangan}: Props){
    const imageSource = sumberGambar?{uri:sumberGambar} : PlacaholderImage;
    return(
        <Pressable onPress={()=>
            router.push({
                pathname: "./details/[id]",
                params: {id:id}
            
           })
        }>
        <View style={styles.panel}>
            <Image style={styles.image} source={imageSource}></Image>
            <View>
            <Text style={styles.textWhite}>{judul}</Text>
            <Text style={styles.textWhiteKecil}>{keterangan}</Text>
            </View>
        </View>
        </Pressable>
    )
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
    textWhite:{
      fontSize: 20,
      color:'#fff'
    },
    textWhiteKecil:{
      fontSize:12,
      color:'#fff'
    },
    image:{
      width:80,
      height: 60,
      marginEnd: 24
    },
  });
  