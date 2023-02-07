export async function obtenerLeads() {
  /**Obtiene los datos con la api y la variable entorno para
   * devolver todos los datos
   */
  const respuesta = await fetch(import.meta.env.VITE_API_URL);
  const resultado = await respuesta.json();
  return resultado;
}

export async function obtenerLeadById(id) {
  /**Obtiene los datos por id */
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}${id}`);
  const resultado = await respuesta.json();
  return resultado;
}
