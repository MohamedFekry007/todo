import React from 'react';
import { I18nManager, TouchableWithoutFeedback } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from './TodoItem.style';

const TodoItemComponent = ({ item }) => {
    const { description, descriptionAr } = item;
    return (
        <ListItem
            containerStyle={styles.itemContainer}
            Component={TouchableWithoutFeedback}
        >
            <ListItem.Content>
                <ListItem.Title style={styles.text}>{I18nManager.isRTL ? descriptionAr : description}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )
}

export default TodoItemComponent;