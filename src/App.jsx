// App.js
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ItemContexttProvider } from "./contexts/contexto"; // Importe o ItemContexttProvider

function App() {
  return (
    <ItemContexttProvider> {/* Passe o ItemContexttProvider aqui para fornecer o contexto */}
      <RouterProvider router={router} />
    </ItemContexttProvider>
  );
}

export default App;
