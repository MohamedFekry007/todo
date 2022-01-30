/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore, persistor } from './src/store/configureStore';
import App from './App';
import { name as appName } from './app.json';

if (__DEV__) {
    import('./ReactotronConfig').then(() => {
        // console.log('Reactotron Configured')
    });
}

const RNRedux = () => (
    <Provider store={configureStore}>
        <PersistGate
            loading={
                null
            }
            persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
