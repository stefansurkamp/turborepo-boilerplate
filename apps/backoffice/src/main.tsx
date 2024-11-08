import React from "react";
import ReactDOM from "react-dom/client";
import "./tw.css";
import "@rms/ui/styles.css";
import { Card } from "@rms/ui/Card";
import { Button } from "@rms/ui/Button";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <h1>main file</h1>
    <Card title="it works!" href="#">
      This is a card - wild!
    </Card>
    <Button>I'm a button</Button>
  </React.StrictMode>
);
