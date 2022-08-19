import React, { useMemo } from "react";
import { Button, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NConst } from "constants";

export const DrawerContent = () => {
  const navigation = useNavigation();

  const menu = useMemo(
    () => [
      {
        name: NConst.RIDE_LIST,
        onPress: () => navigation.navigate(NConst.RIDE_LIST as any),
      },
      {
        name: NConst.CALENDAR,
        onPress: () => navigation.navigate(NConst.CALENDAR as any),
      },
    ],
    [navigation],
  );

  const renderItem = ({ item }: any) => (
    <View style={{ margin: 15 }}>
      <Button onPress={item.onPress} title={item.name} color="#841584" />
    </View>
  );

  return (
    <View>
      <FlatList
        data={menu}
        renderItem={renderItem}
        bounces={false}
        keyExtractor={(item, key) => key.toString()}
      />
    </View>
  );
};
