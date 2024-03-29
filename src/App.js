import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { CssBaseline } from "@mui/material";
import Onboarding from "./components/onboarding";

function App() {
  return (
    <>
      <CssBaseline />
      <Onboarding />
    </>
  );
}

export default App;
