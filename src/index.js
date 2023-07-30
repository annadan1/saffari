import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.scss";
import { MapProvider } from "./providers/map-provider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const apiUrl = `https://api-maps.yandex.ru/v3/?apikey=6f80b914-e2dc-4036-b83e-8f2416cb6790&lang=ru_RU`;

root.render(
  <React.StrictMode>
    <MapProvider apiUrl={apiUrl}>
      <App />
    </MapProvider>
  </React.StrictMode>
);
