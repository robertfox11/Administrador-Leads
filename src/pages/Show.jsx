import { useLoaderData, useNavigate } from "react-router-dom";
import { obtenerLeadById } from "../data/leads";

export function loader({ params }) {
  const leads = obtenerLeadById(params.leadId);
  return leads;
}
function Show() {
  const leads = useLoaderData();
  const navigate = useNavigate();
  return (
    <>
      <div className="p-2">
        <div className="flex justify-end">
          <button
            className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
            onClick={() => navigate(`/`)}
          >
            Volver
          </button>
        </div>
        <h1 className="font-black text-4xl text-blue-900">
          Leads 0000{leads.id}
        </h1>
        <div className="grid grid-cols-2">
          <div>
            <span className="font-bold">Leads: </span>0000{leads.id}
          </div>
          <div>
            <span className="font-bold">Titulo: </span>
            {leads.titulo}
          </div>
          <div>
            <span className="font-bold">Estado: </span>
            {leads.estado_lead}
          </div>
          <div>
            <span className="font-bold">Fecha de Creacion: </span>
            {leads.fecha_creacion}
          </div>
          <div>
            <span className="font-bold">Fecha cierre: </span>
            {leads.fecha_cierre
              ? leads.fecha_cierre
              : "no tiene fecha de cierre"}
          </div>
        </div>
      </div>
    </>
  );
}
export default Show;
