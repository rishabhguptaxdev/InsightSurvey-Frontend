import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider
      useRefreshTokens={true}
      cacheLocation="localstorage"
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      authorizationParams={{
        redirect_uri: `${window.location.origin}/dashboard`
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
