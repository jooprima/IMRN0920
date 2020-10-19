import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const AboutScreen = () => {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.judul}>Tentang Saya</Text>
          <Icon
            name="account-circle"
            size={200}
            color="#efefef"
            solid
            style={styles.icon}
          />
          <Text style={styles.nama}>Yohanes Prima</Text>
          <Text style={styles.kerjaan}>React Native Developer</Text>
          <View style={styles.kotak}>
            <Text style={styles.juduldalam}>Portofolio</Text>
            <View style={styles.kotakdalam}>
              <View>
                <FontAwesome5 name="gitlab" color='#3ec6ff' size={40} style={styles.icon} />
                <Text style={styles.textdalam}>@jooprima</Text>
              </View>
              <View>
                <FontAwesome5 name="github" color='#3ec6ff' size={40} style={styles.icon} />
                <Text style={styles.textdalam}>@jooprima</Text>
              </View>
            </View>
          </View>
          <View style={styles.kotak}>
            <Text style={styles.juduldalam}>Hubungi Saya</Text>
            <View style={styles.kotakdalamver}>
              <View style={styles.kotakdalamverhub}>
                <View>
                  <FontAwesome5 name="facebook" color='#3ec6ff' size={40} style={styles.icon} />
                </View>
                <View style={styles.textname}>
                  <Text style={styles.textdalam}>@jooprima</Text>
                </View>
              </View>
              <View style={styles.kotakdalamverhub}>
                <View>
                  <FontAwesome5
                    name="instagram"
                    size={40}
                    style={styles.icon}
                    color='#3ec6ff'
                  />
                </View>
                <View style={styles.textname}>
                  <Text style={styles.textdalam}>@jooprima</Text>
                </View>
              </View>
              <View style={styles.kotakdalamverhub}>
                <View>
                  <FontAwesome5 name="twitter" size={40} color='#3ec6ff' style={styles.icon} />
                </View>
                <View style={styles.textname}>
                  <Text style={styles.textdalam}>@jooprima</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
}

export default AboutScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
  judul: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#003366",
    textAlign: "center",
  },
  icon: {
    textAlign: "center",
  },
  nama: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003366",
    textAlign: "center",
  },
  kerjaan: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3ec6ff",
    textAlign: "center",
    marginBottom: 7,
  },
  kotak: {
    borderColor: "blue",
    borderRadius: 10,
    borderBottomColor: "#000",
    padding: 5,
    backgroundColor: "#efefef",
    marginBottom: 9,
  },
  kotakdalam: {
    borderTopWidth: 2,
    borderTopColor: "#003366",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  kotakdalamver: {
    borderTopWidth: 2,
    borderTopColor: "#003366",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  kotakdalamverhub: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 2,
    justifyContent: "space-between"
  },
  juduldalam: {
    fontSize: 18,
    color: "#003366",
  },
  textdalam: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003366",
    textAlign: "center",
  },
  input:{
      height:40,
      borderColor:'grey',
      borderWidth:1,
  },
  textname:{
      justifyContent:'center',
      marginLeft:10,
  }
});
