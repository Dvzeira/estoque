
import { createBrowserRouter } from "react-router-dom"
import Padrao from "./pages/Padrao"
import Home from "./pages/Home"
import ItensRoot from "./pages/itensRoot"
import Itens from "./pages/Itens"
import Item from "./pages/Item"
import NewItem from "./pages/createItem"
import EditItem from "./pages/EditItem"






const router = createBrowserRouter([
  {
    path: "/",
    element: <Padrao />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "itensroot",
        element: <ItensRoot />,
        children: [
          {
            index: true,
            element: <Itens />
          },
          {
            path: "newitem",
            element: <NewItem />
          },
          {
            path: ":id/update",
            element: <EditItem />
          },
          {
            path: ":id",
            element: <Item />,
          }
        ]
      },
    ]
  }
]);

export default router;
