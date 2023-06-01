import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from './src/constants/colors';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.header} barStyle={'light-content'} />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: COLORS.header,
              },
              contentStyle: {
                backgroundColor: COLORS.bg,
              },
              headerTintColor: COLORS.text,
              headerTitleStyle: {
                color: COLORS.text,
              },
            }}>
            <Stack.Screen name="Main" component={MainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
