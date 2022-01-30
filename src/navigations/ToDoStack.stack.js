import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { AddToDo, ToDoList } from '../scenes';
import { changeLang, translate } from '../utils/managers/LocalizationManager';
import screenNames from './screenNames';

const ToDoStackNavigator = createStackNavigator();

const ToDoStack = (props) => {
    return (
        <ToDoStackNavigator.Navigator
            initialRouteName={screenNames.ToDoList}
            screenOptions={{
                headerBackTitleVisible: false,
                gestureEnabled: false,
                headerMode: "screen",
                headerRight: () => <Pressable onPress={changeLang}><Text>{translate("language")}</Text></Pressable>,
                headerRightContainerStyle: { marginEnd: 15 }
            }}
        >
            <ToDoStackNavigator.Screen
                name={screenNames.AddToDo}
                component={AddToDo}
                options={{ title: translate("addToDo") }}
            />
            <ToDoStackNavigator.Screen
                name={screenNames.ToDoList}
                component={ToDoList}
                options={{ title: translate("toDoList") }}
            />
        </ToDoStackNavigator.Navigator>
    )
}

export default ToDoStack;

