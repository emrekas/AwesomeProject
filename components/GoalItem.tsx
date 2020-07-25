import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export interface Props {
  title: string;
  id: number;
  onDelete(id: number): void;
}

const GoalItem = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "gray",
    borderColor: "black",
    borderWidth: 1,
    marginTop: 5,
  },
});
