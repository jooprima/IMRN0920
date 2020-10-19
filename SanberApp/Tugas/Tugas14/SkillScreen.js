import React from "react";
import data from "./skillData.json";
import IonIcon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { FlatList, Image, Platform, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Constants from 'expo-constants';

function Item({ isi }) {
  return (
    <View style={styles.itemListView}>
      <View style={styles.item1View}>
        <Icon
          name={isi.iconName}
          size={60}
          color="#003366"
          style={styles.icon}
        />
      </View>

      <View style={styles.item2View}>
        <Text style={styles.itemSkillText}>{isi.skillName}</Text>
        <Text style={styles.itemCatText}>{isi.categoryName}</Text>
        <Text style={styles.itemPersenText}>{isi.percentageProgress}</Text>
      </View>

      <View style={styles.item3View}>
        <IonIcon
          name="ios-arrow-forward"
          size={70}
          color="#003366"
          style={styles.icon}
        />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image
          style={styles.logo}
          source={require("../Tugas13/Image/logo.png")}
        />
      </View>

      <View style={styles.userView}>
        <View style={styles.iconUserView}>
          <FontAwesome5 name={"user-circle"} size={26} solid color="#3ec6ff" />
        </View>

        <View style={styles.userDetView}>
          <Text style={styles.userHaiText}>Hai !</Text>
          <Text style={styles.userNameText}>Yohanes Prima</Text>
        </View>
      </View>

      <Text style={styles.judul}>SKILL</Text>

      <View style={styles.categoryView}>
        <View style={styles.catDetView}>
          <Text style={styles.catText}>Library / Framework</Text>
        </View>

        <View style={styles.catDetView}>
          <Text style={styles.catText}>Bahasa Pemrograman</Text>
        </View>

        <View style={styles.catDetView}>
          <Text style={styles.catText}>Teknologi</Text>
        </View>
      </View>

      <FlatList
        data={data.items}
        renderItem={({ item }) => <Item isi={item} />}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
    flex: 1,
    paddingHorizontal: 15,
  },
  logoView: {
    flexDirection: "row-reverse",
  },
  logo: {
    width: 189,
    height: 50,
  },
  userView: {
    flexDirection: "row",
  },
  iconUserView: {
    justifyContent: "center",
    alignItems: "center",
  },
  userDetView: {
    marginHorizontal: 10,
  },
  userHaiText: {
    fontSize: 12,
  },
  userNameText: {
    fontSize: 16,
    color: "#003366",
  },
  judul: {
    fontSize: 36,
    marginTop: 16,
    color: "#003366",
  },
  categoryView: {
    borderTopWidth: 4,
    borderTopColor: "#3ec6ff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  catDetView: {
    backgroundColor: "#b4e9ff",
    marginVertical: 10,
    padding: 7,
    borderRadius: 10,
  },
  catText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#003366",
    textAlign: "center",
  },
  itemListView: {
    backgroundColor: "#b4e9ff",
    marginVertical: 4,
    flexDirection: "row",
    alignContent: "stretch",
    padding: 10,
    borderRadius: 10,
    ...Platform.select({
      ios:{
        borderBottomWidth:4,
        borderBottomColor:'#efefef',
      },
      android:{
        elevation:6,
      },
      default:{
        borderBottomWidth:4,
        borderBottomColor:'#efefef',
      }
    })
  },
  item1View: {
    flex: 1,
    justifyContent: "center",
  },
  item2View: {
    flex: 3,
  },
  item3View: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemSkillText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003366",
    marginLeft:10,
  },
  itemCatText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3ec6ff",
    marginLeft:10,
  },
  itemPersenText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
    textAlign: "right",
  },
});
