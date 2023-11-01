import React from "react";
import "../scss/Start.scss";
import First from "./First";
import Second from "./Second";
import Third from "@/components/Third";
export default function Start() {
  return (
    <main className="main">
      <div className="buffer">Проверяю, как работают гугл роботы</div>
      <First />
      <Second />
      <Third />
    </main>
  );
}
