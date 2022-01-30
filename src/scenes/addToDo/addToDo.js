import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useToast } from "react-native-toast-notifications";
import { useDispatch, useSelector } from 'react-redux';
import { ContainerComponent } from '../../components';
import { saveNewTodo } from '../../store/actions/ToDoAction';
import { translate } from '../../utils/managers/LocalizationManager';
import styles from './addToDo.style';

const AddToDo = ({ navigation }) => {

    const { todosList } = useSelector((state) => state.ToDoReducer);
    const dispatch = useDispatch();
    const [descEn, setDescEn] = useState("");
    const [descAr, setDescAr] = useState("");
    const toast = useToast();

    add = () => {
        let newTodos = [...todosList];
        newTodos.push({ description: descEn, descriptionAr: descAr });
        dispatch(saveNewTodo(newTodos));
        navigation.goBack();
        toast.show(translate("addSuccess"), {
            type: "success",
        });
    }

    return (
        <ContainerComponent>
            <View>
                <Text style={styles.title}>{translate("enterDesc")}</Text>
                <TextInput
                    placeholder={translate("enDes")}
                    value={descEn}
                    onChangeText={(textValue) => {
                        setDescEn(textValue)
                    }}
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={5}
                >
                </TextInput>
                <TextInput
                    placeholder={translate("arDes")}
                    value={descAr}
                    onChangeText={(textValue) => {
                        setDescAr(textValue)
                    }}
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={5}
                >
                </TextInput>
            </View>
            <Button
                type={'solid'}
                onPress={add}
                title={translate("add")}
                buttonStyle={styles.buttonStyle}
                disabledStyle={[styles.buttonStyle, styles.disabled]}
                disabled={!descEn || !descAr}
            />
        </ContainerComponent>
    )
}

export default AddToDo;