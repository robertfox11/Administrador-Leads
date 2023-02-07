import LeadFilter from "../components/LeadFilter";
function Index() {
  /**Pagina de index para ver los datos que entrar primero */
  return (
    <>
      <div className="w-full">
        <h1 className="font-black text-4xl text-blue-900">Leads</h1>
        <p className="mt-3">Administra tus Leads</p>
        <LeadFilter />
      </div>
    </>
  );
}
export default Index;
