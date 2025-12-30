import { useRef } from "react"
import { toast } from "react-toastify";

function LisaUudis() {
  const uudiseRef = useRef(null);

  const lisaUusUudis = () => {
    let uudised = JSON.parse(localStorage.getItem("uudised")) || [];
    uudised.push(uudiseRef.current.value);
    uudised = JSON.stringify(uudised);
    localStorage.setItem("uudised", uudised);
    toast.success("Uudis lisatud!");
  }

  return (
    <div style={{ margin: "20px 8px"}}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
        <label className="field-label">Uudise nimi</label>
        <input ref={uudiseRef} />
        <button onClick={lisaUusUudis}>Lisa uudis</button>
      </div>
    </div>
  )
}
export default LisaUudis