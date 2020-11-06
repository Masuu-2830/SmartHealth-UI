import React, { Component } from "react";
// import logo from './logo.svg';
import Main from "./components/main";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from 'react-redux';
// import { configureStore } from './configureStore';
import "./App.css";

// const store = configureStore();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
