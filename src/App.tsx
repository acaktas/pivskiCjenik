import { useState } from "react";
import { MenuItemModel } from "./models/MenuItemModel";
import { menuItems } from "./constants/Items";
import MenuItems from "./Components/Menu/MenuItems";
import Login from "./Components/Admin/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [items] = useState<MenuItemModel[]>(menuItems);

  if (items.length < 1) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="background-container">
              <h1>Cjenik</h1>
              <MenuItems items={items} />
            </div>
          }
        />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
