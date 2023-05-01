import './App.css';
import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Main from './pages/Main/Main';
import Error404 from './pages/Error404/Error404';
import Forms from './pages/Forms/Forms';
import Header from './pages/Header/Header';
import { Provider } from 'react-redux';
import store from './store/store';

interface ContextValue {
  themesState: string;
  setThemesState: (c: string) => void;
  pageState: string;
  setPageState: (c: string) => void;
}

export const Context = createContext<ContextValue>({
  themesState: 'light',
  setThemesState: () => {},
  pageState: '',
  setPageState: () => {},
});

function App() {
  const [pageState, setPageState] = useState('');
  const [themesState, setThemesState] = useState('light');

  return (
    <Provider store={store}>
      <Context.Provider value={{ themesState, setThemesState, pageState, setPageState }}>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </Context.Provider>
    </Provider>
  );
}

export default App;
