import { useEffect, useState } from "react";
import { MenuItemModel } from "./models/MenuItemModel";
import { menuItems } from "./constants/Items";
import MenuItems from "./Components/Menu/MenuItems";
import Login from "./Components/Admin/Login";
import { Routes, Route } from "react-router-dom";
import ActionsPage from "./Components/ActionsPage/ActionsPage";
import BeerSlider from "./Components/Slider/BeerSlider";
import HomePage from "./Home/HomePage";
import Header from "./Components/UI/Header";
import "./App.css";
import Registration from "./Components/Admin/Registration";

function App() {
  const [items] = useState<MenuItemModel[]>(menuItems);
  const [session, setSession] = useState<string | null>(null);

  const checkIfUserIsLoggedIn = (id?: string) => {
    id ? setSession(id):setSession(null);
  };

  useEffect(() => {
    console.log("Start");
  }, []);

  if (items.length < 1) {
    return null;
  }

  return (
    <div className="App">
      <Header session={session} setSession={checkIfUserIsLoggedIn}/>
      <Routes>
        <Route path="/pivskiCjenik" element={<HomePage />} />
        <Route
          path="/pivskiCjenik/menu"
          element={
            <div className="background-container">
              <h1>Cjenik</h1>
              <MenuItems items={items} />
            </div>
          }
        />
        <Route
          path="/pivskiCjenik/login"
          element={
            <Login session={session} setSession={checkIfUserIsLoggedIn} />
          }
        />
        <Route path="/pivskiCjenik/reg" element={<Registration session={session} setSession={checkIfUserIsLoggedIn}/>}/>
        <Route
          path="/pivskiCjenik/slider"
          element={<BeerSlider beers={items} />}
        />
        <Route path="/pivskiCjenik/action" element={<ActionsPage />} />
      </Routes>
    </div>
  );
}

export default App;
