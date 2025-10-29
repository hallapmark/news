import { useState } from "react";

function Meist() {
  const [kontakt, setKontakt] = useState("");

  function n2itaKontakt(e, kontakt) {
    e.stopPropagation();
    setKontakt(kontakt);
  }

  return (
    <div onClick={() => setKontakt("")}>
      <div>See on meist leht, nähtav localhost:5173/meist aadressil</div>
      <div>Meie töötajad:</div>
      <br />

      <div>Arvo Pärt</div>
      <div>Uudisklippide taustamuusika</div>
      <button onClick={(e) => n2itaKontakt(e, "+372 123123")}>Võta ühendust</button>
      <br />
      <br />

      <div>Kelly Sildaru</div>
      <div>Püstolreporter</div>
      <button onClick={(e) => n2itaKontakt(e, "+372 123124")}>Võta ühendust</button>
      <br />
      <br />

      <div>Edward von Lõngus</div>
      <div>Uudiste kujundamine</div>
      <button onClick={(e) => n2itaKontakt(e, "+372 123125")}>Võta ühendust</button>
      <br />
      <br />

      <div>Kerli Kõiv</div>
      <div>Välisturgude spetsialist</div>
      <button onClick={(e) => n2itaKontakt(e, "+372 123126")}>Võta ühendust</button>
      <br />
      <br />

      {kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div>
  );
}

export default Meist;
