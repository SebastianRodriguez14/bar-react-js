import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./detalle.css";

export const Detalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState({});
  

  useEffect(() => {
    const obtenerProducto = async () => {
      const result = await axios.get("http://localhost:8069/producto/" + id);
      setProducto(result.data);
      console.log(result.data);
      result.data.estado ? null : navigate("/notfound");
    };
    obtenerProducto();
  }, []);

  return (
    <div className="relative md:mt-10">
      <div className="container p-4 lg:p-8 lg:px-10  lg:max-w-7xl align-middle mx-auto flex flex-col gap-20 lg:gap-10 items-center bg-white shadow-md md:flex-row  ">
        <img className="img" src={producto?.imagen} alt="" />
        <div className="flex flex-col  justify-between space-y-4 lg:pl-10 leading-normal">
          <h5 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 ">
            {producto?.descripcion}
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            Marca: {producto?.marca?.nombre}
          </p>
          <input
            type="number"
            autoFocus
            className=" p-2 border-2 border-gray-300 w-1/3 md:w-2/6 lg:w-1/5 rounded"
          />
          <p className="precio">S/. {producto?.precio}</p>
          <button className="cantidad">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  );
};
