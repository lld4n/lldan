import React from "react";
import "../scss/Start.scss";
import First from "./First";
import Second from "./Second";
import Third from "@/components/Third";
export default function Start() {
  return (
    <main className="main">
      <First />
      <Second />
      <Third />
    </main>
  );
}
