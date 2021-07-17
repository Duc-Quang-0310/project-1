import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import counterSlice from './feature/counter/counterSlice'
import loggingSlice from './feature/logging/loggingSlice'
import userInfoSlice from './feature/userInfo/userInfoSlice'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["signIn"]
}


export const store = configureStore({
  reducer: persistReducer(persistConfig, combineReducers({
    counter: counterSlice,
    userInfo: userInfoSlice,
    signIn: loggingSlice
  }    
  )),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 