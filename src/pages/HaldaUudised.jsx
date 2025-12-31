import { useState } from "react";

function HaldaUudiseid() {
  const [uudised, muudaUudised] = useState(JSON.parse(localStorage.getItem("uudised")) || []);

  const kustuta = (idx) => {
    uudised.splice(idx, 1);
    localStorage.setItem("uudised", JSON.stringify(uudised));
    muudaUudised(uudised.slice());
  }

  return (  
    <div style={{ margin: "20px 8px" }}>
      <h1>Halda uudiseid</h1>
      <div style={{ display: "inline-flex", flexDirection: "column", gap: "20px", alignItems: "stretch" }}>
        { uudised.map((uudis, index) =>
        <div key={uudis} style={{ display: "flex", gap: "20px", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <div style={{ minWidth: 0 }}>{uudis}</div>
          <button onClick={() => kustuta(index)}>X</button>
        </div>
        )}
      </div>
    </div>
  );
}

export default HaldaUudiseid;