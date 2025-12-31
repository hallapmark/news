import { useState } from "react";
import { Link } from "react-router-dom";

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
        <div key={uudis} style={{ display: "flex", gap: "20px", alignItems: "center", width: "100%" }}>
          <div style={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{uudis}</div>
          <div style={{ display: "flex", gap: "20px", marginLeft: "auto" }}>
            <Link to={ "/muuda/" + index }><button>Muuda</button></Link>
            <button onClick={() => kustuta(index)}>X</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default HaldaUudiseid;