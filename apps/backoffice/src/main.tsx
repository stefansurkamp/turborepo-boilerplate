import React from "react";
import ReactDOM from "react-dom/client";
// import { card } from "@rms/ui";
import "./tw.css";
import "@rms/ui/styles.css";
import { Card } from "@rms/ui/Card";
import { Button } from "@rms/ui/Button";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* client vite <Button /> */}main file
    <Card title="it works!" href="#">
      This is a card - wild!
    </Card>
    <Button>I'm a button</Button>
  </React.StrictMode>
);
