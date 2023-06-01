import React from 'react';
import {FlatList, View, Text, StyleSheet, Image} from 'react-native';
import COLORS from '../constants/colors';

const renderItem = ({item}: any) => (
  <View style={styles.gameContainer}>
    <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
    <View style={styles.gameInfoContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.short_description}</Text>
      <Text style={styles.field}>Genre: {item.genre}</Text>
      <Text style={styles.field}>Platform: {item.platform}</Text>
      <Text style={styles.field}>Publisher: {item.publisher}</Text>
      <Text style={styles.field}>Developer: {item.developer}</Text>
      <Text style={styles.field}>Release Date: {item.release_date}</Text>
    </View>
  </View>
);
const GamesList = ({games}: any) => {
  return (
    <View style={styles.container}>
      <FlatList data={games} renderItem={renderItem} style={styles.flatList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listContentContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  gameContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 16,
    borderRadius: 8,
    padding: 16,
    backgroundColor: COLORS.primary,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  gameInfoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: COLORS.textHeader,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
    color: COLORS.text,
  },
  field: {
    fontSize: 12,
    color: COLORS.text,
    marginBottom: 2,
  },
});

export default GamesList;
