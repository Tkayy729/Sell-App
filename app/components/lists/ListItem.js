import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import defaultStyles from "../../config/styles";

function ListItem({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={defaultStyles.colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          { image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
             { subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons name="chevron-right"/>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: defaultStyles.colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex:1
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: defaultStyles.colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
