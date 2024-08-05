import React from "react";
import "./styles.css"
import "./weather.css"
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";


export default function App() {
  return (
    <div className="App">
      <Search />
      <Weather />
      <Footer />
    </div>
  );
}
