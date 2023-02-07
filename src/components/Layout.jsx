import { Outlet } from "react-router-dom";
/**Definiiendo pagina de inicion como OUTLET a los elementos hijos*/
function Layout() {
  return (
    <div className="w-full ">
      <Outlet />
    </div>
  );
}
export default Layout;
