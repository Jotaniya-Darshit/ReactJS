import "./App.css";
import Final from './Component/Final'
import { React } from 'react';
import { Provider } from 'react-redux'
import {store} from "./Store/Store";


function App() {
  return (
    <>
      <Provider store={store}>
        <Final/>
      </Provider>
    </>
  );
}

export default App;
