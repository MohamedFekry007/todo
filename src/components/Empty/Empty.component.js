import React from 'react';
import { Image, Text } from 'react-native';
import { translate } from '../../utils/managers/LocalizationManager';
import styles from './Empty.style';
import noImg from '../../assets/imgs/noData.jpeg';

const EmptyComponent = () => {
    return (
        <>
            <Text style={styles.text}>{translate('noData')}</Text>
            <Image source={noImg} resizeMode='stretch' style={styles.noImg}>
            </Image>
        </>
    )
}
export default EmptyComponent;