import React from 'react';
import { FlatList } from 'react-native';
import { FAB } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { ContainerComponent, EmptyComponent, TodoItemComponent } from '../../components';
import screenNames from '../../navigations/screenNames';
import { translate } from '../../utils/managers/LocalizationManager';

const ToDoList = ({ navigation }) => {

    const { todosList } = useSelector((state) => state.ToDoReducer);
    
    return (
        <ContainerComponent>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={todosList}
                extraData={todosList}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <TodoItemComponent item={item} key={index}></TodoItemComponent>
                    )
                }}
                ListEmptyComponent={<EmptyComponent />}
            />
            <FAB
                onPress={() => navigation.navigate(screenNames.AddToDo)}
                placement="right"
                title={translate("add")}
                size="small"
                color="#662d91"
            />
        </ContainerComponent>
    )
}

export default ToDoList;