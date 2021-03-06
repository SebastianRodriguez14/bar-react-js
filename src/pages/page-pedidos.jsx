import { Route, Routes } from "react-router-dom";
import { Historial } from "../components/compras-component/historial/historial";
import { CarritoCompras } from "../components/compras-component/pedidos/carrito-compras";
import { Header } from "../components/producto-component/header";
import { DetallePedido } from "../components/compras-component/detalle/detalle";

export const PagePedidos = () => {
  return (
    <div>
      <Header />
      <div className="p-8 container mx-auto mt-5">
        <Routes>
          <Route path="/historial" element={<Historial />}></Route>
          <Route path="/detalle/:id" element={<DetallePedido />}></Route>
          <Route path="/carrito" element={<CarritoCompras />}>
            {" "}
          </Route>
        </Routes>
      </div>
    </div>
  );
};
