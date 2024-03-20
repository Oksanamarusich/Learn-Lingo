import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
 import { PersistGate } from 'redux-persist/integration/react';
 import { Provider } from 'react-redux';
 import { store, persistor } from './redux/store';
import { GlobalStyle } from 'components/GlobalStyle';
import { themePeach } from 'styles/themes';
import './firebase';
import { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/Learn-Lingo">
      <ThemeProvider theme={themePeach}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
    </PersistGate>
    </Provider>
    <Toaster position="top-center" reverseOrder={false} />
  </React.StrictMode>
);
