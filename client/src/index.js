import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/Backbone/App';
import { UserProvider } from "../src/components/Backbone/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


