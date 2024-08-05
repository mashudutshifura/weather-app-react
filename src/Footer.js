import React from "react";
import "./weather.css";

export default function Footer() {
  return (
    <footer>
      <p>
        This project was coded by{" "}
        <a href="https://github.com/mashudutshifura" target="_blank">
          Mashudu Tshifura
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/mashudutshifura/weather-app-react"
          target="_blank"
        >
          on GitHub
        </a>{" "}
        and{" "}
        <a href="https://timely-panda-adda0f.netlify.app/?" target="_blank">
          hosted on Netlify
        </a>
        .
      </p>
    </footer>
  );
}
