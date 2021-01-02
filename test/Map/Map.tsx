import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken(
  "pk.eyJ1Ijoibm92aW45OTciLCJhIjoiY2tqYmk4emRhMXlnNjJycWdzb29peTBiZiJ9.oIZ0K14WQt2_bWcfGJmmzg"
);

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1,
  },
});

export default function Map() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map}>
            <MapboxGL.Camera
              zoomLevel={8}
              centerCoordinate={[-94.5786, 39.0997]}
            />
          </MapboxGL.MapView>
        </View>
      </SafeAreaView>
    </>
  );
}
