import { useRef, useState } from "react"
import { toast } from "react-toastify";

function LisaUudis() {
  const uudiseRef = useRef(null);
  const [sonum, uuendaSonum] = useState("");

  const lisaUusUudis = () => {
    if (sonum) {
      toast.error("Paranda enne sistestamist vead")
      return;
    }

    let uudised = JSON.parse(localStorage.getItem("uudised")) || [];
    uudised.push(uudiseRef.current.value);
    uudised = JSON.stringify(uudised);
    localStorage.setItem("uudised", uudised);
    toast.success("Uudis lisatud!");
  }

  const kontrolli = () => {
    uuendaSonum("");

    if (uudiseRef.current.value.charAt(0) === uudiseRef.current.value.charAt(0).toLowerCase()) {
      uuendaSonum("Sisestasid uudise väikse tähega, palun paranda!")
    }

    if (uudiseRef.current.value.includes("  ")) {
      uuendaSonum("Sisestasid kaks tühikut, palun paranda!")
    }
  }

  return (
    <div style={{ margin: "20px 8px"}}>
      <div>{sonum}</div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
        <label className="field-label">Uudise nimi</label>
        <input onChange={kontrolli} ref={uudiseRef} />
        <button onClick={lisaUusUudis}>Lisa uudis</button>
      </div>
    </div>
  )
}
export default LisaUudis