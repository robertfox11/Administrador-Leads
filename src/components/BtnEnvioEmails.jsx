import axios from "axios";
function BtnEnvioEmails(props) {
  const enviaEmails = async () => {
    let url = `${import.meta.env.VITE_API_URL}`;
    let indice = url.indexOf("/", 22);
    url = url.slice(0, indice);

    try {
      const response = await axios.get(`${url}/closeOldLeads`);
      if (response.data[0].result) {
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    // <>
    <div className="w-full pt-1  ">
      <label></label>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-6 py-2  px-4 rounded"
        onClick={enviaEmails}
      >
        {props.btnText}
      </button>
    </div>
  );
}
export default BtnEnvioEmails;
