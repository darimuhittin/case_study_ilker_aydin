import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, StyleSheet, Text, Modal, Pressable, Button} from 'react-native';
import GamesList from '../components/GamesList';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Picker from '@ouroboros/react-native-picker';
import COLORS from '../constants/colors';
import {fetchGames} from '../api/api';
function PickerDisplay(props: any) {
  return (
    <View style={styles.pickerDisplayContainer}>
      <Text style={styles.pickerText}>{props.text}</Text>
      <Icon name="expand-more" size={30} color={'#fff'} />
    </View>
  );
}

const MainScreen = ({route, navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [platform, setPlatform] = useState('all');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [games, setGames] = React.useState([]);

  console.log(route);
  useLayoutEffect(() => {
    const handleFilterSortPress = () => {
      setModalVisible(true);
    };

    navigation.setOptions({
      headerRight: () => (
        <>
          <Pressable onPress={handleFilterSortPress}>
            <Icon name="filter-alt" size={30} color="#fff" />
          </Pressable>
        </>
      ),
    });
  }, [navigation]);

  const onClose = () => {
    setModalVisible(false);
  };

  const refetch = () => {
    fetchGames(platform === 'all' ? '' : platform, category, sort).then(res =>
      setGames(res),
    );
  };
  useEffect(() => {
    fetchGames(platform === 'all' ? '' : platform, category, sort).then(res =>
      setGames(res),
    );
  }, []);
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <GamesList games={games} />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={onClose}>
        <View style={styles.modal}>
          <View style={styles.modalInner}>
            {/* Your modal content here */}
            <View style={styles.pickerArea}>
              <Text style={styles.pickerText}>Platform : </Text>
              <Picker
                onChanged={setPlatform}
                options={[
                  {value: 'all', text: 'All'},
                  {value: 'pc', text: 'PC'},
                  {value: 'browser', text: 'Browser'},
                ]}
                value={platform}
                component={PickerDisplay}
              />
            </View>
            <View style={styles.pickerArea}>
              <Text style={styles.pickerText}>Category : </Text>
              <Picker
                onChanged={setCategory}
                options={[
                  {value: '', text: 'All'},
                  {value: 'mmorpg', text: 'MMORPG'},
                  {value: 'shooter', text: 'Shooter'},
                  {value: 'strategy', text: 'Strategy'},
                  {value: 'action', text: 'Action'},
                  {value: 'racing', text: 'Racing'},
                  {value: 'sports', text: 'Sports'},
                  {value: 'mmo', text: 'MMO'},
                  {value: 'survival', text: 'Survival'},
                  {value: 'social', text: 'Social'},
                ]}
                value={category}
                component={PickerDisplay}
              />
            </View>
            <View style={styles.pickerArea}>
              <Text style={styles.pickerText}>Sort By : </Text>
              <Picker
                onChanged={setSort}
                options={[
                  {value: '', text: 'None'},
                  {value: 'release-date', text: 'Release Data'},
                  {value: 'popularity', text: 'Popularity'},
                  {value: 'alphabetical', text: 'Alphabetical'},
                  {value: 'relevance', text: 'Relevance'},
                ]}
                value={sort}
                component={PickerDisplay}
              />
            </View>
            <Pressable
              onPress={() => {
                onClose();
                refetch();
              }}
              style={styles.doneButton}>
              <Text style={styles.doneButtonText}>Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalInner: {
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  pickerArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  pickerText: {
    color: '#fff',
  },
  pickerDisplayContainer: {
    borderWidth: 1,
    borderColor: '#a7a7a7',
    borderRadius: 5,
    marginBottom: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,
  },
  doneButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneButtonText: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});

export default MainScreen;
