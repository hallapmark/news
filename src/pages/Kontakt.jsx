import { useState } from "react";
import "./Kontakt.css";

function Kontakt() {
  const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
  const [n2itaTelYlemiste, muudaN2itaTelYlemiste] = useState(false);
  const [n2itaTelTasku, muudaN2itaTelTasku] = useState(false);

  return (
    <div>
      <div>See on kontaktide leht, nähtav localhost:5173/kontakt aadressil</div>
      <div>Võta meiega ühendust:</div>
      <br />

      <div
        className={`esindus ${n2itaTelKristiine ? "aktiivne" : ""}`}
        onClick={() => muudaN2itaTelKristiine(!n2itaTelKristiine)}
      >
        Kristiine keskus
      </div>
      <div>Endla 45</div>
      {n2itaTelKristiine && <div>+372 12312312</div>}

      <br />
      <div
        className={`esindus ${n2itaTelYlemiste ? "aktiivne" : ""}`}
        onClick={() => muudaN2itaTelYlemiste(!n2itaTelYlemiste)}
        >
          Ülemiste keskus
      </div>
      <div>Suur-Sõjamäe 4</div>
      {n2itaTelYlemiste && <div>+372 12312313</div>}

      <br />
      <div
        className={`esindus ${n2itaTelTasku ? "aktiivne" : ""}`}
        onClick={() => muudaN2itaTelTasku(!n2itaTelTasku)}
      >
        Tasku keskus
      </div>
      <div>Turu 2</div>
      {n2itaTelTasku && <div>+372 12312314</div>}
    </div>
  );
}

export default Kontakt;
