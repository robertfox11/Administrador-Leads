import { useNavigate } from "react-router-dom";
function Leads({ lead }) {
  const navigate = useNavigate();
  const { titulo, fecha_creacion, fecha_cierre, estado_lead, id } = lead;

  return (
    <tr className="border-b">
      <td className="p-1 border border-gray-50">
        <p className="text-gray-600"> 0000{id} </p>
      </td>
      <td className="p-2 border border-gray-50">
        <p className="text-gray-600"> {estado_lead}</p>
      </td>
      <td className="p-2 border border-gray-50">
        <p className="text-gray-600">{titulo} </p>
      </td>
      <td className="p-2 border border-gray-50">
        <p className="text-gray-600">{fecha_creacion} </p>
      </td>
      <td className="p-2 border border-gray-50">
        <p className="text-gray-600">
          {!fecha_cierre ? "no hay fecha" : fecha_cierre}{" "}
        </p>
      </td>
      <td className="p-2 gap-3 justify-center border border-gray-50">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          onClick={() => navigate(`/lead/${id}/show`)}
        >
          Ver Lead
        </button>
      </td>
    </tr>
  );
}

export default Leads;
