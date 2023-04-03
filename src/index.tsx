import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppStore from "./context/AppStore";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import AppContext from "./context/AppContext";
import { lightTheme, darkTheme } from "./context/Theme";
import CssBaseline from "@mui/material/CssBaseline";

const appStore = new AppStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AppContext.Provider value={{ appStore }}>
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </AppContext.Provider>
);

reportWebVitals();
