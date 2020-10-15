import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SkillItem from "../Tugas14/components/SkillItem";
import data from "./skillData.json";

export default function SkillScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image
            source={require("../Tugas13/Image/logo.png")}
            size={5}
            style={{ width: 187, height: 51 }}
          />
        </View>
        <View style={styles.descContainer}>
          <Image
            source={require("../Tugas13/Image/pas3x4.jpeg")}
            size={1}
            style={{ width: 43, height: 45, borderRadius: 10 }}
          />
          <View style={styles.Desc}>
            <Text numberOfLines={2} style={styles.Titletxt}>
              Hai,
            </Text>
            <Text style={styles.nametxt}>Yohanes Prima</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.intitle}>SKILL</Text>
          <View style={styles.skillList}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntxt}>Library / Framework</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntxt}>Bahasa Pemrograman</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntxt}>Teknologi</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={data.items}
            renderItem={(skill) => <SkillItem skill={skill.item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <View style={{ height: 10, backgroundColor: "#E5E5E5" }} />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 55,
    backgroundColor: "white",
    elevation: 3,
    paddingTop: 20,
    paddingHorizontal: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navItem: {
    marginLeft: 25,
  },
  body: {
    flex: 1,
    padding: 5,
    backgroundColor: "#B4E9FF",
    borderRadius: 20,
  },
  descContainer: {
    flexDirection: "row",
    paddingTop: 5,
    marginTop: 10,
  },
  Titletxt: {
    fontSize: 12,
    color: "#000000",
  },
  Desc: {
    paddingHorizontal: 1,
  },
  nametxt: {
    fontSize: 16,
    paddingTop: 4,
    color: "#003366",
  },
  box: {
    borderColor: "#B4E9FF",
    borderRadius: 3,
    borderBottomColor: "#000",
    padding: 5,
    backgroundColor: "#efefef",
    marginBottom: 9,
  },
  intitle: {
    fontSize: 36,
    color: "#003366",
  },
  skillList: {
    marginTop: 5,
    flexDirection: "row",
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#B4E9FF",
    padding: 10,
    borderRadius: 16,
    marginHorizontal: 1,
    marginBottom: 1,
    marginTop: 1,
    width: 140,
  },
  btntxt: {
    color: "#003366",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
});
