/* *
  title: index.js 

  date: 5/28/2019

  author:  javier olaya

  description: component that handles the main logic for accessing and organizing the 
  webpage's routes, persistent store, async calls and redux dev tools 
         
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import App from './components/App';
import { persisGate, PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import ErrorBoundary from './components/ErrorBoundary';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
}
const PersistReducer = persistReducer(persistConfig, rootReducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
)
const store = createStore(PersistReducer, enhancer);
let persistor = persistStore(store);

/* define the state properties of the  */
ReactDom.render((
  <Provider store={store}>
    <ErrorBoundary>
      <PersistGate loading={null} persistor={persistor}>
        <App></App>
      </PersistGate>
    </ErrorBoundary>
  </Provider>

), document.getElementById("app"));