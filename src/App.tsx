import { useEffect, useState } from "react";
import { MenuItemModel } from "./models/MenuItemModel";
import { menuItems } from "./constants/Items";
import MenuItems from "./Components/Menu/MenuItems";
import Login from "./Components/Admin/Login";
import {  Routes, Route } from "react-router-dom";
import ActionsPage from "./Components/ActionsPage/ActionsPage";
import BeerSlider from "./Components/Slider/BeerSlider";
import "./App.css";

function App() {
  const [items] = useState<MenuItemModel[]>(menuItems);

  useEffect(()=>{
    console.log("Start")
  },[])

  if (items.length < 1) {
    return null;
  }

  return (
    <div className="App">
          <h1 className="title">Pivkan</h1>
      <Routes>
        
        <Route
          path="/pivskiCjenik"
          element={
            <div className="background-container">
              <h1>Cjenik</h1>
              <MenuItems items={items} />
            </div>
          }
        />
        <Route path="/pivskiCjenik/login" element={<Login/>}/>
        <Route path="/pivskiCjenik/slider" element={<BeerSlider beers={items}/>}/>
        <Route path="/pivskiCjenik/action" element={<ActionsPage/>}/>
        
      </Routes>
      </div>
  );
}

export default App;
