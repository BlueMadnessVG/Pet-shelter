import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./router";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilitiesConfiguration } from "./utils/snakbar-manager";

function App() {
  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfiguration />
      <Router>
        <AppRouter />
      </Router>
    </SnackbarProvider>
  );
}

export default App;
