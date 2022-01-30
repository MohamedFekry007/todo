/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  StatusBar
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';
import RNSecureStorage from 'rn-secure-storage';
import ToDoStack from './src/navigations/ToDoStack.stack';
import { initLocale } from './src/utils/managers/LocalizationManager';

const getLang = async () => {
  let currentLang = await RNSecureStorage.get("lang");
  initLocale(currentLang);
}

getLang()

const App = () => {

  const MainStackNavigator = createStackNavigator();

  return (
    <NavigationContainer>
      <ToastProvider
        placement={"top"}
        duration={4000}
        offset={30}
        animationType={"zoom-in"}
        textStyle={{ fontSize: 16 }}
      >
        <SafeAreaProvider>
          <StatusBar />
          <MainStackNavigator.Navigator
            screenOptions={{ headerShown: false }}
          >
            <MainStackNavigator.Screen name={"ToDoStack"} component={ToDoStack} />
          </MainStackNavigator.Navigator>
        </SafeAreaProvider>
      </ToastProvider>
    </NavigationContainer>
  );
};

export default App;
