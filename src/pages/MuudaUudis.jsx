import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";

function MuudaUudis() {
  const { index } = useParams();
  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
  const uudis = uudised[index];
  const uudiseRef = useRef(null);
  const navigate = useNavigate(); 

  const muuda = () => {
    uudised[index] = uudiseRef.current.value;
    localStorage.setItem("uudised", JSON.stringify(uudised));
    toast.success("Uudis muudetud!");
    navigate("/halda-uudiseid");
  }

  return (
    <div style={{ margin: "20px 8px"}}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
        <label className="field-label">Uudise nimi</label>
        <input type="text" defaultValue={uudis} ref={uudiseRef} />
        <button onClick={muuda}>Muuda</button>
      </div>
    </div>
  )
}
export default MuudaUudis