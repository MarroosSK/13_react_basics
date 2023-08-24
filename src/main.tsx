import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MiniMenuContextProvider } from "./context/MiniMenuContext.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MiniMenuContextProvider>
    <App />
  </MiniMenuContextProvider>
);
