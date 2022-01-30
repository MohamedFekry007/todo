import bg from '../../assets/imgs/bg.png';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import styles from './Container.style';

const Container = (props) => {
    const { children } = props;
    return (
        <ImageBackground source={bg} resizeMode="cover" style={styles.imageBG}>
            {children}
        </ImageBackground>
    )
}
export default Container;