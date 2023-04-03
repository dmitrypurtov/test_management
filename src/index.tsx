import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppStore from "./stores/AppStore";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./stores/AppContext";

const appStore = new AppStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AppContext.Provider value={{ appStore }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContext.Provider>
);

reportWebVitals();
