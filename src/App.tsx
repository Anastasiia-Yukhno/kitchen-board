import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import SettingsPage from "./pages/SettingsPage";
import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";
import InfoPage from "./pages/InfoPage";
import { Provider } from "react-redux";
import { store } from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
