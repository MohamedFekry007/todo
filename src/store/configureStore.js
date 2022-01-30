import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import ToDoReducer from './reducers/ToDoReducer';
import secureStore from './secureStore';
import thunk from 'redux-thunk';
import Reactotron from '../../ReactotronConfig';

const secureStorage = secureStore();

const storageReducer = combineReducers({
    ToDoReducer
});

const storagePersistConfig = {
    key: 'storage',
    storage: secureStorage,
};

const persistedReducer = persistReducer(storagePersistConfig, storageReducer);
const configureStore = createStore(persistedReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));
const persistor = persistStore(configureStore);

export { configureStore, persistor };