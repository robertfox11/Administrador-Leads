import React, { useState, useEffect } from "react";
import axios from "axios";
import Leads from "./Leads";
import BtnEnvioEmails from "./BtnEnvioEmails";
const LeadFilter = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}?s`, {
          params: {
            estatus: selectedStatus,
            order: selectedOrder,
          },
        });
        setLeads(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLeads();
  }, [selectedStatus, selectedOrder]);
  // console.log(leads.length);
  return (
    <div className="w-full  ">
      <div className="w-full grid grid-cols-3 p-2 gap-1">
        <div>
          <label
            htmlFor="selectedStatus"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Selecciona una Estado
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-gray-50 border border-gray-300
                
              text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Elige un estado</option>
            <option value="abierto">abierto</option>
            <option value="cerrado">cerrado</option>
            <option value="rechazado">rechazado</option>
            <option value="aceptado">aceptado</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="selectedOrder"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Selecciona un Orden
          </label>
          <select
            value={selectedOrder}
            onChange={(e) => setSelectedOrder(e.target.value)}
            className="bg-gray-50 border border-gray-300
                
              text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Elige un orden</option>
            <option value="asc">Fecha de creación (ascendente)</option>
            <option value="desc">Fecha de creación (descendente)</option>
          </select>
        </div>
        <div>
          <BtnEnvioEmails btnText="Envio de Emails" />
        </div>
      </div>
      {loading ? (
        <p className="text-center mt-10">Cargando ...</p>
      ) : (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Leads</th>
              <th className="p-2">Estado</th>
              <th className="p-2">Titulo</th>
              <th className="p-2">Fecha de creacion</th>
              <th className="p-2">Fecha de cierre</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <Leads lead={lead} key={lead.id} length={leads.length} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeadFilter;
