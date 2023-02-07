import { Outlet } from "react-router-dom";
/**Definiiendo pagina de inicion como OUTLET a los elementos hijos*/
function Layout() {
  /**cabeceras para los enrutamiento de sus hijos de ruta  */
  return (
    <div className="w-full ">
      <Outlet />
    </div>
  );
}
export default Layout;
